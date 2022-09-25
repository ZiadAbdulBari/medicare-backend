const CoreService = require("../models/Service.model");
const {coreServiceValidation} = require('../helper/validation');

const getAllCoreService = async (req,res)=>{
    try{
        const coreService = await CoreService.find();
        res.status(200).json({
            "mgs":"ok",
            coreService,
        })
    }
    catch{
        res.status(500).json({
            "mgs":"Server error",
        })
    }
}
const createCoreService = async (req,res)=>{
    // console.log(req.body);
    const {error} = coreServiceValidation(req.body);
    if(error){
        console.log(error);
        return res.redirect('/admin/core-service');
    }
    const service = new CoreService({
        service_name: req.body.service_name,
        image: '',
        title: req.body.title,
        description: req.body.description,
        number_of_doctor: req.body.number_of_doctor
    });
    try{
        await service.save();
        // res.status(201).json({
        //     "status":201,
        //     "mgs":"Successfully created",
        // })
        return res.redirect('/admin/core-service');
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            "status":500,
            "mgs":"server error",
        })
        return res.redirect('/admin/core-service');
    }
}
const updateCoreService = async (req,res)=>{
    const {error} = coreServiceValidation(req.body);
    if(error){
        console.log(error);
        return res.redirect('/');
    }
    const service = await  CoreService.findOne({_id:req.params.id});
    service.service_name= req.body.service_name,
    service.image= '',
    service.title= req.body.title,
    service.description= req.body.description,
    service.number_of_doctor= req.body.number_of_doctor
    
    try{
        await service.save();
        res.status(200).json({
            "status":200,
            "mgs":"Successfully updated",
        })
        return res.redirect('/');
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            "status":500,
            "mgs":"server error",
        })
        return res.redirect('/');
    }
}
const deleteCoreService = async (req,res)=>{
    const service = await CoreService.findOneAndRemove({_id:req.params.id}, (error)=>{
        if(error){
            console.log(error);
            return res.redirect('/');
        }
        res.status(201).json({
            "status":201,
            "mgs":"Successfully deleted",
        })
        return res.redirect('/');
    });
    
}
module.exports.getAllCoreService = getAllCoreService;
module.exports.createCoreService = createCoreService;
module.exports.updateCoreService = updateCoreService;
module.exports.deleteCoreService = deleteCoreService;

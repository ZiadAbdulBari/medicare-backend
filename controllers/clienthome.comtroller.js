const BannerContent = require("../models/Banner.model");
const CoreService = require("../models/Service.model");
const MedicalService = require('../models/Medical.model');
const addBanner = async(req,res)=>{

}
const addService = async(req,res)=>{
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
        res.redirect('/admin/core-service');
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            "status":500,
            "mgs":"server error",
        })
        res.redirect('/admin/core-service');
    }
}
const addMedicalService = async(req,res)=>{
    const medicalService = await MedicalService.findOne({_id:req.params.id});
    medicalService.video_link = req.body.video_link;
    medicalService.title = req.body.title;
    medicalService.subtitle = req.body.subtitle;
    medicalService.description = req.body.description;
    try{
        await medicalService.save();
        res.status(200).redirect('/admin/medical-service');
        // .json({
        //     "status":200,
        //     "mgs":'Seccessfully updated'
        // })
    }
    catch(error){
        console.log(error);
        res.status(500).redirect('/admin/medical-service');
    }
}

module.exports.addBanner = addBanner;
module.exports.addService = addService;
module.exports.addMedicalService = addMedicalService;
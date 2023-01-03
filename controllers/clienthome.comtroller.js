const BannerContent = require("../models/Banner.model");
const CoreService = require("../models/Service.model");
const MedicalService = require('../models/Medical.model');
const fs = require('fs');
const { send } = require("process");
const addBanner = async(req,res)=>{
    const banner = new BannerContent({
        image: `${process.env.BASE_URL}${req.file.destination.slice(1)}/${req.file.filename}`,
        content: req.body.content
    })
    try{
        await banner.save();
        res.status(201).redirect('/admin/banner');
    }
    catch(error){
        console.log(error);
        res.status(500).redirect('/admin/banner');
    }
}
const addService = async(req,res)=>{
    const service = new CoreService({
        service_name: req.body.service_name,
        image: `${process.env.BASE_URL}${req.file.destination.slice(1)}/${req.file.filename}`,
        title: req.body.title,
        description: req.body.description,
        number_of_doctor: req.body.number_of_doctor
    });
    try{
        await service.save();
        res.status(201)
        // .json({
        //     "status":201,
        //     "mgs":"Successfully created",
        // })
        res.redirect('/admin/core-service');
    }
    catch(error){
        console.log(error);
        res.status(500)
        // .json({
        //     "status":500,
        //     "mgs":"server error",
        // })
        res.redirect('/admin/core-service');
    }
}
const editCoreService = async (req,res)=>{
    // const {error} = coreServiceValidation(req.body);
    // if(error){
    //     console.log(error);
    //     return res.redirect('/');
    // }
    const service = await  CoreService.findOne({_id:req.body.id});
    let img = service.image.split('/');
    let directoryPath = './public/upload/';
    let fileName = img[img.length-1];
    fs.unlink(directoryPath + fileName, (err) => {
        if (err) {
            // throw err;
            console.log(err);
        }
    });
    if(req.file){
        service.image = `${process.env.BASE_URL}${req.file.destination.slice(1)}/${req.file.filename}`;
    }
    service.service_name= req.body.service_name,
    service.title= req.body.title,
    service.description= req.body.description,
    service.number_of_doctor= req.body.number_of_doctor
    
    try{
        await service.save();
        res.status(200).redirect('/admin/core-service');
    }
    catch(error){
        console.log(error);
        res.status(500).redirect(`/admin/edit-core-service/${req.body.id}`);
    }
}
const deleteCoreService = async (req,res)=>{
    try{
        const coreService = await CoreService.findOne({_id:req.body.id});
        let img = coreService.image.split('/');
        let directoryPath = './public/upload/';
        let fileName = img[img.length-1];
        fs.unlink(directoryPath + fileName, (err) => {
            if (err) {
                // throw err;
                console.log(err);
            }
        });
        await CoreService.deleteOne({_id:req.body.id});
        res.status(200).redirect('/admin/core-service');
    }
    catch(error){
        res.status(500).redirect('/admin/core-service');
    }

}
const addMedicalService = async(req,res)=>{
    const medicalService = await MedicalService.findOne({_id:req.body.id});
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
module.exports.editCoreService = editCoreService;
module.exports.deleteCoreService = deleteCoreService;
module.exports.addMedicalService = addMedicalService;
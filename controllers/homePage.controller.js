const Banner = require('../models/Banner.model');
const Service = require('../models/Service.model');
const MedicalService = require('../models/Medical.model');
const Doctor = require('../models/User.model');
const getBannerApi = async (req,res)=>{
    try{
        const allBanner = await Banner.find();
        res.status(200).json(allBanner);
    }
    catch(error){
        res.status(500);
    }
}
const getCoreServiceApi = async (req,res)=>{
    try{
        const coreService = await Service.find();
        res.status(200).json(coreService);
    }
    catch(error){
        res.status(500);
    }
}
const getMedicalServiceApi = async (req,res)=>{
    try{
        const medicalService = await MedicalService.find();
        res.status(200).json(medicalService);
    }
    catch(error){
        res.status(500);
    }
}
const getDoctorApi = async (req,res)=>{
    try{
        const doctor = await Doctor.find({role:'doctor'}).limit(4);
        console.log(doctor)
        res.status(200).json(doctor);
    }
    catch(error){
        res.status(500);
    }
}
module.exports.getBannerApi = getBannerApi;
module.exports.getCoreServiceApi = getCoreServiceApi;
module.exports.getMedicalServiceApi = getMedicalServiceApi;
module.exports.getDoctorApi = getDoctorApi;
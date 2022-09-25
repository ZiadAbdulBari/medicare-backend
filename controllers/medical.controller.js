const MedicalService = require('../models/Medical.model');
const {medicalServiceValidation} = require('../helper/validation');

const getMedicalService = async (req,res)=>{
    try{
        const medicalService = await MedicalService.find();
        res.status(200).json({
            medicalService
        })
    }
    catch(error){
        res.status(500).json({
            "mgs":"server error"
        })
    }
}
const editMedicalService= async (req,res)=>{
    const {error} = medicalServiceValidation(req.body);
    if(error){
        console.log(error);
        // return res.redirect('/');
    }
    const medicalService = await MedicalService.findOne({_id:req.params.id});
    medicalService.video_link = req.body.video_link;
    medicalService.title = req.body.title;
    medicalService.subtitle = req.body.subtitle;
    medicalService.description = req.body.description;
    try{
        medicalService.save();
        res.status(200).json({
            "status":200,
            "mgs":'Seccessfully updated'
        })
        return
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            "status":500,
            "mgs":'Server problem'
        })
        return
    }
}

module.exports.getMedicalService = getMedicalService;
module.exports.editMedicalService = editMedicalService;
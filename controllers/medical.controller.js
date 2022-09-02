const MedicalService = require('../models/medical.model');
const medicalServiceValidation = require('../helper/validation');

const editMedicalService= async (req,res)=>{
    const {error} = medicalServiceValidation(req.body);
    if(error){
        console.log(error);
        return res.redirect('/');
    }
    const medicalService = await MedicalService.findOne({_id:req.params.id});
    medicalService.video_link = req.body.video_link;
    medicalService.title = req.body.title;
    medicalService.subtitle = req.body.subtitle;
    medicalService.description = req.body.description;
    try{
        medicalService.save();
        return
    }
    catch(error){
        console.log(error);
        return
    }
}

module.exports = editMedicalService;
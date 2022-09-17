const Doctor = require("../models/doctor.model");
const User = require("../models/user.model");
const {doctorListValidation} = require('../helper/validation');

const getAllDoctor = async (req,res)=>{
    try{
        const allDoctor = await User.find({role:req.params.role, is_activeted:true});
        res.status(200).json({
            allDoctor
        })
    }
    catch{
        res.status(500).json({
            "mgs":"Server error"
        })
    }
}
const createDoctor = async (req,res)=>{
    const {error} = doctorListValidation(req.body);
    if(error){
        console.log(error);
        return res.redirect('/');
    }
    const doctor = new Doctor({
        doctor_name: req.body.doctor_name,
        image: '',
        specialished_on: req.body.specialished_on,
        description: req.body.description,
    });
    try{
        await doctor.save();
        res.status(201).json({
            "status":201,
            "mgs":"Successfully created",
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
const updateDoctor = async (req,res)=>{
    const {error} = doctorListValidation(req.body);
    if(error){
        console.log(error);
        return res.redirect('/');
    }
    const doctor = await  Doctor.findOne({_id:req.params.id});
    doctor.doctor_name = req.body.doctor_name;
    doctor.image = '';
    doctor.specialished_on = req.body.specialished_on;
    doctor.description = req.body.description;

    try{
        await doctor.save();
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
const deleteDoctor = async (req,res)=>{
    const doctor = await Doctor.findOneAndRemove({_id:req.params.id}, (error)=>{
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

module.exports.getAllDoctor = getAllDoctor;
module.exports.createDoctor = createDoctor;
module.exports.updateDoctor = updateDoctor;
module.exports.deleteDoctor = deleteDoctor;
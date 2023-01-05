const User = require("../models/User.model");
const {doctorListValidation} = require('../helper/validation');
const bcrypt = require('bcrypt');
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
const createDoctor = async (req,res)=>{
    if(req.method !== 'POST'){
        res.status(405);
        res.redirect('/');
    }
    try{
        let available = [
            {
                "day":req.body.sunday?req.body.sunday:'',
                "time":req.body.sunday_time,
                "hospital":req.body.sunday_hospital,
                "patient_cheack":req.body.sunday_patient,
            },
            {
                "day":req.body.monday?req.body.monday:'',
                "time":req.body.monday_time,
                "hospital":req.body.monday_hospital,
                "patient_cheack":req.body.monday_patient,
            },
            {
                "day":req.body.tuesday?req.body.tuesday:'',
                "time":req.body.tuesday_time,
                "hospital":req.body.tuesday_hospital,
                "patient_cheack":req.body.tuesday_patient,
            },
            {
                "day":req.body.wednesday?req.body.wednesday:'',
                "time":req.body.wednesday_time,
                "hospital":req.body.wednesday_hospital,
                "patient_cheack":req.body.wednesday_patient,
            },
            {
                "day":req.body.thursday?req.body.thursday:'',
                "time":req.body.thursday_time,
                "hospital":req.body.thursday_hospital,
                "patient_cheack":req.body.thursday_patient,
            },
            {
                "day":req.body.friday?req.body.friday:'',
                "time":req.body.friday_time,
                "hospital":req.body.friday_hospital,
                "patient_cheack":req.body.friday_patient,
            },
            {
                "day":req.body.saturday?req.body.saturday:'',
                "time":req.body.saturday_time,
                "hospital":req.body.saturday_hospital,
                "patient_cheack":req.body.saturday_patient,
            },
        ];
        let profile_img='';
        if(req.file){
            profile_img = `${process.env.BASE_URL}${req.file.destination.slice(1)}/${req.file.filename}`;
        }
        let password = '123';
        let encryptedPassword = await bcrypt.hash(password, 10);
        let newDoctor = new User({
            "name": req.body.name,
            "email": req.body.email,
            "password": encryptedPassword,
            "profile_img": profile_img,
            "work_at": req.body.work_at,
            "speacialist_on": req.body.speacialist_on,
            "degree":  req.body.degree,
            "NID": req.body.NID,
            "available": available,
            "role": "doctor",
            "contact": req.body.contact,
            "is_activeted": true,
        })
        await newDoctor.save();
        res.status(201)
        res.redirect('/admin/add-doctor');
    }
    catch(error){
        res.status(500);
        res.redirect('/admin/add-doctor');
    }
}
const getSchdeul = async (req,res)=>{
    if(req.method !== 'GET'){
        res.status(405);
        res.redirect('back');
    }
    try{
        let schdiul = await User.find({_id:req.params.id});
        let data = schdiul[0].available.filter(day=>day.day && day.day!='');
        // console.log(data);
        res.status(200).json({
            data
        })
    }
    catch(error){
        res.status(500).json({
            "mgs":"Server error"
        })
    }
}
module.exports.createDoctor = createDoctor;
module.exports.getAllDoctor = getAllDoctor;
module.exports.updateDoctor = updateDoctor;
module.exports.deleteDoctor = deleteDoctor;
module.exports.getSchdeul = getSchdeul;
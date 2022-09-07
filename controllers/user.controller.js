const User = require("../models/user.model");
const { uuid } = require('uuidv4');
const bcrypt = require('bcrypt');

const userRegistration = async (req, res)=>{
    if(req.method !== 'POST'){
        return res.status(405).json({
            'status':'405',
            "mgs":"method not allowed"
        })
    }
    const email_check  = await User.findOne({email:req.body.email});
    if(email_check){
        return res.status(409).json({
            "status": 409,
            "mgs": "Try another email"
        })
    }
    const password = await bcrypt.hash(req.body.password, 10);
    let user;
    if(req.params.user==='doctor'){
        user = new User({
            name: req.body.name,
            email: req.body.email,
            password:password,
            role:'doctor',
        })
    }
    if(req.params.user==='patient'){
        user = new User({
            name: req.body.name,
            email: req.body.email,
            password:password,
            role:'patient',
        })
    }
    try{
        await user.save();
        return res.status(200).json({
            "status":200,
            "mgs":"successfully created",
            "data":user
        })
    }
    catch(error){
        return res.status(500).json({
            "status":500,
            "mgs":"server error",
        })
    }
}
const editUserProfile = async (req, res)=>{
    // const password = await bcrypt.hash(req.body.password, 10);
    if(req.method !== 'POST'){
        return res.status(405).json({
            'status':'405',
            "mgs":"method not allowed"
        })
    }
    const userData = await User.findOne({_id:req.params.id});
    if(userData.role === 'doctor'){
        let available = [
            {
                "day":req.body.sunday,
                "time":req.body.sunday_time,
                "hospital":req.body.sunday_hospital,
                "patient_cheack":req.body.sunday_patient,
            },
            {
                "day":req.body.monday,
                "time":req.body.monday_time,
                "hospital":req.body.monday_hospital,
                "patient_cheack":req.body.monday_patient,
            },
            {
                "day":req.body.tuesday,
                "time":req.body.tuesday_time,
                "hospital":req.body.tuesday_hospital,
                "patient_cheack":req.body.tuesday_patient,
            },
            {
                "day":req.body.wednesday,
                "time":req.body.wednesday_time,
                "hospital":req.body.wednesday_hospital,
                "patient_cheack":req.body.wednesday_patient,
            },
            {
                "day":req.body.thursday,
                "time":req.body.thursday_time,
                "hospital":req.body.thursday_hospital,
                "patient_cheack":req.body.thursday_patient,
            },
            {
                "day":req.body.friday,
                "time":req.body.friday_time,
                "hospital":req.body.friday_hospital,
                "patient_cheack":req.body.friday_patient,
            },
            {
                "day":req.body.saturday,
                "time":req.body.saturday_time,
                "hospital":req.body.saturday_hospital,
                "patient_cheack":req.body.saturday_patient,
            },
        ];
        userData.name = req.body.name;
        userData.email = req.body.email;
        userData.work_at = req.body.work_at;
        userData.speacialist_on = req.body.speacialist_on;
        userData.degree = req.body.degree;
        userData.NID = req.body.NID;
        userData.available = available;
    }
    if(userData.role === 'patient'){
        userData.name = req.body.name;
        userData.email = req.body.email;
        userData.contact = req.body.contact;
        userData.address = req.body.address;
        userData.age = req.body.age;
    }    
    try{
        await userData.save();
        return res.status(200).json({
            "status":200,
            "mgs":"successfully updated",
            "data":userData
        })
    }
    catch(error){
        return res.status(500).json({
            "status":500,
            "mgs":"server error",
        })
    }
}
const addDoctor = async (req,res)=>{
    if(req.method !== 'POST'){
        return res.status(405).json({
            'status':'405',
            "mgs":"method not allowed"
        })
    }
    const email_check  = await User.findOne({email:req.body.email});
    console.log(email_check);
    if(email_check){
        return res.status(409).json({
            "status": 409,
            "mgs": "Try another email"
        })
    }
    if(req.params.user==='doctor'){
        let available = [
            {
                "day":req.body.sunday,
                "time":req.body.sunday_time,
                "hospital":req.body.sunday_hospital,
                "patient_cheack":req.body.sunday_patient,
            },
            {
                "day":req.body.monday,
                "time":req.body.monday_time,
                "hospital":req.body.monday_hospital,
                "patient_cheack":req.body.monday_patient,
            },
            {
                "day":req.body.tuesday,
                "time":req.body.tuesday_time,
                "hospital":req.body.tuesday_hospital,
                "patient_cheack":req.body.tuesday_patient,
            },
            {
                "day":req.body.wednesday,
                "time":req.body.wednesday_time,
                "hospital":req.body.wednesday_hospital,
                "patient_cheack":req.body.wednesday_patient,
            },
            {
                "day":req.body.thursday,
                "time":req.body.thursday_time,
                "hospital":req.body.thursday_hospital,
                "patient_cheack":req.body.thursday_patient,
            },
            {
                "day":req.body.friday,
                "time":req.body.friday_time,
                "hospital":req.body.friday_hospital,
                "patient_cheack":req.body.friday_patient,
            },
            {
                "day":req.body.saturday,
                "time":req.body.saturday_time,
                "hospital":req.body.saturday_hospital,
                "patient_cheack":req.body.saturday_patient,
            },
        ];
        let user = new User({
            name: req.body.name,
            email: req.body.email,
            work_at: req.body.work_at,
            speacialist_on: req.body.speacialist_on,
            degree: req.body.degree,
            NID: req.body.NID,
            available: available,
            contact: req.body.contact,
            contact: req.body.contact,
            role:'doctor',
        })
        try{
            await user.save();
            return req.status(200).json({
                "status":200,
                "mgs":"successfully updated",
                "data":user
            })
        }
        catch(error){
            return res.status(500).json({
                "status":500,
                "mgs":"server error",
            })
        }
    }
    
}
module.exports.userRegistration = userRegistration;
module.exports.editUserProfile = editUserProfile;
module.exports.addDoctor = addDoctor;
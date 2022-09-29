const router = require('express').Router();
const adminTokenCheck = require('../middleware/admin-token-check');
const User = require('../models/User.model')
const CoreService = require("../models/Service.model");
const MedicalService = require("../models/Medical.model");
const Appointment = require('../models/Appointment.model');
const Feedback = require('../models/Feedback.model');

router.get('/login', async (req,res)=>{
    res.render('pages/login', {
        title: 'Login',
    });
})
router.get('/registration', async (req,res)=>{
    res.render('pages/registration', {
        title: 'Login',
    });
})
router.get('/home',adminTokenCheck, async (req,res)=>{
    const userData = {
        id:req.id,
        name:req.name,
        email:req.email
    }
    const inactiveDoctor = await User.find({role:'doctor',is_activeted:false});
    const totalDoctor = await User.find({role:'doctor',is_activeted:true});
    const appointment = await Appointment.find({chosen_date:new Date});
    res.render('pages/index', {
        title: 'Dashboard',
        userData,
        inactiveDoctor,
        totalDoctor,
        appointment,
    });
})
router.get('/add-doctor', adminTokenCheck, async (req,res)=>{
    const userData = {
        id:req.id,
        name:req.name,
        email:req.email
    }
    res.render('pages/add-doctor', {
        title: 'Add Doctor',
        userData,

    });
})
router.get('/doctor-list', adminTokenCheck, async (req,res)=>{
    const userData = {
        id:req.id,
        name:req.name,
        email:req.email
    }
    const doctor = await User.find({role:'doctor'});
    res.render('pages/doctor-list', {
        title: 'Doctor List',
        userData,
        doctor,
    });
})
router.get('/core-service', adminTokenCheck, async (req,res)=>{
    const userData = {
        id:req.id,
        name:req.name,
        email:req.email
    }
    const service = await CoreService.find();
    res.render('pages/core-service', {
        title: 'Core Service',
        userData,
        service
    });
})
router.get('/medical-service', adminTokenCheck, async (req,res)=>{
    const userData = {
        id:req.id,
        name:req.name,
        email:req.email
    }
    const service = await MedicalService.find();
    res.render('pages/medical-service', {
        title: 'Medical Service',
        userData,
        service,
    });
})
router.get('/create-appointment/:id', adminTokenCheck, async (req,res)=>{
    const userData = {
        id:req.id,
        name:req.name,
        email:req.email
    }
    res.render('pages/create-appointment', {
        title: 'Create Appointment',
        userData,
    });
})
router.get('/appointment-form/:id', adminTokenCheck, async (req,res)=>{
    const userData = {
        id:req.id,
        name:req.name,
        email:req.email
    }
    const doctor = await User.findOne({_id: req.params.id});
    const date  = req.query.date;
    res.render('pages/appointment-form', {
        title: 'Create Appointment',
        userData,
        doctor,
        date,
    });
})
router.get('/all-appointment', adminTokenCheck, async (req,res)=>{
    const userData = {
        id:req.id,
        name:req.name,
        email:req.email
    }
    let appointmentList;
    if(req.query.doctor && req.query.date){
        appointmentList = await Appointment.find({doctor_id:req.query.doctor,chosen_date:req.query.date}).sort({creation_date:-1});
    }
    else if(req.query.doctor && !req.query.date){
        appointmentList = await Appointment.find({doctor_id:req.query.doctor}).sort({creation_date:-1});
        // console.log(appointmentList);
    }
    else if(!req.query.doctor && req.query.date){
        appointmentList = await Appointment.find({chosen_date:req.query.date}).sort({creation_date:-1});
    }
    else{
        appointmentList = await Appointment.find();
    }
    let selectDoctors = await Appointment.find()
    let doctorList=[];
    for(let doctor of selectDoctors){
        let checkDoctor = doctorList.filter(doc=>doc.id==doctor.doctor_id);
        if(checkDoctor.length==0){
            let doctorInfo={
                id:doctor.doctor_id,
                name:doctor.doctor_name
            }
            doctorList.push(doctorInfo);
        }
    }
    res.render('pages/all-appointment', {
        title: 'All Appointment',
        userData,
        doctorList,
        appointmentList,
    });
})
router.get('/feedback-list', adminTokenCheck, async (req,res)=>{
    const userData = {
        id:req.id,
        name:req.name,
        email:req.email
    }
    const allFeedback = await Feedback.find();
    res.render('pages/feedback', {
        title: 'Feedback List',
        userData,
        allFeedback,
    });
})

module.exports=router;
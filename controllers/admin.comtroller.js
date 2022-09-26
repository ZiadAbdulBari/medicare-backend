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
    res.render('pages/index', {
        title: 'Home',
        userData
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
    const appointmentList = await Appointment.find();
    res.render('pages/all-appointment', {
        title: 'All Appointment',
        userData,
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
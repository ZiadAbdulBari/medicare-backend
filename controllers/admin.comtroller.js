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
    res.render('pages/index', {
        title: 'Home',
    });
})
router.get('/add-doctor', adminTokenCheck, async (req,res)=>{
    res.render('pages/add-doctor', {
        title: 'Add Doctor',
    });
})
router.get('/doctor-list', adminTokenCheck, async (req,res)=>{
    const doctor = await User.find({role:'doctor'});
    // console.log(doctor);
    res.render('pages/doctor-list', {
        title: 'Doctor List',
        doctor,
    });
})
router.get('/core-service', adminTokenCheck, async (req,res)=>{
    const service = await CoreService.find();
    res.render('pages/core-service', {
        title: 'Core Service',
        service
    });
})
router.get('/medical-service', adminTokenCheck, async (req,res)=>{
    const service = await MedicalService.find();
    res.render('pages/medical-service', {
        title: 'Medical Service',
        service,
    });
})
router.get('/create-appointment/:id', adminTokenCheck, async (req,res)=>{
    res.render('pages/create-appointment', {
        title: 'Create Appointment',
    });
})
router.get('/appointment-form/:id', adminTokenCheck, async (req,res)=>{
    const doctor = await User.findOne({_id: req.params.id});
    const date  = req.query.date;
    res.render('pages/appointment-form', {
        title: 'Create Appointment',
        doctor,
        date,
    });
})
router.get('/all-appointment', adminTokenCheck, async (req,res)=>{
    const appointmentList = await Appointment.find();
    res.render('pages/all-appointment', {
        title: 'All Appointment',
        appointmentList,
    });
})
router.get('/feedback-list', adminTokenCheck, async (req,res)=>{
    const allFeedback = await Feedback.find();
    res.render('pages/feedback', {
        title: 'Feedback List',
        allFeedback,
    });
})

module.exports=router;
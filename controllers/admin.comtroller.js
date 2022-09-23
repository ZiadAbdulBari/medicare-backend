const router = require('express').Router();
const User = require('../models/user.model')
const CoreService = require("../models/service.model");
const MedicalService = require("../models/medical.model");
const Appointment = require('../models/appointment.model');
const Feedback = require('../models/feedback.model');
router.get('/home', async (req,res)=>{
    res.render('pages/index', {
        title: 'Home',
    });
})
router.get('/add-doctor', async (req,res)=>{
    res.render('pages/add-doctor', {
        title: 'Add Doctor',
    });
})
router.get('/doctor-list', async (req,res)=>{
    const doctor = await User.find({role:'doctor'});
    // console.log(doctor);
    res.render('pages/doctor-list', {
        title: 'Doctor List',
        doctor,
    });
})
router.get('/core-service', async (req,res)=>{
    const service = await CoreService.find();
    res.render('pages/core-service', {
        title: 'Core Service',
        service
    });
})
router.get('/medical-service', async (req,res)=>{
    const service = await MedicalService.find();
    res.render('pages/medical-service', {
        title: 'Medical Service',
        service,
    });
})
router.get('/create-appointment/:id', async (req,res)=>{
    res.render('pages/create-appointment', {
        title: 'Create Appointment',
    });
})
router.get('/appointment-form/:id', async (req,res)=>{
    const doctor = await User.findOne({_id: req.params.id});
    const date  = req.query.date;
    res.render('pages/appointment-form', {
        title: 'Create Appointment',
        doctor,
        date,
    });
})
router.get('/all-appointment', async (req,res)=>{
    const appointmentList = await Appointment.find();
    res.render('pages/all-appointment', {
        title: 'All Appointment',
        appointmentList,
    });
})
router.get('/feedback-list', async (req,res)=>{
    const allFeedback = await Feedback.find();
    res.render('pages/feedback', {
        title: 'Feedback List',
        allFeedback,
    });
})

module.exports=router;
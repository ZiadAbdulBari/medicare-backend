const router = require('express').Router();

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
    res.render('pages/doctor-list', {
        title: 'Doctor List',
    });
})
router.get('/core-service', async (req,res)=>{
    res.render('pages/core-service', {
        title: 'Core Service',
    });
})
router.get('/medical-service', async (req,res)=>{
    res.render('pages/medical-service', {
        title: 'Medical Service',
    });
})
router.get('/create-appointment', async (req,res)=>{
    res.render('pages/create-appointment', {
        title: 'Create Appointment',
    });
})
router.get('/all-appointment', async (req,res)=>{
    res.render('pages/all-appointment', {
        title: 'All Appointment',
    });
})

module.exports=router;
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

module.exports=router;
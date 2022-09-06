const router = require('express').Router();

router.get('/home', async (req,res)=>{
    res.render('pages/index', {
        title: 'Home',
    });
})

module.exports=router;
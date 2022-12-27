const Adminauth = require('../models/Adminauth.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const adminRegistration = async (req,res) => {
    const checkEmail = await Adminauth.find({email:req.body.email});
    if(checkEmail.length>0){
        res.status(401);
        res.redirect('/admin/registration');
    }
    const hashPassword = await bcrypt.hash(req.body.password,10);
    try{
        const newAdmin = new Adminauth({
            name: req.body.name,
            email: req.body.email,
            password: hashPassword,
            role: "Guest",
        })
        await newAdmin.save();
        res.status(200);
        res.redirect('/admin/registration');
    }
    catch(error){
        res.status(500);
        res.redirect('/admin/registration');
    }

}

const adminLogin = async (req,res) =>{
    try{
        const checkEmail = await Adminauth.find({email:req.body.email});
        if(checkEmail.length==0){
            res.status(401)
            res.redirect('/admin/login');
        }
        const checkPassword = await bcrypt.compare(req.body.password, checkEmail[0].password);
        if(checkPassword){
            const token = await jwt.sign({ id: checkEmail[0]._id, email: checkEmail[0].email,name: checkEmail[0].name,role: checkEmail[0].role }, process.env.JWT_TOKEN);
            // console.log(token);
            res.cookie("access_token", token, { httpOnly: true })
            // res.status(200)
            // .json({
            //     "access_token": token,
            //     "mgs": "logged in",
            // })
            // console.log(token);
            res.redirect('/admin/home/');
        }
        else{
            res.status(401);
            res.redirect('/admin/login');
        }
    }
    catch(error){
        res.status(500);
    }
}

const adminLogout = async (req,res) =>{
    if(req){
        res.clearCookie('access_token');
        res.redirect('/admin/login');
        res.end();
    }
}
module.exports.adminRegistration = adminRegistration;
module.exports.adminLogin = adminLogin;
module.exports.adminLogout = adminLogout;
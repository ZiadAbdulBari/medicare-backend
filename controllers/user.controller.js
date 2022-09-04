const User = require("../models/user.model");
const { uuid } = require('uuidv4');
const bcrypt = require('bcrypt');

const userRegistration = async (req, res)=>{
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
        user.save();
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

module.exports.userRegistration = userRegistration;
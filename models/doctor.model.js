const mongoose = require('mongoose');

const doctorList = new mongoose.Schema({
    doctor_name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:false,
    },
    specialished_on:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
})

module.exports = new mongoose.model('Doctors',doctorList);
const mongoose = require('mongoose');

const doctorList = new mongoose.Schema({
    doctor_name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    specialished_on:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    number_of_doctor:{
        type:Number,
        required:true,
    },
})

module.exports = new mongoose.model('Doctors',doctorList);
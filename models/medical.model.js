const mongoose = require('mongoose');

const medicalService = new mongoose.Schema({
    video_link:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    subtitle:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
})

module.exports = new mongoose.model('MedicalService',medicalService);
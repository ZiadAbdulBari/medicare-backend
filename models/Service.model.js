const mongoose = require('mongoose');

const coreService = new mongoose.Schema({
    service_name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:false,
    },
    title:{
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

module.exports = new mongoose.model('CoreService',coreService);

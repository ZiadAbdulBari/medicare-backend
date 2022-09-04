const mongoose = require("mongoose");

const user = new mongoose.Schema({
    // patient:{
    //     type:Array,
    //     required:false,
    // },
    // doctoc:{
    //     type:Array,
    //     required:false
    // }
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    profile_img:{
        trype:String,
        required:false,
    },
    work_at: {
        type: String,
        required: false
    },
    speacialist_on:{
        type: Array,
        required: false
    },
    NID:{
        type: String,
        required: false
    },
    available:{
        type: Array,
        required: false
    },
    contact:{
        type: String,
        required: false
    },
    address:{
        type: String,
        required: false
    },
    age:{
        type: String,
        required: false
    },
    role:{
        type: String,
        required: true
    },
    joined_at:{
        type: Date,
        default: Date.now
    }
}) 

module.exports = new mongoose.model('User',user);
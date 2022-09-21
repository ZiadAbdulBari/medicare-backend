const { boolean } = require("joi");
const mongoose = require("mongoose");

const user = new mongoose.Schema({
    name:{
        type:String,
        required:false,
    },
    email:{
        type:String,
        required:false,
        unique:true,
    },
    password:{
        type:String,
        required:false
    },
    profile_img:{
        type:String,
        required:false,
    },
    work_at:{
        type: String,
        required: false
    },
    speacialist_on:{
        type: String,
        required: false
    },
    degree:{
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
    is_activeted:{
        type:Boolean,
        required:true,
    },
    joined_at:{
        type: Date,
        default: Date.now
    }
}) 

module.exports = new mongoose.model('User',user);
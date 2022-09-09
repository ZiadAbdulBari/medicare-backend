const mongoose = require("mongoose");

const feedback = new mongoose.Schema({
    user_name:{
        type:String,
        required:true
    },
    feedback:{
        type:String,
        required:true
    },
    is_accept:{
        type:Boolean,
        required:true,
    },
    is_showing:{
        type:Boolean,
        required:true,
    },
})

module.exports = new mongoose.model('Feedback',feedback);
const mongoose = require('mongoose');

const customerQuery = new mongoose.Schema({
    used_name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true,
    },
})

module.exports = new mongoose.model('Query',customerQuery);
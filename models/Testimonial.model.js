const mongoose = require('mongoose');

const testionial = new mongoose.Schema({
    used_name:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:false,
    },
    feedback:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true,
    },
    created_on:{
        type:Date,
    }
})

module.exports = new mongoose.model('Testionial',testionial);

const mongooes = require('mongoose');

const adminAuth = new mongooes.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    is_suber_admin:{
        type:Boolean,
        required:false,
        default:false
    },
    role:{
        type:String,
        required:false,
    }
})
module.exports = new mongooes.model('Adminauth',adminAuth);
const mongooes = require('mongoose');
const bannerContent = new mongooes.Schema({
    image:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:false
    }
})

module.exports = new mongooes.model('BannerContent', bannerContent);
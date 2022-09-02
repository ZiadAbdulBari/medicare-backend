const Joi = require('joi');

const medicalServiceValidation = (value)=>{
    const schema = Joi.object({
        video_link: Joi.string().required(),
        title: Joi.string().min(5).required(),
        subtitle: Joi.string().min(5).required(),
        description: Joi.string().min(20).required(),
    })
    return schema.validate(value);
}
const coreServiceValidation = (value)=>{
    const schema = Joi.object({
        service_name: Joi.string().min(5),
        title: Joi.string().min(5),
        description: Joi.string().min(10),
        number_of_doctor: Joi.number(),
    })
    return schema.validate(value);
}
module.exports = medicalServiceValidation;
module.exports = coreServiceValidation;
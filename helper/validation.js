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
    console.log(value);
    const schema = Joi.object({
        service_name: Joi.string().min(5),
        title: Joi.string().min(5),
        description: Joi.string().min(10),
        number_of_doctor: Joi.number(),
    })
    return schema.validate(value);
}
const doctorListValidation = (value)=>{
    const schema = Joi.object({
        doctor_name: Joi.string().min(3),
        specialished_on: Joi.string().min(5),
        description: Joi.string().min(10),
    })
    return schema.validate(value);
}
const createAppointmentValidation = (value)=>{
    const schema = Joi.object({
        user_name: Joi.string().min(3),
        doctor_name: Joi.string().min(5),
        doctor_id: Joi.string().required(),
        specialished_on:Joi.string().required(),
        patient_name: Joi.string().min(3),
        patient_id: Joi.string().required(),
        contact: Joi.string().min(11),
        age: Joi.number(),
        disease:Joi.string().min(3),
        chosen_date:Joi.string().required(),
    })
    return schema.validate(value);
}
const feedbackValidation = (value)=>{
    const schema = Joi.object({
        user_name: Joi.string().min(3),
        feedback: Joi.string().min(10),
    })
    return schema.validate(value);
}
module.exports.medicalServiceValidation = medicalServiceValidation;
module.exports.coreServiceValidation = coreServiceValidation;
module.exports.doctorListValidation = doctorListValidation;
module.exports.createAppointmentValidation = createAppointmentValidation;
module.exports.feedbackValidation = feedbackValidation;
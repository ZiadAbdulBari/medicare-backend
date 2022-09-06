const Appointment = require("../models/appointment.model");
const User = require("../models/user.model");
const {createAppointmentValidation} = require('../helper/validation');

const checkAvailability = async (req,res)=>{
    if(req.method!='post'){
        return res.status(405).json({
            "status":405,
            "mgs":"method not allowed"
        })
    }
    try{
        const weekDays = ['sunday','monday','tuesday','wednesday','thursday','friday'];
        const date = new Date(req.body.date);
        const dayNo = date.getDay();
        const day = weekDays[dayNo];
        const doctor = await User.findOne({_id:req.params.id});
        if(doctor.available[dayNo].day==day){
            const patient = parseInt(doctor.available[dayNo].patient_cheack);
            const totalNumberOfPatient = await Appointment.find({doctor_id:req.params.id, chosen_date:req.body.date});
            if(patient==totalNumberOfPatient.length){
                return res.status(200).json({
                    "status":200,
                    "mgs":"Sit is not empty",
                })
            }
            else{
                return res.status(200).json({
                    "status":200,
                    "mgs":"doctor is available",
                    "data":req.body.date
                })

            }
        }
        else{
            return res.status(404).json({
                "status":404,
                "mgs":"doctor is not available",
            })
        }

    }
    catch(erroe){
        return res.status(500).json({
            "status":500,
            "mgs":"server error"
        })
    }

    
    console.log(doctor);
}

const createdAppointment = async(req, res)=>{
    const {error} = createAppointmentValidation(req.body);
    if(error){
        return res.status(400).json({
            'mgs':'invailid data',
        })
    }
    const appointment = new Appointment({
        user_name: req.body.user_name,
        doctor_name: req.body.doctor_name,
        doctor_id: req.params.id,
        patient_name: req.body.patient_name,
        contact: req.body.contact,
        age: req.body.age,
        disease: req.body.disease,
        chosen_date: req.body.chosen_date,
    })
    try{
        appointment.save();
        return res.status(200).json({
            "status": 200,
            "mgs":"created",
            "data":appointment
        })
    }
    catch(erroe){
        return res.status(500).json({
            "status": 500,
            "mgs":error,
        })
    }
}

const getAppointmentList = async(req,res)=>{
    if(req.method=='get'){
        const list = await Appointment.find({doctor_id: req.params.id});
        console.log(list)
        return res.status(200).json({
            "data":list,
        })
    }
    else{
        return res.status(405).json({
            "status":405,
            "mgs":"method not allowed"
        })
    }
}
module.exports.checkAvailability = checkAvailability;
module.exports.createdAppointment = createdAppointment;
module.exports.getAppointmentList = getAppointmentList;
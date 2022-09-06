const Appointment = require("../models/appointment.model");
const User = require("../models/user.model");

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
            return res.status(200).json({
                "status":200,
                "mgs":"doctor is available",
                "data":req.body.date
            })
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

module.exports.checkAvailability = checkAvailability;
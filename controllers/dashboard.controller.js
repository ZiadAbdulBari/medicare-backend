const Appointment = require('../models/Appointment.model');

const departmentWiseData = async (req,res)=>{
    // let param = req.params;
    let numberOfPatient = []
    for(let i=0; i<12; i++){
        const results = await Appointment.find({
            creation_date: {
                $gte: new Date(2022, i, 1), 
                $lt: new Date(2022, i, 31)
            },
            specialished_on: req.params.department
        });
        numberOfPatient.push(results.length);
    }
    
    res.status(200).json({
        numberOfPatient
    })
}
module.exports.departmentWiseData = departmentWiseData
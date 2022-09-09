const Feedback = require("../models/feedback.model");
const {feedbackValidation} = require("../helper/validation");
const sendFeedback = async (req,res)=>{
    const {error} = feedbackValidation(req.body);
    if(error){
        res.status(400).json({
            "status":400,
            "mgs":"Validation error",
        })
    }
    const feedback = new Feedback({
        user_name: req.body.user_name,
        feedback: req.body.feedback,
        is_accept:'false',
        is_showing:'false'
    })
    try{
        await feedback.save();
        res.status(200).json({
            "status":200,
            "mgs":"feedback sent"
        })
    }
    catch(error){
        res.status(500).sjon({
            "status":500,
            "mgs":"serdver error"
        })
    }
}

module.exports.sendFeedback = sendFeedback
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
const activateFeedback = async(req,res)=>{
    const feedback = await Feedback.findOne({_id:req.params.id});
    feedback.is_accept = req.body.is_accept;
    feedback.is_showing = req.body.is_showing;
    try{
        await feedback.save();
        return res.status(200).json({
            "status":200,
            "mgs":"accepted"
        })
    }
    catch(error){
        return res.status(500).json({
            "ststus":500,
            "mgs":"server error"
        })
    }
}
module.exports.sendFeedback = sendFeedback
module.exports.activateFeedback = activateFeedback
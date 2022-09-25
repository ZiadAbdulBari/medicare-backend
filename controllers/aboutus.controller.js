const Feedback = require("../models/Feedback.model");
const {feedbackValidation} = require("../helper/validation");

const getFeedback = async (req,res)=>{
    try{
        const feedback = await Feedback.find({is_showing:true});
        return res.status(200).json({
            feedback
        })
    }
    catch(error){
        res.status(500).json({
            "mgs":"server error",
        })
    }
};
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
    if(req.body.is_accept=='accept'){
        if(feedback.is_accept==true){
            console.log(feedback.is_accept);
            feedback.is_accept=false;
        }
        else{
            feedback.is_accept=true;
        }
    }
    if(req.body.is_showing=='active'){
        if(feedback.is_showing==true){
            feedback.is_showing=false;
        }
        else{
            feedback.is_showing=true;
        }
    }
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
module.exports.getFeedback = getFeedback
module.exports.sendFeedback = sendFeedback
module.exports.activateFeedback = activateFeedback
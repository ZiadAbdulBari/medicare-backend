const express = require('express');
const { sendFeedback, activateFeedback } = require('../controllers/aboutus.controller');
const router = express.Router();

router.post('/feedback',sendFeedback);
router.post('/feedback-status/:id',activateFeedback);

module.exports = router;
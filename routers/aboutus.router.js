const express = require('express');
const { sendFeedback } = require('../controllers/aboutus.controller');
const router = express.Router();

router.post('/feedback',sendFeedback);

module.exports = router;
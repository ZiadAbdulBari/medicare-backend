const express = require('express');
const router = express.Router();
const {checkAvailability} = require('../controllers/appointment.controller');

router.post('/date-check/:id',checkAvailability);

module.exports = router;
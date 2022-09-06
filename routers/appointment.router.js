const express = require('express');
const router = express.Router();
const {checkAvailability, createdAppointment} = require('../controllers/appointment.controller');

router.post('/schedule-check/:id',checkAvailability);
router.post('/appointment/:id',createdAppointment);

module.exports = router;
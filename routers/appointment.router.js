const express = require('express');
const router = express.Router();
const {checkAvailability, createdAppointment, getAppointmentList} = require('../controllers/appointment.controller');

router.post('/schedule-check/:id',checkAvailability);
router.post('/appointment',createdAppointment);
router.post('/get-appointment/:id',getAppointmentList);

module.exports = router;
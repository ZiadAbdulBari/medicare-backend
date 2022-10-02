const express = require('express');
const router = express.Router();
const {checkAvailability, createdAppointment, getAppointmentList, patientHistory, changeAppointmentStatus, patientCall, liveUpdate} = require('../controllers/appointment.controller');
const tokenCheck = require("../middleware/token-checker");

router.post('/schedule-check/:id',checkAvailability);
router.post('/appointment',createdAppointment);
router.get('/get-appointment/:id',getAppointmentList);
router.get('/patient-history/:id',patientHistory);
router.post('/edit-status/:id',tokenCheck,changeAppointmentStatus);
router.post('/change-status/:doctorId',tokenCheck, patientCall);
router.get('/liveupdate/:id',tokenCheck, liveUpdate);

module.exports = router;
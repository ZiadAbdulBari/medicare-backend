const express = require('express');
const router = express.Router();
const { creatAppointmentByAdmin } = require('../../controllers/appointment.controller');
const adminTokenCheck = require('../../middleware/admin-token-check');

router.post('/make-appointment',adminTokenCheck, creatAppointmentByAdmin);

module.exports = router;
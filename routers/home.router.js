const express = require('express');
const router = express.Router();
const editMedicalService = require('../controllers/medical.controller');

router.post('/medical/:id', editMedicalService);

module.exports = router;
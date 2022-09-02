const express = require('express');
const router = express.Router();
const editMedicalService = require('../controllers/medical.controller');
const {createCoreService,updateCoreService , deleteCoreService} = require('../controllers/service.controller');

router.post('/medical/:id', editMedicalService);
router.post('/add/core-service', createCoreService);
router.post('/update/core-service/:id', updateCoreService);
router.delete('/delete/core-service/:id', deleteCoreService);

module.exports = router;
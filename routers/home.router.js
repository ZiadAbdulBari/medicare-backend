const express = require('express');
const router = express.Router();
const editMedicalService = require('../controllers/medical.controller');
const {createCoreService,updateCoreService , deleteCoreService} = require('../controllers/service.controller');
const {createDoctor,updateDoctor , deleteDoctor} = require('../controllers/doctor.controller');

router.post('/medical/:id', editMedicalService);
//core service route
router.post('/add/core-service', createCoreService);
router.post('/update/core-service/:id', updateCoreService);
router.delete('/delete/core-service/:id', deleteCoreService);
//doctor route
router.post('/add/doctor', createDoctor);
router.post('/update/doctor/:id', updateDoctor);
router.delete('/delete/doctor/:id', deleteDoctor);

module.exports = router;
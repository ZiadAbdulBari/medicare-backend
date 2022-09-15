const express = require('express');
const router = express.Router();
const editMedicalService = require('../controllers/medical.controller');
const {getAllCoreService, createCoreService,updateCoreService , deleteCoreService} = require('../controllers/service.controller');
const {getAllDoctor,createDoctor,updateDoctor , deleteDoctor} = require('../controllers/doctor.controller');

router.post('/medical/:id', editMedicalService);
//core service route
router.get('/all-core-service',getAllCoreService);
router.post('/add/core-service', createCoreService);
router.post('/update/core-service/:id', updateCoreService);
router.delete('/delete/core-service/:id', deleteCoreService);
//doctor route
router.get('/all-doctor/:role',getAllDoctor);
router.post('/add/doctor', createDoctor);
router.post('/update/doctor/:id', updateDoctor);
router.delete('/delete/doctor/:id', deleteDoctor);

module.exports = router;
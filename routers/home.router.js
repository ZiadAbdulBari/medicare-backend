const express = require('express');
const router = express.Router();
const {upload} = require('../middleware/image-handle');
const adminTokenCheck = require('../middleware/admin-token-check');
const permission = require('../middleware/permission');
const {editMedicalService, getMedicalService} = require('../controllers/medical.controller');
const {getAllCoreService, createCoreService,updateCoreService , deleteCoreService} = require('../controllers/service.controller');
const {getAllDoctor,createDoctor,updateDoctor , deleteDoctor} = require('../controllers/doctor.controller');


router.get('/medical-service/', getMedicalService);
router.post('/medical/:id', adminTokenCheck, editMedicalService);
//core service route
router.get('/all-core-service', getAllCoreService);
router.post('/add/core-service',adminTokenCheck, upload.single('core_service_img'), createCoreService);
router.post('/update/core-service/:id', adminTokenCheck, updateCoreService);
router.delete('/delete/core-service/:id', adminTokenCheck, deleteCoreService);
//doctor route
router.get('/all-doctor/:role', getAllDoctor);
// router.post('/add/doctor', createDoctor);
// router.post('/update/doctor/:id', updateDoctor);
// router.delete('/delete/doctor/:id', deleteDoctor);


module.exports = router;
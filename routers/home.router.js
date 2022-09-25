const express = require('express');
const router = express.Router();
const {upload} = require('../middleware/image-handle');
const adminTokenCheck = require('../middleware/admin-token-check');
const {editMedicalService, getMedicalService} = require('../controllers/medical.controller');
const {getAllCoreService, createCoreService,updateCoreService , deleteCoreService} = require('../controllers/service.controller');
const {getAllDoctor,createDoctor,updateDoctor , deleteDoctor} = require('../controllers/doctor.controller');
const { adminRegistration, adminLogin, adminLogout } = require('../controllers/adminauth.controller');


router.get('/medical-service/', getMedicalService);
router.post('/medical/:id', editMedicalService);
//core service route
router.get('/all-core-service',adminTokenCheck, getAllCoreService);
router.post('/add/core-service',upload.single('core_service_img'), createCoreService);
router.post('/update/core-service/:id', updateCoreService);
router.delete('/delete/core-service/:id', deleteCoreService);
//doctor route
router.get('/all-doctor/:role',adminTokenCheck, getAllDoctor);
router.post('/add/doctor',adminTokenCheck, createDoctor);
router.post('/update/doctor/:id', updateDoctor);
router.delete('/delete/doctor/:id', deleteDoctor);

router.post('/admin-reg', adminRegistration);
router.post('/admin-login', adminLogin);
router.get('/admin-logout', adminTokenCheck, adminLogout);

module.exports = router;
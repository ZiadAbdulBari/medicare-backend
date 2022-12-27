const express = require('express');
const router = express.Router();
const adminTokenCheck = require('../middleware/admin-token-check');
const permission = require('../middleware/permission');
const {createDoctor,getSchdeul} = require('../controllers/doctor.controller');

router.post('/add-doctor',adminTokenCheck, permission, createDoctor);
router.get('/doctor-time/:id',adminTokenCheck, permission, getSchdeul);

module.exports = router;

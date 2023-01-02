const express = require('express');
const { departmentWiseData } = require('../../controllers/dashboard.controller');
const adminTokenCheck = require('../../middleware/admin-token-check');
const router = express.Router();

router.get('/patient-stattistic/:department',adminTokenCheck,departmentWiseData);

module.exports=router;

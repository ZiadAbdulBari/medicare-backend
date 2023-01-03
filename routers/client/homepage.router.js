const express = require('express');
const { getBannerApi, getCoreServiceApi, getMedicalServiceApi, getDoctorApi } = require('../../controllers/homePage.controller');
const router = express.Router();

router.get('/banner', getBannerApi);
router.get('/core-service', getCoreServiceApi);
router.get('/medical-service', getMedicalServiceApi);
router.get('/doctor', getDoctorApi);

module.exports = router;
const express = require('express');
const { addMedicalService, addService } = require('../../controllers/clienthome.comtroller');
const {upload} = require('../../middleware/image-handle');
const router = express.Router();

router.post('/add/core-service', upload.single('core_service_img'), addService);
router.post('/medical/:id', addMedicalService);

module.exports = router;
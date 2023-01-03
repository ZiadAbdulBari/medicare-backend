const express = require('express');
const { addMedicalService, addService, editCoreService, addBanner, deleteCoreService } = require('../../controllers/clienthome.comtroller');
const {upload} = require('../../middleware/image-handle');
const router = express.Router();

router.post('/add/banner',upload.single('add_banner_img'),addBanner);
router.post('/add/core-service', upload.single('core_service_img'), addService);
router.post('/edit/core-service', upload.single('edit_core_service_img'), editCoreService);
router.post('/delete/core-service', deleteCoreService);
router.post('/medical', addMedicalService);

module.exports = router;
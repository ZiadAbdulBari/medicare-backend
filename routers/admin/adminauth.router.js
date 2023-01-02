const express = require('express');
const router = express.Router();
const { adminRegistration, adminLogin, adminLogout } = require('../../controllers/adminauth.controller');
const adminTokenCheck = require('../../middleware/admin-token-check');

router.post('/registration', adminRegistration);
router.post('/login', adminLogin);
router.get('/logout', adminTokenCheck, adminLogout);

module.exports = router;
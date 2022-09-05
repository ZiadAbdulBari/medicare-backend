const express = require('express');
const router = express.Router();
const {userRegistration, editUserProfile} = require('../controllers/user.controller');

router.post("/registration/:user", userRegistration);
router.post("/profile/:id", editUserProfile);

module.exports = router;
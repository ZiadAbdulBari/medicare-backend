const express = require('express');
const router = express.Router();
const {userRegistration, editUserProfile, addDoctor} = require('../controllers/user.controller');

router.post("/registration/:user", userRegistration);
router.post("/add-doctor/:user", addDoctor);
router.post("/profile/:id", editUserProfile);

module.exports = router;
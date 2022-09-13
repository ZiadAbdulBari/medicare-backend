const express = require('express');
const router = express.Router();
const tokenCheck = require("../middleware/token-checker");
const {userRegistration, editUserProfile, addDoctor, userLogin, userProfileData} = require('../controllers/user.controller');

router.post("/registration/:user", userRegistration);
router.post("/add-doctor/:user", addDoctor);
router.post("/edit-profile/:id", tokenCheck, editUserProfile);
router.get("/profile", tokenCheck, userProfileData);
router.post("/login/", userLogin);

module.exports = router;
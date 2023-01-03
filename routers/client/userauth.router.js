const express = require('express');
const router = express.Router();
const tokenCheck = require("../../middleware/token-checker");
const {userRegistration, editUserProfile, addDoctor, userLogin, userProfileData, changeDoctorStatus} = require('../../controllers/userauth.controller');
const {upload} = require('../../middleware/image-handle');

router.post("/registration", userRegistration);
router.post("/login/", userLogin);
// router.post("/add-doctor/:user", addDoctor);
router.post("/edit-profile/:id", tokenCheck, upload.single('profile_img'), editUserProfile);
router.post("/edit-status/:id", changeDoctorStatus);
router.get("/profile", tokenCheck, userProfileData);

module.exports = router;
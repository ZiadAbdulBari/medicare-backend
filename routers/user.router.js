const express = require('express');
const router = express.Router();
const {userRegistration} = require('../controllers/user.controller');

router.post("/registration/:user",userRegistration);

module.exports = router;
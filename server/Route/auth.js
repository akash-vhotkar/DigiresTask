const express = require('express');
const router = express.Router();
const AuthController = require('../Controller/Auth');

router.post('/login',AuthController.login);
router.post('/register',AuthController.regisester);
module.exports = router;
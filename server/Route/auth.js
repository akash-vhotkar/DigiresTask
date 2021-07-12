const express = require('express');
const router = express.Router();
const AuthController = require('../Controller/Auth');

router.get('/login',AuthController.login);
router.get('/register',AuthController.regisester);
module.exports = router;
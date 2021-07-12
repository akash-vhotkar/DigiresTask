const express = require('express');
const router = express.Router();
const DashboardController =  require('../Controller/Dashboard');

router.get('/createrecord',DashboardController.Createmedicalrecord )
module.exports = router;
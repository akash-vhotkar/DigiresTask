const express = require('express');
const router = express.Router();
const DashboardController =  require('../Controller/Dashboard');
router.post('/createrecord',DashboardController.Createmedicalrecord )
router.get("/getrecords", DashboardController.getmedicalrecords);

module.exports = router;
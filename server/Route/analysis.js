const express = require('express');
const router = express.Router();
const analysiscontroller =  require('../Controller/Analytics')
router.get('/analysisrecord', analysiscontroller.CreateanalysisRecord );


module.exports = router;
const express = require('express');
const router = express.Router();
const analysiscontroller =  require('../Controller/Analytics')
router.post('/analysisrecord', analysiscontroller.CreateanalysisRecord );


module.exports = router;
var express = require('express');
var router = express.Router();
var aboutCtrl = require('../controller/about')


router.get('/about', aboutCtrl.about);

module.exports = router;

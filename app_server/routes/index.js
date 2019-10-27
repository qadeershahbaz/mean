var express = require('express');
var router = express.Router();
var mainCtrl = require('../controller/main')

/* GET home page. */
router.get('/', mainCtrl.index);

module.exports = router;

var express = require('express');
var router = express.Router();
var locationsCtrl = require('../controller/locations')



router.get('/', locationsCtrl.home)

router.get('/location', locationsCtrl.locationDetail)

router.get('/location/review/new', locationsCtrl.locationReviewForm)

module.exports = router
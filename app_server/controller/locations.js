const home = function (req, res, next) {
    res.render('location-list', { title: 'Homes' })
}


const locationDetail = function (req, res, next) {
    res.render('index', { title: 'Location detail' })
}

const locationReviewForm = function (req, res, next) {
    res.render('index', { title: 'Location Review Form' })
}

module.exports = {
    home,
    locationDetail,
    locationReviewForm
}
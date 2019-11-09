const home = function (req, res, next) {
    res.render('location-list', { title: 'Homes' })
}


const locationDetail = function (req, res, next) {
    res.render('location-detail', { title: 'Location details' })
}

const locationReviewForm = function (req, res, next) {
    res.render('location-review-form', { title: 'Review StarCups' })
}

module.exports = {
    home,
    locationDetail,
    locationReviewForm
}
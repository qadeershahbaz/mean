const about = function (req, res, next) {
    res.render('about', { title: 'About' })
}

module.exports= {
    about
}

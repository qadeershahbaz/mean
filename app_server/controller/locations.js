const home = function (req, res, next) {
    res.render('location-list',
        {
            title: 'Home',
            app_quote: "Find places to work with wifi near you",
            app_description: `Looking for a wifi and a seat? Loc8r helps you find places to work when out and about.
            Perhaps with a coffee or a cake ? Let locator help you find the place you're looking for.`,
            max_rating: 5,
            available_locations: [
                {
                    loc_id: 1,
                    loc_name: "StarCups",
                    loc_rating: 4,
                    loc_distance: "100m",
                    loc_address: "125 High Street ,Reading, RG6 IPS",
                    loc_facilities: ["Hot Drinks", "Food", "Premimum Wifi"]
                },
                {
                    loc_id: 2,
                    loc_name: "Shah Ghouse",
                    loc_rating: 3,
                    loc_distance: "200m",
                    loc_address: "Tolichowki,Mehdipatnam Hyderabad",
                    loc_facilities: ["Hot Drinks", "Food", "Free Wifi"]
                },
                {
                    loc_id: 3,
                    loc_name: "Pista House",
                    loc_rating: 3,
                    loc_distance: "300m",
                    loc_address: "Yousuf Tekri , Tolchowki",
                    loc_facilities: ["Hot Drinks", "Food", "Free Wifi"]
                },


            ]


        }
    )
}


const locationDetail = function (req, res, next) {
    res.render('location-detail',
        {
            title: 'detailed Review',
            info: {
                id: 1,
                name: "StarCups",
                max_rating: 5,
                loc_rating: 3,
                address: "125 High Street ,Reading, RG6 IPS",
                openingHours: ["Monday-Friday :7:00am -7:00pm ", " Saturday :8:00am -5:00pm ", "Sunday :Closed "],
                facilities: ["Hot Drinks", "Food", "Premium Wifi"],
                loc_url: "/images/staticmap.png",
                cutomer_reviews: [
                    {
                        customer_id: 1,
                        customer_rating: 4,
                        customer_name: "Simon Holmes",
                        date: "16 July 2013",
                        customer_review: `What a great place. I can't say enough good place about
                        it.`

                    },
                    {
                        customer_id: 2,
                        customer_rating: 3,
                        customer_name: "M.A.Qadeer",
                        date: "17 July 2019",
                        customer_review: `Great ambience`

                    }
                ],
                loc_overview: ` Simon's cafe is on Loc8r because it has accesible wifi and a space to sitdown with ypur laptop
                and get some work done.`
            }


        }
    )
}

const locationReviewForm = function (req, res, next) {
    res.render('location-review-form', { title: 'Review StarCups' })
}

module.exports = {
    home,
    locationDetail,
    locationReviewForm
}
const about = function (req, res, next) {
    res.render('about',
        {
            title: 'Abouts',
            content: {
                paragraph1: " Loc8r was created to help people find places to sit down and get a piece of work done",
                paragraph2: `As the world's largest corporate university, the Loc8r global education centre in the
                337 acre[42] campus has 400 instructors and 200+ classrooms,[43] with international benchmarks at its
                core. Established in 2002, it had trained around 1,25,000 engineering graduates by June 2015.[43] It can
                train 14,000 employees at a given point of time on various technologies.[44][45]

                The Loc8r Leadership Institute (ILI), based in Mysuru, has 96 rooms and trains about 400 Loc8r customers
                annually.[45] Its purpose is to prepare and develop the senior leaders in Loc8r for current and future
                executive leadership roles.`,
                conclusion: ` The Loc8r Training Centre in Mysuru also provides a number of extracurricular
                facilities like tennis, badminton, basketball, swimming pool and gym.`
            }

        }
    )
}

module.exports = {
    about
}

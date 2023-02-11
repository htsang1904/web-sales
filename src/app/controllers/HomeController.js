class HomeController {

    //[GET] /home
    index(req, res) {
        res.render('home');
    }

    //[GET] /home/:slug
    show(req, res) {
        res.render('detail');
    }
}

module.exports = new HomeController;
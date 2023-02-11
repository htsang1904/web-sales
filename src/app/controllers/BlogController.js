class BlogController {

    //[GET] /shop
    index(req, res) {
        res.render('blog');
    }

    //[GET] /shop/:slug
    show(req, res) {
        res.send("blog detail");
    }
}

module.exports = new BlogController;
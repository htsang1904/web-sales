const Product = require('../models/Product');
const {multipleMongooseToObject} = require('../../util/mongoose')

class SiteController {
    //[GET] /shop

    shop(req, res, next) {
        Product.find({})
            .then(products => {
                res.render('shop', { 
                    products: multipleMongooseToObject(products) 
                });
            })
            .catch(next);
        // res.render('shop');
    }

    //[GET] /about
    about(req, res) {
        res.render('about');
    }

    //[GET] /contact
    contact(req, res) {
        res.render('contact');
    }

      //[GET] /
    index (req, res) {
        res.render('home');
    }
}

module.exports = new SiteController;
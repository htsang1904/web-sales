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

    //[GET] /cart
    cart(req, res) {
        res.render('cart');
    }

    //[GET] /product-detail
    product(req, res) {
        res.render('product-detail');
    }
    
    //[GET] /home
    home(req, res, next) {
        Product.find({})
            .then(products => {
                res.render('home', { 
                    products: multipleMongooseToObject(products) 
                });
            })
            .catch(next);
    }
    //[GET] /
    index(req, res, next) {
        Product.find({})
            .then(products => {
                res.render('home', { 
                    products: multipleMongooseToObject(products) 
                });
            })
            .catch(next);
    }
}

module.exports = new SiteController;
const Product = require('../models/Product');
const {multipleMongooseToObject} = require('../../util/mongoose')

class Shop2Controller {

    //[GET] /shop
    index(req, res, next) {
        Product.find({})
            .then(products => {
                res.render('shop2', { 
                    products: multipleMongooseToObject(products) 
                });
            })
            .catch(next);
        // res.render('shop');
    }
    //[GET] /shop/:slug
    show(req, res) {
        res.render('detail');
    }
}

module.exports = new Shop2Controller;
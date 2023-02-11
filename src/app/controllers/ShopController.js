const Product = require('../models/Product');
const {mongooseToObject} = require('../../util/mongoose')

class ShopController {

    //[GET] /shop/:slug
    show(req, res, next) {
        Product.findOne({ slug: req.params.slug })
            .then( product =>{
                res.render('product/detail', { product: mongooseToObject(product)})
            })
            .catch(next)
    }
}

module.exports = new ShopController;
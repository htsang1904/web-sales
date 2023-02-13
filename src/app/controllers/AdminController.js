const Product = require('../models/Product');
const {multipleMongooseToObject} = require('../../util/mongoose')

class AdminController {
    //[GET] /admin/stored

    storedProduct(req, res, next) {
        Product.find({})
            .then(products => res.render('admin/stored', {
                products: multipleMongooseToObject(products)
            }))
            .catch(next);
    }
}

module.exports = new AdminController();
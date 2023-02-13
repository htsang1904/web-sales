const Product = require('../models/Product');
const {mongooseToObject} = require('../../util/mongoose');
const { create } = require('../models/Product');

class ShopController {

    //[GET] /shop/:slug
    show(req, res, next) {
        Product.findOne({ slug: req.params.slug })
            .then( product =>{
                res.render('product/detail', { product: mongooseToObject(product)})
            })
            .catch(next)
    }

    //[GET] /shop/:id/create
    edit(req, res, next) {
        Product.findById(req.params._id)
        .then(product =>{ res.render('product/edit'),{
            product: mongooseToObject(product)} 
        })
        .catch(next);
    }

      //[GET] /shop/edit
      create(req, res, next) {
        res.render('product/create');
    }


    //[POST] /shop/store
    store(req, res, next) {
        //  res.json(req.body);
        const productData = req.body;
        const product = new Product(productData);
        product.save()
            .then(() => res.redirect(`/shop`))
            .catch(error => {

            })
    }
    
}

    

module.exports = new ShopController();
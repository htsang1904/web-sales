const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.get('/home', siteController.home);
router.get('/product-detail', siteController.product);
router.get('/cart', siteController.cart);
router.get('/shop', siteController.shop);
router.get('/about', siteController.about);
router.get('/contact', siteController.contact);
router.get('/', siteController.index);

module.exports = router;
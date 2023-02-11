const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.get('/shop', siteController.shop);
router.get('/about', siteController.about);
router.get('/contact', siteController.contact);
router.get('/', siteController.index);

module.exports = router;
const express = require('express');
const router = express.Router();

const shopController = require('../app/controllers/ShopController');

router.get('/create', shopController.create);
router.post('/store', shopController.store);
router.get('/:id/edit', shopController.edit);
router.get('/:slug', shopController.show);


module.exports = router;
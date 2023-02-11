const express = require('express');
const router = express.Router();

const shop2Controller = require('../app/controllers/Shop2Controller');

router.get('/:slug', shop2Controller.show);
router.get('/', shop2Controller.index);

module.exports = router;
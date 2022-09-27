const express = require('express');
const router = express.Router();
const {homepage} = require('../controller/home');

router.route('/').get(homepage);

module.exports = router;
const express = require('express');
const healthCheck = require('../controllers/Healthcontroller.js');

const router = express.Router();

router.get('/', healthCheck);

module.exports = router;

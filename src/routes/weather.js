const express = require('express');
const router = express.Router();

const weatherController = require('../app/controller/weatherController');

router.get('/',weatherController.index);

module.exports= router;
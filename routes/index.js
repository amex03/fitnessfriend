const express = require('express');
const router = express.Router();
const HomepageController = require('../controllers/homepageController');
// get request to fetch homepafe data
router.get('/', HomepageController.getHomepage);

module.exports = router;
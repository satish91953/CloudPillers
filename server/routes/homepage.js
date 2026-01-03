const express = require('express');
const { getContent, updateContent } = require('../controllers/homepageController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router.route('/').get(getContent).put(protect, authorize('admin'), updateContent);

module.exports = router;


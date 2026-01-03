const express = require('express');
const {
  getFAQs,
  getFAQsAdmin,
  getFAQ,
  createFAQ,
  updateFAQ,
  deleteFAQ,
} = require('../controllers/faqController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router.route('/').get(getFAQs).post(protect, authorize('admin'), createFAQ);
router.route('/admin').get(protect, authorize('admin'), getFAQsAdmin);
router.route('/:id').get(getFAQ).put(protect, authorize('admin'), updateFAQ).delete(protect, authorize('admin'), deleteFAQ);

module.exports = router;


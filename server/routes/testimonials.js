const express = require('express');
const {
  getTestimonials,
  getTestimonialsAdmin,
  getTestimonial,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
} = require('../controllers/testimonialController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router.route('/').get(getTestimonials).post(protect, authorize('admin'), createTestimonial);
router.route('/admin').get(protect, authorize('admin'), getTestimonialsAdmin);
router
  .route('/:id')
  .get(getTestimonial)
  .put(protect, authorize('admin'), updateTestimonial)
  .delete(protect, authorize('admin'), deleteTestimonial);

module.exports = router;


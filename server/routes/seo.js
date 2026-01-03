const express = require('express');
const {
  getSEOSettings,
  getAllSEOSettings,
  updateSEOSettings,
  deleteSEOSettings,
} = require('../controllers/seoController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router.route('/').get(protect, authorize('admin'), getAllSEOSettings);
router
  .route('/:page')
  .get(getSEOSettings)
  .put(protect, authorize('admin'), updateSEOSettings)
  .delete(protect, authorize('admin'), deleteSEOSettings);

module.exports = router;


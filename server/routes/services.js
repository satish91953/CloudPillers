const express = require('express');
const {
  getServiceContents,
  getServiceContent,
  createServiceContent,
  updateServiceContent,
  deleteServiceContent,
} = require('../controllers/serviceContentController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router
  .route('/content')
  .get(getServiceContents)
  .post(protect, authorize('admin'), createServiceContent);

router
  .route('/content/:serviceId')
  .get(getServiceContent)
  .put(protect, authorize('admin'), updateServiceContent)
  .delete(protect, authorize('admin'), deleteServiceContent);

module.exports = router;


const express = require('express');
const {
  getPricingPlans,
  getPricingPlansAdmin,
  getPricingPlan,
  createPricingPlan,
  updatePricingPlan,
  deletePricingPlan,
} = require('../controllers/pricingController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router.route('/').get(getPricingPlans).post(protect, authorize('admin'), createPricingPlan);
router.route('/admin').get(protect, authorize('admin'), getPricingPlansAdmin);
router
  .route('/:id')
  .get(getPricingPlan)
  .put(protect, authorize('admin'), updatePricingPlan)
  .delete(protect, authorize('admin'), deletePricingPlan);

module.exports = router;


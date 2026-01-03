const PricingPlan = require('../models/PricingPlan');

// @desc    Get all pricing plans
// @route   GET /api/v1/pricing
// @access  Public
exports.getPricingPlans = async (req, res, next) => {
  try {
    const query = { enabled: true };
    const plans = await PricingPlan.find(query).sort({ order: 1, createdAt: -1 });

    res.status(200).json({
      success: true,
      count: plans.length,
      data: plans,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all pricing plans (Admin)
// @route   GET /api/v1/pricing/admin
// @access  Private/Admin
exports.getPricingPlansAdmin = async (req, res, next) => {
  try {
    const plans = await PricingPlan.find().sort({ order: 1, createdAt: -1 });

    res.status(200).json({
      success: true,
      count: plans.length,
      data: plans,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single pricing plan
// @route   GET /api/v1/pricing/:id
// @access  Public
exports.getPricingPlan = async (req, res, next) => {
  try {
    const plan = await PricingPlan.findById(req.params.id);

    if (!plan) {
      return res.status(404).json({
        success: false,
        message: 'Pricing plan not found',
      });
    }

    res.status(200).json({
      success: true,
      data: plan,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create pricing plan
// @route   POST /api/v1/pricing
// @access  Private/Admin
exports.createPricingPlan = async (req, res, next) => {
  try {
    const plan = await PricingPlan.create(req.body);

    res.status(201).json({
      success: true,
      data: plan,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update pricing plan
// @route   PUT /api/v1/pricing/:id
// @access  Private/Admin
exports.updatePricingPlan = async (req, res, next) => {
  try {
    const plan = await PricingPlan.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!plan) {
      return res.status(404).json({
        success: false,
        message: 'Pricing plan not found',
      });
    }

    res.status(200).json({
      success: true,
      data: plan,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete pricing plan
// @route   DELETE /api/v1/pricing/:id
// @access  Private/Admin
exports.deletePricingPlan = async (req, res, next) => {
  try {
    const plan = await PricingPlan.findByIdAndDelete(req.params.id);

    if (!plan) {
      return res.status(404).json({
        success: false,
        message: 'Pricing plan not found',
      });
    }

    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    next(error);
  }
};


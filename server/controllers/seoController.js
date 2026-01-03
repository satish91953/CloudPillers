const SEOSettings = require('../models/SEOSettings');

// @desc    Get SEO settings for a page
// @route   GET /api/v1/seo/:page
// @access  Public
exports.getSEOSettings = async (req, res, next) => {
  try {
    const seo = await SEOSettings.findOne({ page: req.params.page });

    if (!seo) {
      return res.status(200).json({
        success: true,
        data: null,
      });
    }

    res.status(200).json({
      success: true,
      data: seo,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all SEO settings (Admin)
// @route   GET /api/v1/seo
// @access  Private/Admin
exports.getAllSEOSettings = async (req, res, next) => {
  try {
    const seoSettings = await SEOSettings.find().sort({ page: 1 });

    res.status(200).json({
      success: true,
      count: seoSettings.length,
      data: seoSettings,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create or update SEO settings
// @route   PUT /api/v1/seo/:page
// @access  Private/Admin
exports.updateSEOSettings = async (req, res, next) => {
  try {
    const seo = await SEOSettings.findOneAndUpdate(
      { page: req.params.page },
      { ...req.body, page: req.params.page },
      {
        new: true,
        upsert: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      success: true,
      data: seo,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete SEO settings
// @route   DELETE /api/v1/seo/:page
// @access  Private/Admin
exports.deleteSEOSettings = async (req, res, next) => {
  try {
    const seo = await SEOSettings.findOneAndDelete({ page: req.params.page });

    if (!seo) {
      return res.status(404).json({
        success: false,
        message: 'SEO settings not found',
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


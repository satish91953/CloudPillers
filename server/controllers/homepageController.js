const HomepageContent = require('../models/HomepageContent');

// @desc    Get homepage content
// @route   GET /api/v1/homepage
// @access  Public
exports.getContent = async (req, res, next) => {
  try {
    const content = await HomepageContent.getContent();
    res.status(200).json({
      success: true,
      data: content,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update homepage content
// @route   PUT /api/v1/homepage
// @access  Private/Admin
exports.updateContent = async (req, res, next) => {
  try {
    let content = await HomepageContent.findOne();
    
    if (!content) {
      content = await HomepageContent.create(req.body);
    } else {
      content = await HomepageContent.findOneAndUpdate({}, req.body, {
        new: true,
        runValidators: true,
      });
    }

    res.status(200).json({
      success: true,
      data: content,
    });
  } catch (error) {
    next(error);
  }
};


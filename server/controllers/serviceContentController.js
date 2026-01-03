const ServiceContent = require('../models/ServiceContent');

// @desc    Get all service contents
// @route   GET /api/v1/services/content
// @access  Public
exports.getServiceContents = async (req, res, next) => {
  try {
    const contents = await ServiceContent.find().sort({ serviceName: 1 });

    res.status(200).json({
      success: true,
      count: contents.length,
      data: contents,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single service content
// @route   GET /api/v1/services/content/:serviceId
// @access  Public
exports.getServiceContent = async (req, res, next) => {
  try {
    const content = await ServiceContent.findOne({ serviceId: req.params.serviceId });

    if (!content) {
      return res.status(404).json({
        success: false,
        message: 'Service content not found',
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

// @desc    Create service content
// @route   POST /api/v1/services/content
// @access  Private/Admin
exports.createServiceContent = async (req, res, next) => {
  try {
    const content = await ServiceContent.create(req.body);

    res.status(201).json({
      success: true,
      data: content,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update service content
// @route   PUT /api/v1/services/content/:serviceId
// @access  Private/Admin
exports.updateServiceContent = async (req, res, next) => {
  try {
    const content = await ServiceContent.findOneAndUpdate(
      { serviceId: req.params.serviceId },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!content) {
      return res.status(404).json({
        success: false,
        message: 'Service content not found',
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

// @desc    Delete service content
// @route   DELETE /api/v1/services/content/:serviceId
// @access  Private/Admin
exports.deleteServiceContent = async (req, res, next) => {
  try {
    const content = await ServiceContent.findOneAndDelete({
      serviceId: req.params.serviceId,
    });

    if (!content) {
      return res.status(404).json({
        success: false,
        message: 'Service content not found',
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


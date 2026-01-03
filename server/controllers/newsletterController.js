const Newsletter = require('../models/Newsletter');

// @desc    Subscribe to newsletter
// @route   POST /api/v1/newsletter
// @access  Public
exports.subscribe = async (req, res, next) => {
  try {
    const { email, name } = req.body;

    // Check if already subscribed
    let subscriber = await Newsletter.findOne({ email });

    if (subscriber) {
      if (subscriber.subscribed) {
        return res.status(400).json({
          success: false,
          message: 'Email is already subscribed',
        });
      } else {
        // Resubscribe
        subscriber.subscribed = true;
        subscriber.subscribedAt = new Date();
        subscriber.unsubscribedAt = null;
        if (name) subscriber.name = name;
        await subscriber.save();
      }
    } else {
      subscriber = await Newsletter.create({ email, name, subscribed: true });
    }

    res.status(201).json({
      success: true,
      data: subscriber,
      message: 'Successfully subscribed to newsletter!',
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Unsubscribe from newsletter
// @route   POST /api/v1/newsletter/unsubscribe
// @access  Public
exports.unsubscribe = async (req, res, next) => {
  try {
    const { email } = req.body;

    const subscriber = await Newsletter.findOne({ email });

    if (!subscriber) {
      return res.status(404).json({
        success: false,
        message: 'Email not found',
      });
    }

    subscriber.subscribed = false;
    subscriber.unsubscribedAt = new Date();
    await subscriber.save();

    res.status(200).json({
      success: true,
      message: 'Successfully unsubscribed from newsletter',
    });
  } catch (error) {
    next(error);
  }
};


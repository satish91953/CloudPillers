const mongoose = require('mongoose');

const PricingPlanSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a plan name'],
      trim: true,
    },
    description: {
      type: String,
      default: '',
    },
    price: {
      type: Number,
      required: [true, 'Please add a price'],
    },
    currency: {
      type: String,
      default: 'USD',
    },
    period: {
      type: String,
      enum: ['monthly', 'yearly', 'one-time'],
      default: 'monthly',
    },
    features: [
      {
        text: { type: String, required: true },
        included: { type: Boolean, default: true },
        order: { type: Number, default: 0 },
      },
    ],
    popular: {
      type: Boolean,
      default: false,
    },
    badge: {
      type: String,
      default: '',
    },
    ctaText: {
      type: String,
      default: 'Get Started',
    },
    order: {
      type: Number,
      default: 0,
    },
    enabled: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('PricingPlan', PricingPlanSchema);


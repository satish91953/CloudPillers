const mongoose = require('mongoose');

const ServiceContentSchema = new mongoose.Schema(
  {
    serviceId: {
      type: String,
      required: true,
      unique: true,
      enum: [
        'devops',
        'cybersecurity',
        'compliance',
        'cost-optimization',
        're-architecture',
        'managed-support',
        'vpn-firewall',
      ],
    },
    serviceName: {
      type: String,
      required: true,
    },

    // Hero Section
    hero: {
      badge: { type: String, default: '' },
      mainHeading: { type: String, required: true },
      subHeading: { type: String, default: '' },
      description: { type: String, required: true },
      primaryCTA: { type: String, default: 'Get Assessment' },
      secondaryCTA: { type: String, default: 'Contact Us' },
    },

    // Features/Capabilities
    features: [
      {
        title: { type: String, required: true },
        description: { type: String, default: '' },
        items: [{ type: String }],
        order: { type: Number, default: 0 },
      },
    ],

    // Benefits
    benefits: [
      {
        text: { type: String, required: true },
        order: { type: Number, default: 0 },
      },
    ],

    // Outcomes/Results
    outcomes: [
      {
        metric: { type: String, default: '' },
        label: { type: String, required: true },
        order: { type: Number, default: 0 },
      },
    ],

    // CTA Section
    cta: {
      title: { type: String, default: '' },
      description: { type: String, default: '' },
      buttonText: { type: String, default: 'Request a Consultation' },
    },

    // SEO
    seo: {
      title: { type: String, default: '' },
      description: { type: String, default: '' },
      keywords: { type: String, default: '' },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('ServiceContent', ServiceContentSchema);


const mongoose = require('mongoose');

const HomepageContentSchema = new mongoose.Schema(
  {
    // Hero Section
    hero: {
      badge: { type: String, default: 'Enterprise Cloud Services' },
      mainHeading: { type: String, default: 'Build, Secure & Optimize' },
      subHeading: { type: String, default: 'Your Cloud Infrastructure' },
      description: {
        type: String,
        default: 'Enterprise-grade DevOps, Security, Compliance, and Cost Optimization services for cloud-native businesses.',
      },
      primaryCTA: { type: String, default: 'Get Free Assessment' },
      secondaryCTA: { type: String, default: 'Contact Us' },
    },

    // Stats Section
    stats: [
      {
        value: { type: String, required: true },
        label: { type: String, required: true },
        order: { type: Number, default: 0 },
      },
    ],

    // Services Overview
    services: [
      {
        title: { type: String, required: true },
        description: { type: String, required: true },
        gradient: { type: String, default: 'from-blue-500 to-cyan-500' },
        path: { type: String, required: true },
        enabled: { type: Boolean, default: true },
        order: { type: Number, default: 0 },
      },
    ],

    // How We Work Section
    howWeWork: {
      title: { type: String, default: 'How We Work' },
      subtitle: { type: String, default: 'Our proven process' },
      steps: [
        {
          number: { type: String, required: true },
          title: { type: String, required: true },
          description: { type: String, required: true },
          order: { type: Number, default: 0 },
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

// Ensure only one homepage content document exists
HomepageContentSchema.statics.getContent = async function () {
  let content = await this.findOne();
  if (!content) {
    content = await this.create({
      stats: [
        { value: '30-60%', label: 'Cost Reduction', order: 0 },
        { value: '99.99%', label: 'Uptime SLA', order: 1 },
        { value: '24/7', label: 'Support', order: 2 },
        { value: '50+', label: 'Clients', order: 3 },
      ],
    });
  }
  return content;
};

module.exports = mongoose.model('HomepageContent', HomepageContentSchema);


const mongoose = require('mongoose');

const SiteSettingsSchema = new mongoose.Schema(
  {
    // Company Information
    companyName: {
      type: String,
      default: 'CloudPillers',
    },
    companyTagline: {
      type: String,
      default: 'Build, Secure & Optimize Your Cloud Infrastructure',
    },
    companyDescription: {
      type: String,
      default: 'Enterprise-grade DevOps, Security, Compliance, and Cost Optimization services for cloud-native businesses.',
    },
    logo: {
      type: String,
      default: '',
    },
    favicon: {
      type: String,
      default: '',
    },

    // Contact Information
    contactEmail: {
      type: String,
      default: 'contact@cloudpillers.com',
    },
    supportEmail: {
      type: String,
      default: 'support@cloudpillers.com',
    },
    salesEmail: {
      type: String,
      default: 'sales@cloudpillers.com',
    },
    phone: {
      type: String,
      default: '+1 (555) 123-4567',
    },
    address: {
      street: { type: String, default: '' },
      city: { type: String, default: 'San Francisco' },
      state: { type: String, default: 'CA' },
      zip: { type: String, default: '' },
      country: { type: String, default: 'USA' },
    },

    // Social Media Links
    socialMedia: {
      linkedin: { type: String, default: '' },
      twitter: { type: String, default: '' },
      github: { type: String, default: '' },
      facebook: { type: String, default: '' },
      youtube: { type: String, default: '' },
      instagram: { type: String, default: '' },
    },

    // Business Hours
    businessHours: {
      timezone: { type: String, default: 'America/Los_Angeles' },
      hours: { type: String, default: 'Monday - Friday: 9:00 AM - 6:00 PM PST' },
      supportAvailability: { type: String, default: '24/7' },
    },
  },
  {
    timestamps: true,
  }
);

// Ensure only one settings document exists
SiteSettingsSchema.statics.getSettings = async function () {
  let settings = await this.findOne();
  if (!settings) {
    settings = await this.create({});
  }
  return settings;
};

module.exports = mongoose.model('SiteSettings', SiteSettingsSchema);


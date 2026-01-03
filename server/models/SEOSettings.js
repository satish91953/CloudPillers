const mongoose = require('mongoose');

const SEOSettingsSchema = new mongoose.Schema(
  {
    page: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    keywords: {
      type: String,
      default: '',
    },
    canonical: {
      type: String,
      default: '',
    },
    ogImage: {
      type: String,
      default: '',
    },
    ogTitle: {
      type: String,
      default: '',
    },
    ogDescription: {
      type: String,
      default: '',
    },
    robots: {
      type: String,
      default: 'index, follow',
    },
    schema: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('SEOSettings', SEOSettingsSchema);


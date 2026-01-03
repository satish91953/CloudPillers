const mongoose = require('mongoose');

const WhitepaperSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a title'],
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: true,
    },
    fileUrl: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
    },
    category: {
      type: String,
      enum: [
        'devops',
        'security',
        'compliance',
        'cost-optimization',
        'architecture',
        'general',
      ],
      default: 'general',
    },
    downloadCount: {
      type: Number,
      default: 0,
    },
    gated: {
      type: Boolean,
      default: true,
    },
    published: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Create slug from title
WhitepaperSchema.pre('save', function (next) {
  if (this.isModified('title') && !this.slug) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }
  next();
});

WhitepaperSchema.index({ slug: 1 });
WhitepaperSchema.index({ published: 1, category: 1 });

module.exports = mongoose.model('Whitepaper', WhitepaperSchema);


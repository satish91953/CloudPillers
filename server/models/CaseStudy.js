const mongoose = require('mongoose');

const CaseStudySchema = new mongoose.Schema(
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
    clientName: {
      type: String,
      trim: true,
    },
    industry: {
      type: String,
      enum: ['fintech', 'healthcare', 'ecommerce', 'saas', 'other'],
    },
    services: {
      type: [String],
      enum: [
        'devops',
        'cybersecurity',
        'compliance',
        'finops',
        're-architecture',
        'managed-support',
      ],
    },
    challenge: {
      type: String,
      required: true,
    },
    solution: {
      type: String,
      required: true,
    },
    results: {
      costReduction: String,
      performanceImprovement: String,
      otherMetrics: String,
    },
    testimonial: {
      quote: String,
      author: String,
      position: String,
    },
    featuredImage: {
      type: String,
    },
    images: {
      type: [String],
    },
    published: {
      type: Boolean,
      default: false,
    },
    publishedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

// Create slug from title
CaseStudySchema.pre('save', function (next) {
  if (this.isModified('title') && !this.slug) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }
  next();
});

CaseStudySchema.index({ slug: 1 });
CaseStudySchema.index({ published: 1, industry: 1 });

module.exports = mongoose.model('CaseStudy', CaseStudySchema);


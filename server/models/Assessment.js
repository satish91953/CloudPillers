const mongoose = require('mongoose');

const AssessmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      match: [/^\S+@\S+\.\S+$/, 'Please add a valid email'],
    },
    company: {
      type: String,
      trim: true,
    },
    companySize: {
      type: String,
      enum: ['1-10', '11-50', '51-200', '201-1000', '1000+'],
    },
    currentCloudSpend: {
      type: String,
      enum: ['<$1k', '$1k-$10k', '$10k-$50k', '$50k-$100k', '$100k+'],
    },
    primaryChallenges: {
      type: [String],
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
        'vpn-firewall',
      ],
    },
    timeline: {
      type: String,
      enum: ['immediate', '1-3 months', '3-6 months', '6+ months'],
    },
    budget: {
      type: String,
      enum: ['<$10k', '$10k-$50k', '$50k-$100k', '$100k+'],
    },
    additionalInfo: {
      type: String,
    },
    status: {
      type: String,
      enum: ['new', 'reviewed', 'contacted', 'qualified'],
      default: 'new',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Assessment', AssessmentSchema);


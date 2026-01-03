const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema(
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
    phone: {
      type: String,
      trim: true,
    },
    message: {
      type: String,
      required: [true, 'Please add a message'],
    },
    service: {
      type: String,
      enum: [
        'devops',
        'cybersecurity',
        'compliance',
        'finops',
        're-architecture',
        'managed-support',
        'vpn-firewall',
        'general',
      ],
      default: 'general',
    },
    source: {
      type: String,
    },
    status: {
      type: String,
      enum: ['new', 'contacted', 'qualified', 'closed'],
      default: 'new',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Contact', ContactSchema);


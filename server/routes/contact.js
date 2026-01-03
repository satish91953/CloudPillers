const express = require('express');
const { body } = require('express-validator');
const {
  createContact,
  getContacts,
  getContact,
  updateContactStatus,
} = require('../controllers/contactController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

const contactValidation = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Please provide a valid email'),
  body('message').trim().notEmpty().withMessage('Message is required'),
];

router.post('/', contactValidation, createContact);
router.get('/admin', protect, authorize('admin', 'editor'), getContacts);
router.get('/admin/:id', protect, authorize('admin', 'editor'), getContact);
router.put('/admin/:id/status', protect, authorize('admin', 'editor'), updateContactStatus);

module.exports = router;


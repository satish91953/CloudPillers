const express = require('express');
const { body } = require('express-validator');
const {
  createAssessment,
  getAssessments,
  getAssessment,
} = require('../controllers/assessmentController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

const assessmentValidation = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Please provide a valid email'),
];

router.post('/', assessmentValidation, createAssessment);
router.get('/admin', protect, authorize('admin', 'editor'), getAssessments);
router.get('/admin/:id', protect, authorize('admin', 'editor'), getAssessment);

module.exports = router;


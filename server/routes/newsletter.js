const express = require('express');
const { body } = require('express-validator');
const { subscribe, unsubscribe } = require('../controllers/newsletterController');

const router = express.Router();

const subscribeValidation = [
  body('email').isEmail().withMessage('Please provide a valid email'),
];

router.post('/', subscribeValidation, subscribe);
router.post('/unsubscribe', subscribeValidation, unsubscribe);

module.exports = router;


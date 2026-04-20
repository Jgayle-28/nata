const express = require('express')
const { body } = require('express-validator')
const {
  checkoutSession,
  webhookAck,
} = require('../controllers/paymentController')

const router = express.Router()

router.post(
  '/checkout-session',
  [
    body('provider').optional().isIn(['stripe', 'square']),
    body('planId').isIn([
      'association-monthly',
      'association-6mo',
      'association-yearly',
    ]),
    body('customerEmail').optional().isEmail(),
  ],
  checkoutSession,
)

router.post('/webhook/:provider', webhookAck)

module.exports = router

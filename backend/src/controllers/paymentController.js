const { validationResult } = require('express-validator')
const {
  createCheckoutSession,
} = require('../services/payments/providerResolver')

async function checkoutSession(req, res, next) {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ message: 'Invalid payment request', errors: errors.array() })
    }

    const { provider, planId, customerEmail } = req.body
    const data = await createCheckoutSession({
      provider,
      planId,
      customerEmail,
    })

    return res.status(200).json(data)
  } catch (error) {
    next(error)
  }
}

function webhookAck(req, res) {
  // Acknowledge early for provider webhook retries.
  res.status(200).json({ received: true })
}

module.exports = { checkoutSession, webhookAck }

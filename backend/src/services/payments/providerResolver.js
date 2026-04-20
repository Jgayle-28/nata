const env = require('../../config/env')
const { createStripeCheckoutSession } = require('./stripeProvider')
const { createSquareCheckoutSession } = require('./squareProvider')

async function createCheckoutSession({ provider, planId, customerEmail }) {
  const resolvedProvider = (
    provider ||
    env.defaultPaymentProvider ||
    'stripe'
  ).toLowerCase()

  if (resolvedProvider === 'square') {
    return createSquareCheckoutSession({ planId, customerEmail })
  }

  return createStripeCheckoutSession({ planId, customerEmail })
}

module.exports = { createCheckoutSession }

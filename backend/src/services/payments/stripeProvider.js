const Stripe = require('stripe')
const env = require('../../config/env')

const stripe = env.stripeSecretKey ? new Stripe(env.stripeSecretKey) : null

async function createStripeCheckoutSession({ planId, customerEmail }) {
  const priceId = env.stripePriceIds[planId]

  if (!stripe || !priceId) {
    return {
      checkoutUrl: `${env.stripeSuccessUrl}&provider=stripe&mode=mock`,
      mode: 'mock',
    }
  }

  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    line_items: [{ price: priceId, quantity: 1 }],
    customer_email: customerEmail || undefined,
    success_url: `${env.stripeSuccessUrl}&provider=stripe`,
    cancel_url: `${env.stripeCancelUrl}&provider=stripe`,
    metadata: { planId },
  })

  return { checkoutUrl: session.url, sessionId: session.id, mode: 'live' }
}

async function verifyStripeWebhook(rawBody, signature) {
  if (!stripe || !env.stripeWebhookSecret) {
    return null
  }

  return stripe.webhooks.constructEvent(
    rawBody,
    signature,
    env.stripeWebhookSecret,
  )
}

module.exports = {
  createStripeCheckoutSession,
  verifyStripeWebhook,
}

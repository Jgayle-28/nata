const crypto = require('crypto')
const env = require('../../config/env')

function squareBaseUrl() {
  return env.squareEnvironment === 'production'
    ? 'https://connect.squareup.com'
    : 'https://connect.squareupsandbox.com'
}

async function createSquareCheckoutSession({ planId, customerEmail }) {
  if (!env.squareAccessToken || !env.squareLocationId) {
    return {
      checkoutUrl: `${env.stripeSuccessUrl}&provider=square&mode=mock`,
      mode: 'mock',
    }
  }

  const amountMap = {
    'association-monthly': 2900,
    'association-6mo': 14900,
    'association-yearly': 27900,
  }

  const amount = amountMap[planId] || 2900

  const response = await fetch(
    `${squareBaseUrl()}/v2/online-checkout/payment-links`,
    {
      method: 'POST',
      headers: {
        'Square-Version': '2024-11-20',
        Authorization: `Bearer ${env.squareAccessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        idempotency_key: crypto.randomUUID(),
        quick_pay: {
          name: `NATA Membership - ${planId}`,
          price_money: {
            amount,
            currency: 'USD',
          },
          location_id: env.squareLocationId,
        },
        checkout_options: {
          ask_for_shipping_address: false,
          redirect_url: `${env.stripeSuccessUrl}&provider=square`,
        },
        pre_populated_data: {
          buyer_email: customerEmail || undefined,
        },
      }),
    },
  )

  if (!response.ok) {
    const data = await response.text()
    throw new Error(`Square checkout failed: ${data}`)
  }

  const data = await response.json()
  const url = data?.payment_link?.url

  if (!url) {
    throw new Error('Square checkout URL was not returned')
  }

  return { checkoutUrl: url, mode: 'live' }
}

module.exports = {
  createSquareCheckoutSession,
}

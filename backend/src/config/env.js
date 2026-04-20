const required = []

if (!process.env.MONGODB_URI) required.push('MONGODB_URI')

if (required.length > 0) {
  console.warn(`[env] Missing required variables: ${required.join(', ')}`)
}

module.exports = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: Number(process.env.PORT || 5000),
  apiBasePath: process.env.API_BASE_PATH || '/api',
  mongodbUri: process.env.MONGODB_URI || '',
  auth0Domain: process.env.AUTH0_DOMAIN || '',
  auth0Audience: process.env.AUTH0_AUDIENCE || '',
  stripeSecretKey: process.env.STRIPE_SECRET_KEY || '',
  stripeWebhookSecret: process.env.STRIPE_WEBHOOK_SECRET || '',
  stripeSuccessUrl:
    process.env.STRIPE_SUCCESS_URL ||
    'http://localhost:5173/dashboard?checkout=success',
  stripeCancelUrl:
    process.env.STRIPE_CANCEL_URL ||
    'http://localhost:5173/membership?checkout=cancelled',
  stripePriceIds: {
    'association-monthly': process.env.STRIPE_PRICE_ASSOCIATION_MONTHLY || '',
    'association-6mo': process.env.STRIPE_PRICE_ASSOCIATION_6MO || '',
    'association-yearly': process.env.STRIPE_PRICE_ASSOCIATION_YEARLY || '',
  },
  squareAccessToken: process.env.SQUARE_ACCESS_TOKEN || '',
  squareLocationId: process.env.SQUARE_LOCATION_ID || '',
  squareEnvironment: process.env.SQUARE_ENVIRONMENT || 'sandbox',
  defaultPaymentProvider: (
    process.env.DEFAULT_PAYMENT_PROVIDER || 'stripe'
  ).toLowerCase(),
}

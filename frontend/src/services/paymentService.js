import apiClient from './apiClient'

export async function createCheckoutSession({
  provider,
  planId,
  customerEmail,
}) {
  const response = await apiClient.post('/payments/checkout-session', {
    provider,
    planId,
    customerEmail,
  })

  return response.data
}

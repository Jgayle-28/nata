const mongoose = require('mongoose')

const PaymentEventSchema = new mongoose.Schema(
  {
    provider: { type: String, enum: ['stripe', 'square'], required: true },
    eventType: { type: String, required: true },
    eventId: { type: String, required: true, unique: true },
    auth0Sub: { type: String, index: true },
    planId: { type: String, default: '' },
    payload: { type: Object, required: true },
  },
  { timestamps: true },
)

module.exports = mongoose.model('PaymentEvent', PaymentEventSchema)

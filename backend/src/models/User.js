const mongoose = require('mongoose')

const MembershipSchema = new mongoose.Schema(
  {
    tier: {
      type: String,
      enum: [
        'none',
        'association-monthly',
        'association-6mo',
        'association-yearly',
      ],
      default: 'none',
    },
    status: {
      type: String,
      enum: ['inactive', 'active', 'cancelled', 'past_due'],
      default: 'inactive',
    },
    provider: {
      type: String,
      enum: ['stripe', 'square', 'none'],
      default: 'none',
    },
    nextBillingDate: Date,
  },
  { _id: false },
)

const UserSchema = new mongoose.Schema(
  {
    auth0Sub: { type: String, required: true, unique: true, index: true },
    email: { type: String, required: true, index: true },
    fullName: { type: String, default: '' },
    membership: { type: MembershipSchema, default: () => ({}) },
  },
  { timestamps: true },
)

module.exports = mongoose.model('User', UserSchema)

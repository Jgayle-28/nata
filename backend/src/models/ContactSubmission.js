const mongoose = require('mongoose')

const ContactSubmissionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, index: true },
    message: { type: String, required: true },
  },
  { timestamps: true },
)

module.exports = mongoose.model('ContactSubmission', ContactSubmissionSchema)

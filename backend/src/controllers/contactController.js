const { validationResult } = require('express-validator')
const ContactSubmission = require('../models/ContactSubmission')

async function submitContact(req, res, next) {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ message: 'Invalid contact data', errors: errors.array() })
    }

    const { name, email, message } = req.body

    await ContactSubmission.create({ name, email, message })

    return res.status(201).json({ message: 'Contact submission received' })
  } catch (error) {
    next(error)
  }
}

module.exports = { submitContact }

const express = require('express')
const { body } = require('express-validator')
const { submitContact } = require('../controllers/contactController')

const router = express.Router()

router.post(
  '/',
  [
    body('name').trim().isLength({ min: 2, max: 120 }),
    body('email').trim().isEmail(),
    body('message').trim().isLength({ min: 10, max: 3000 }),
  ],
  submitContact,
)

module.exports = router

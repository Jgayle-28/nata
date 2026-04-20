const express = require('express')
const { getPlans } = require('../controllers/membershipController')

const router = express.Router()

router.get('/plans', getPlans)

module.exports = router

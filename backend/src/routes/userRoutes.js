const express = require('express')
const { checkJwt } = require('../middleware/auth0Check')
const { me } = require('../controllers/userController')

const router = express.Router()

router.get('/me', checkJwt, me)

module.exports = router

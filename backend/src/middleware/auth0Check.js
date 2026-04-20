const { auth } = require('express-oauth2-jwt-bearer')
const env = require('../config/env')

const authConfigured = Boolean(env.auth0Domain && env.auth0Audience)

const checkJwt = authConfigured
  ? auth({
      audience: env.auth0Audience,
      issuerBaseURL: `https://${env.auth0Domain}/`,
      tokenSigningAlg: 'RS256',
    })
  : (req, res, next) => {
      res.status(500).json({
        message:
          'Auth0 is not configured on the backend. Add AUTH0_DOMAIN and AUTH0_AUDIENCE.',
      })
      return
    }

module.exports = { checkJwt, authConfigured }

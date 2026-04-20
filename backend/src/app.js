const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const env = require('./config/env')
const contactRoutes = require('./routes/contactRoutes')
const membershipRoutes = require('./routes/membershipRoutes')
const paymentRoutes = require('./routes/paymentRoutes')
const userRoutes = require('./routes/userRoutes')
const { errorHandler, notFound } = require('./middleware/errorHandler')

const app = express()

app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173',
    credentials: true,
  }),
)
app.use(helmet())
app.use(morgan('dev'))
app.use(express.json())

app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.use(`${env.apiBasePath}/contact`, contactRoutes)
app.use(`${env.apiBasePath}/membership`, membershipRoutes)
app.use(`${env.apiBasePath}/payments`, paymentRoutes)
app.use(`${env.apiBasePath}/user`, userRoutes)

app.use(notFound)
app.use(errorHandler)

module.exports = app

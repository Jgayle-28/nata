require('dotenv').config()
const app = require('./app')
const env = require('./config/env')
const { connectDb } = require('./config/db')

async function startServer() {
  try {
    await connectDb()

    app.listen(env.port, () => {
      console.log(`[server] Running on port ${env.port}`)
    })
  } catch (error) {
    console.error('[server] Failed to start', error)
    process.exit(1)
  }
}

startServer()

const mongoose = require('mongoose')
const env = require('./env')

let connected = false

async function connectDb() {
  if (connected) return

  if (!env.mongodbUri) {
    console.warn(
      '[db] MONGODB_URI is missing. Database-dependent routes may fail.',
    )
    return
  }

  // Conservative defaults for a long-running web server with moderate API traffic.
  await mongoose.connect(env.mongodbUri, {
    serverSelectionTimeoutMS: 5000,
    connectTimeoutMS: 10000,
    maxPoolSize: 20,
    minPoolSize: 5,
  })

  connected = true
  console.log('[db] MongoDB connected')
}

module.exports = { connectDb }

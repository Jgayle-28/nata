function notFound(req, res) {
  res.status(404).json({ message: 'Route not found' })
}

function errorHandler(err, req, res, next) {
  const status = err.status || 500
  const message = err.message || 'Server error'

  if (status >= 500) {
    console.error('[server-error]', err)
  }

  res.status(status).json({ message })
}

module.exports = { notFound, errorHandler }

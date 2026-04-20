async function me(req, res) {
  res.json({
    message: 'Authenticated request',
    user: req.auth || null,
  })
}

module.exports = { me }

module.exports.checkAPIKey = (req, res, next) => {
  const userAPIKey = req.query.api_key

  if (!userAPIKey) {
    return res.status(400).json({
      error: true,
      message: 'Не указан API_KEY.',
    })
  }

  if (userAPIKey === process.env.API_KEY) {
    next()
  } else {
    res.status(403).json({
      error: true,
      message: 'Неверный API_KEY.',
    })
  }
}
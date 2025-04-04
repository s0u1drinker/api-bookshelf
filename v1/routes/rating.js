const express = require('express')
const router = express.Router()
const { checkAPIKey } = require('./../middleware')
const rating = require('./../json/rating.json')

router.use(checkAPIKey)

router.route('/').get((req, res) => {
  res.json({
    error: false,
    message: '',
    rating
  })
})

module.exports = router
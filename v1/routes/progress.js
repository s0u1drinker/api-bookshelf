const express = require('express')
const router = express.Router()
const { checkAPIKey } = require('./../middleware')
const progress = require('./../json/progress.json')

router.use(checkAPIKey)

router.route('/').get((req, res) => {
  res.json({
    error: false,
    message: '',
    progress
  })
})

module.exports = router
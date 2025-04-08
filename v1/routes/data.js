const express = require('express')
const router = express.Router()
const { checkAPIKey } = require('./../middleware')
const books = require('./../json/books.json')
const progress = require('./../json/progress.json')
const rating = require('./../json/rating.json')

router.use(checkAPIKey)

router.route('/').get((req, res) => {
  res.json({
    error: false,
    message: '',
    books,
    progress,
    rating
  })
})

module.exports = router
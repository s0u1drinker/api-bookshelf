const express = require('express')
const router = express.Router()
const { checkAPIKey } = require('./../middleware')
const books = require('./../json/books.json')

router.use(checkAPIKey)

router.route('/').get((req, res) => {
  res.json({
    error: false,
    message: '',
    books
  })
})

module.exports = router
const express = require('express')
const router = express.Router()

const bookRouter = require('./books')
const progressRouter = require('./progress')
const ratingRouter = require('./rating')

router.route('/').get((req, res) => {
  res.json({
    error: true,
    message: 'Не указаны параметры запроса.'
  })
})

router.use('/getBooks', bookRouter)
router.use('/getProgress', progressRouter)
router.use('/getRatings', ratingRouter)

module.exports = router
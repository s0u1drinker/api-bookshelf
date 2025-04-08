const express = require('express')
const router = express.Router()

const bookRouter = require('./books')
const progressRouter = require('./progress')
const ratingRouter = require('./rating')
const dataRouter = require('./data')

router.route('/').get((req, res) => {
  res.json({
    error: true,
    message: 'Не указаны параметры запроса.'
  })
})

router.use('/books', bookRouter)
router.use('/progress', progressRouter)
router.use('/rating', ratingRouter)
router.use('/data', dataRouter)

module.exports = router
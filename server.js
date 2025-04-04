const express = require('express')
const app = express()
const bodyParser = require('body-parser')
require('dotenv').config()

const PORT = 3000
const v1Router = require('./v1/routes')

app.use(bodyParser.json());

app.use('/api/v1', v1Router)
app.use((req, res) => {
  res.json({
    error: true,
    message: "Сервер отказывается отвечать на такой запрос."
  })
})

app.listen(PORT, (error) => {
  if (error) {
    console.log('\x1b[31mДух машины негодует:\x1b[0m\n', error)
  } else {
    const text = ['Спящий пробудился!', 'Опять работать?', `Порт ${PORT} Вас внимательно слушает...`]

    console.log(text[Math.floor(Math.random() * text.length)])
  }
})
const morgan = require('morgan')
const express = require('express')
const giftExchange = require('./routes/gift-exchange')
const { NotFoundError } = require('./utils/errors')
const app = express()

app.use(morgan('tiny'))
app.use(express.json())
// path to execute on, the method to excecute
app.use('/gift-exchange', giftExchange)


app.get('/', async (req, res, next) => {
    res.status(200).json({ping: 'pong'})
})

app.use(async (rec, res, next) => {
    return next(new NotFoundError)
})

app.use((err, req, res, next) => {
    return res.status(err.status || 500).json( {
        error:{ message: err.message, status: err.status || 500}
    })
})
module.exports = app

// app.listen(3000)

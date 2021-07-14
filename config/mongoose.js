const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/expense-tracker', { useNewUrlParser: true, useUnifiedTopology: true })

const dbRes = mongoose.connection

dbRes.on('error', () => {
  console.log('MongoDB connection error!!')
})

dbRes.once('open', () => {
  console.log('MongoDB connected~')
})


module.exports = dbRes
const mongoose = require('mongoose')
const MONGO_DB = process.env.MONOGO_DB || 'mongodb://localhost/expense-tracker'
mongoose.connect(MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true })
const dbRes = mongoose.connection

dbRes.on('error', () => {
  console.log('MongoDB connection error!!')
})

dbRes.once('open', () => {
  console.log('MongoDB connected~')
})


module.exports = dbRes
/* MongoDB */
const mongoose = require('mongoose')
const Schema = mongoose.Schema

/* Schema settings */
const ExpenseSchema = new Schema ({
  category: {
    type: String,
    require: true
  },
  title: {
    type: String,
    require: true
  },
  amount: {
    type: String,
    require: true
  },
  date: {
    type: String,
    require: true
  },
  remark: {
    type: String,
    require: false
  }
})


module.exports = mongoose.model('expense', ExpenseSchema)

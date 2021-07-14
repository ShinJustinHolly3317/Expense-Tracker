/* Express */
const express = require('express')
const router = express.Router()

/* MongoDB */
const expenseSche = require('../../models/expenseSchema')

router.get('/', (req, res) => {
  return expenseSche.find()
  .lean()
  .then(expenses => {
    res.render('index', { expenses })
  })
  .catch(err=> {
    console.log(err)
  })
})

router.get('/create', (req, res) => {
  const { title, date, amount, category } = req.body
  res.render('create')
})

module.exports = router
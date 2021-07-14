/* Express */
const express = require('express')
const router = express.Router()

/* MongoDB */
const expenseSche = require('../../models/expenseSchema')

router.get('/create', (req, res) => {
  
  res.render('create')
})

router.post('/create', (req, res) => {
  const { title, date, amount, category, remark } = req.body
  expenseSche.create({
    title: title,
    date: date,
    amount: amount,
    category: category,
    remark: remark
  })
  .then(() => {
    res.redirect('/')
  })
  .catch(err => [
    console.log(err)
  ])
})

module.exports = router
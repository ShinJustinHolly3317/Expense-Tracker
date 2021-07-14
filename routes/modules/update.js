/* Express */
const express = require('express')
const router = express.Router()

/* MongoDB */
const expenseSche = require('../../models/expenseSchema')


router.put('/:id', (req, res) => {
  const id = req.params.id
  const {
    title,
    date,
    category,
    amount,
    remark
  } = req.body
  return expenseSche.findById(id)
  .then(expense => {
    expense.title = title
    expense.date = date
    expense.category = category
    expense.amount = amount
    expense.remark = remark
    expense.save()
  })
  .then(() => res.redirect('/'))
  .catch(err => console.log(err))
})


module.exports = router
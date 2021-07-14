const express = require('express')
const router = express.Router()
const expenseSche = require('../../models/expenseSchema')

router.get('/dtl/:id', (req, res) => {
  const id = req.params.id
  console.log(id);
  return expenseSche.findById(id)
  .lean()
  .then(expense => {
    res.render('detail-u-d', { expense })
  })
  .catch(err => {
    console.log(err);
  })
})

module.exports = router
const express = require('express')
const router = express.Router()

const expenseSche = require('../../models/expenseSchema')


router.delete('/del/:id', (req, res) => {
  const id = req.params.id
  return expenseSche.findById(id)
  .then(expense => { 
    expense.remove() 
    res.redirect('/')
  })
  .catch(err => console.log(err))
})


module.exports = router
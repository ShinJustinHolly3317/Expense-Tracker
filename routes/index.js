const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const create = require('./modules/create')
const detail = require('./modules/detail')
const update = require('./modules/update')
const del = require('./modules/delete')

router.use('/', home)
router.use('/exps', create)
router.use('/exps', detail)
router.use('/exps', update)
router.use('/exps', del)


module.exports = router
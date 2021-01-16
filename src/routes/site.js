const express = require('express')
const route = express.Router()
const newController = require('../app/controllers/SiteController')

route.use('/:slug', newController.search )
route.use('/', newController.index )


module.exports = route
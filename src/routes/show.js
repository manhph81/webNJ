const express = require('express')
const route = express.Router()
const showController = require('../app/controllers/ShowController')

route.get('/:slug', showController.show )
route.get('/', showController.index )


module.exports = route 

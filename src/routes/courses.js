const express = require('express')
const route = express.Router()
const courseController = require('../app/controllers/CourseController')

route.get('/create', courseController.create )
route.get('/update', courseController.update )
route.get('/delete', courseController.delete )

route.post('/store', courseController.store )

// route.get('/:slug', coureController.show )
//route.get('/', courseController.index )


module.exports = route
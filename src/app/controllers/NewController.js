const Block = require('../models/Block')
const { mutipleMongooseToObject } = require('../../util/mongoose')
const { mongooseToObject } = require('../../util/mongoose')

class NewController{
    index(req,res,next){
        Block.find({})
            .then(block => res.render('news',{
                block : mutipleMongooseToObject(block) 
            }))
            .catch(next)

    }
    
    show(req,res,next){
        Block.findOne({ slug : req.params.slug })
            .then(block => res.render('show',{
                block : mongooseToObject(block)
            }))
        .catch(res.send('E'))
    }
}
module.exports = new NewController()
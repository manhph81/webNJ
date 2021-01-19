const Block = require('../models/Block')

class CourseController{
    create(req,res,next){
        res.render('courses/create')
        // Block.find({})
        //     .then(block => res.render('news',{
        //         block : mutipleMongooseToObject(block) 
        //     }))
        //     .catch(next)

    }
    
    update(req,res,next){
        res.render('courses/update')
        // Block.findOne({ slug : req.params.slug })
        //     .then(block => res.render('show',{
        //         block : mongooseToObject(block)
        //     }))
        // .catch(res.send('E'))
    }

    delete(req,res,next){
        res.render('courses/delete')
        // Block.findOne({ slug : req.params.slug })
        //     .then(block => res.render('show',{
        //         block : mongooseToObject(block)
        //     }))
        // .catch(res.send('E'))
    }

    store(req,res,next){
        const data = req.body
        const course = new Block(data)
        course.save()
            .then(() => res.redirect('/cources'))
            .catch(e=>{
                res.send('Error')
            })
    }
}
module.exports = new CourseController()
const newsRoute = require('./news')
const sitesRoute = require('./site')
const showRoute = require('./show')
const coursesRoute = require('./courses')

function route(app){
    app.use('/courses',coursesRoute)
    app.use('/show',showRoute)
    app.use('/news',newsRoute)  
    app.use('/',sitesRoute)
}
module.exports = route
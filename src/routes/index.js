const newsRoute = require('./news')
const sitesRoute = require('./site')
const showRoute = require('./show')

function route(app){
    app.use('/show',showRoute)
    app.use('/news',newsRoute)  
    app.use('/',sitesRoute)
}
module.exports = route
const newsRoute = require('./news')
const sitesRoute = require('./site')

function route(app){
    app.use('/news',newsRoute)  
    app.use('/',sitesRoute)
}
module.exports = route
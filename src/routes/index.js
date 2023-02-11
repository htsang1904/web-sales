const homeRouter = require('./home')
const shopRouter = require('./shop')
const shop2Router = require('./shop2')
const blogRouter = require('./blog')
const siteRouter = require('./site')

function route(app) {
    app.use('/home', homeRouter);
    app.use('/blog', blogRouter);
    app.use('/shop', shopRouter);
    app.use('/shop2', shop2Router);
    app.use('/', siteRouter);
}

module.exports = route;
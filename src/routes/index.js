const siteRouter = require('./site');
const aboutRouter = require('./about');
const weatherRouter = require('./weather');

function route(app) {
    app.use('/about',aboutRouter);
    app.use('/weather',weatherRouter);
    app.use('/',siteRouter);
};

module.exports = route;
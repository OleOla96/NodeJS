
const authRouter = require('./auth.routes')
const rolesRouter = require('./roles.routes')
const crudRouter = require('./crud.routes')
const showAll = require('./show.routes')
const searchRouter = require('./search.routes')
function route(app) {
    app.use('/auth', authRouter)
    app.use('/roles', rolesRouter)
    app.use('/crud', crudRouter)
    app.use('/showall', showAll)
    app.use('/search', searchRouter)
};

module.exports = route;
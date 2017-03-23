'use strict'

const apiRouter = require('koa-router')()
const userRouter = require('./user')
const sessionRouter = require('./session')

apiRouter.use('/api/users', userRouter.routes())
apiRouter.use('/api/session', sessionRouter.routes())

module.exports = apiRouter

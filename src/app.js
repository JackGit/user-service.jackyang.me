'use strict'

const koa = require('koa')
const bodyParser = require('koa-bodyparser')
const koaLogger = require('koa-logger')
const apiRouter = require('./routers/api')
const logger = require('./logger').logger
const handleError = require('./errors')

const AV = require('leancloud-storage')
const APP_ID = process.env.APP_ID || 'oKIqR7RKOUmhfwinWOOrxkFW-gzGzoHsz'
const APP_KEY = process.env.APP_KEY || 'onqfBUfgUBqn9dJGl7GmPfGO'

const HTTP_PORT = process.env.HTTP_PORT || 8080
const app = koa()

// init AV
AV.init({ appId: APP_ID, appKey: APP_KEY })

// error handle
handleError(app)

// koa logger
app.use(koaLogger())

// body parser
app.use(bodyParser())

// routers
app.use(apiRouter.routes())

app.listen(HTTP_PORT, () => {
  logger.info('user-service is running on port ' + HTTP_PORT)
})

module.exports = app

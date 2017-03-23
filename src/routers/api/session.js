/**
 * sessionRouter is a nested router of apiRouter
 * so the path prefix is /api/session
 *
 * for exmaple: / => /api/session/
 */

'use strict'

const sessionRouter = require('koa-router')()
const sessionService = require('../../services/session')

// get session information
// sessionRouter.get('/', function *() {})

// sign in
sessionRouter.post('/', sessionService.signIn)

// sign out
sessionRouter.delete('/', sessionService.signOut)

// sign up would be new user creation, which is POST /api/users/

module.exports = sessionRouter

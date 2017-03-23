/**
 * userRouter is a nested router of apiRouter
 * so the full path prefix would be /api/users
 *
 * for example: /:userId => /api/users/:userId
 */

'use strict'

const userRouter = require('koa-router')()
const userService = require('../../services/user')

// get users
// userRouter.get('/', userService.getUserList)

// create a new user
userRouter.post('/', userService.create)

// get an user
// userRouter.get('/:userId', userService.getUser)

// update part fields of an user
userRouter.put('/:userId', userService.updatePartial)

// update whole user
// userRouter.patch('/:userId', userService.update)

// delete an user (physically)
// userRouter.delete('/:userId', userService.delete)

module.exports = userRouter

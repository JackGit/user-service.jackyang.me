'use strict'

const userAPI = require('../api/v1/user')

exports.create = function *() {
  let body = this.request.body
  let request = {
    username: body.username,
    password: body.password,
    email: body.email
  }

  this.body = yield userAPI.signUp(request)
}

exports.delete = function *() {
  // const userId = this.params.userId
  // empty
}

exports.update = function *() {
  // empty
}

exports.updatePartial = function *() {
  // empty
}

exports.getUser = function *() {
  // const userId = this.params.userId
  // empty
}

exports.getUserList = function *() {
  // const query = this.request.query
  // empty
}

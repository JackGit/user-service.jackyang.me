'use strict'

const userAPI = require('../api/v1/user')

exports.signIn = function *() {
  let username = this.request.body.username
  let password = this.request.body.password
  yield userAPI.signIn(username, password)
  this.body = ''
}

exports.signOut = function *() {
  yield userAPI.signOut()
  this.body = ''
}

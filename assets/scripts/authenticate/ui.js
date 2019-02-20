const store = require('../store.js')

const signUpSuccess = function () {
  $('#user-feedback').html('You have successfully signed up!')
  $('#sign-up').trigger('reset')
}

const signInSuccess = function (data) {
  $('#user-feedback').html('You have successfully signed in!')
  $('#sign-in').trigger('reset')
  store.user = data.user
  $('nav').removeClass('hidden')
  $('main').removeClass('hidden')
  $('section').addClass('hidden')
}

const signOutSuccess = function (data) {
  $('#user-feedback').html('You have successfully signed out!')
  $('#sign-out').trigger('reset')
  store.user = null
  $('section').removeClass('hidden')
  $('.account').addClass('hidden')
  $('main').addClass('hidden')
  $('nav').addClass('hidden')
}

const changePasswordSuccess = function () {
  $('#user-feedback').html('You have successfully changed your password!')
  $('form').trigger('reset')
}

const failure = function () {
  $('#user-feedback').html('There was an error processing your request. Please try again.')
  $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  failure
}

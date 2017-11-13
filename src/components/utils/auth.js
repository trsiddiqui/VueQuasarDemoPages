import Router from 'vue-router'
import jQuery from 'jquery'
import { serviceUris } from '../../configs/api.js'
const REFRESH_TOKEN_KEY = 'refresh_token'
const ACCESS_TOKEN_KEY = 'access_token'
const TOKEN_EXPIRING_AT_KEY = 'access_token_expiry'
const JWT_KEY = 'jwt'
const USERID_KEY = 'userId'

var router = new Router({
})

export var roles = [ 'ReleaseOrders' ]
export var userId
export function login (userId, password, to, root) {
  var user = {
    userId: userId,
    userPassword: password
  }
  // ADD THE CALL TO VERT.X TO LOGIN
  var loginUrl = serviceUris.login
  root.masterPage.showLoader()
  jQuery
    .post(loginUrl, JSON.stringify(user))
    .then(response => {
      root.masterPage.hideLoader()
      setAccessToken(response.access_token, response.expires_at, userId)
      setRefreshToken(response.refresh_token)
      setJWT(JSON.stringify(response))
      root.masterPage.loggedIn = true
      root.masterPage.name = userId
      var authenticatedPage = to
      if (to === '') {
        router.push('/')
      }
      else {
        router.push(authenticatedPage)
      }
    })
    .fail(response => {
      if (response.state() === 'rejected') {
        root.masterPage.showLoginError()
        root.masterPage.hideLoader()
      }
    })
}
export function logout (root) {
  clearRefreshToken()
  clearAccessToken()
  root.masterPage.loggedIn = false
  root.masterPage.name = ''
  router.go('/')
}
export function requireAuth (to, from, next) {
  if (!isLoggedIn()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  }
  else {
    next()
  }
}
export function getUserId () {
  return localStorage.getItem(USERID_KEY)
}
export function getRefreshToken () {
  return localStorage.getItem(REFRESH_TOKEN_KEY)
}
export function getAccessToken () {
  return localStorage.getItem(ACCESS_TOKEN_KEY)
}
function clearRefreshToken () {
  localStorage.removeItem(REFRESH_TOKEN_KEY)
}
function clearAccessToken () {
  localStorage.removeItem(ACCESS_TOKEN_KEY)
}
// function getJWT (json) {
//   localStorage.getItem(JWT_KEY)
// }
function setJWT (json) {
  localStorage.setItem(JWT_KEY, json)
}
// Get and store access_token in local storage
export function setAccessToken (accessToken, expiringAt, userId) {
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken)
  localStorage.setItem(TOKEN_EXPIRING_AT_KEY, expiringAt)
  localStorage.setItem(USERID_KEY, userId)
}
// Get and store id_token in local storage
export function setRefreshToken (refreshToken) {
  localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken)
}
export function isLoggedIn () {
  const accessToken = getAccessToken()
  if (!!accessToken && !isTokenExpired()) {
    return true
  }
  else {
    return true
  }
}
function getTokenExpirationDate () {
  const exp = localStorage.getItem(TOKEN_EXPIRING_AT_KEY)
  if (!exp) { return null }
  const date = new Date(0)
  date.setUTCSeconds(exp)
  return date
}
function isTokenExpired () {
  const expirationDate = getTokenExpirationDate()
  return expirationDate < new Date()
}

import axios from 'axios'
import { serviceUris } from './api.js'
// import { getAccessToken } from './../components/utils/auth'

export const HTTP = axios.create({
  baseURL: serviceUris.server// ,
  // headers: {
  //   Authorization: getAccessToken()
  // }
})

export function POSTAPI (url, data, success, error) {
  HTTP.post(url, JSON.stringify(data)).then(function (response) {
    if (success) {
      success(response)
    }
  }).catch(function (errorReponse) {
    console.log('Error calling "' + url + '" with data="' + JSON.stringify(data) + '". \nStack trace=' + errorReponse)
    if (error) {
      error(errorReponse)
    }
  })
}

const axiosInstanceJsonPlaceholder =
  axios.create({ baseURL: 'https://jsonplaceholder.typicode.com/' })
const axiosInstancePunk =
  axios.create({ baseURL: 'https://api.punkapi.com/v2/' })

let clients = {
  $http: {
    get () {
      return {
        jsonplaceholder: axiosInstanceJsonPlaceholder,
        punk: axiosInstancePunk
      }
    }
  }
}

export default (Vue) => {
  Object.defineProperties(Vue.prototype, clients)
}

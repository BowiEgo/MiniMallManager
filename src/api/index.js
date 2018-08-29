import axios from 'axios'

export function get(url) {
  return axios.get(url)
}

export function post(url, params) {
  console.log('params', params)
  return axios.post(url, params)
}

export function fetchCategory() {
  return get('/api/category/tree')
}

export function addCategory(params) {
  return post('/api/category/add', params)
}

export function updateCategory(params) {
  return post('/api/category/update', params)
}

export function removeCategory(params) {
  return post('/api/category/remove', params)
}

export function addGoods(params) {
  return post('/api/goods/add', params)
}

import request from '@/utils/request'

export function fetchArticles(params = null) {
  let url = 'industry-updates'
  if (params) url += '?' + params
  return request({
    method: 'GET',
    url
  })
}

export function createArticle(data) {
  return request({
    method: 'POST',
    url: 'industry-updates',
    data
  })
}

export function updateArticle(data) {
  return request({
    method: 'PATCH',
    url: 'industry-updates/' + data.id,
    data
  })
}
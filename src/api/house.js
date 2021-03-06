import request from '@/utils/request'

export function fetchLeases(params) {
  return request({
    method: 'GET',
    url: 'leases?' + params
  })
}

export function fetchSales(params) {
  return request({
    method: 'GET',
    url: 'residences?' + params
  })
}

export function fetchPropertyTypes() {
  return request({
    method: 'GET',
    url: 'property-types'
  })
}

export function fetchInspections(params = '') {
  return request({
    method: 'GET',
    url: 'inspections?' + params
  })
}

export function createLeaseHouse(data) {
  return request({
    method: 'POST',
    url: 'leases',
    data
  })
}

export function createSaleHouse(data) {
  return request({
    method: 'POST',
    url: 'residences',
    data
  })
}

export function updateLeaseHouse(data) {
  return request({
    method: 'PATCH',
    url: 'leases/' + data.id,
    data
  })
}

export function updateSaleHouse(data) {
  return request({
    method: 'PATCH',
    url: 'residences/' + data.id,
    data
  })
}

export function deleteLeaseHouse(id) {
  return request({
    method: 'DELETE',
    url: 'leases/' + id
  })
}

export function deleteSaleHouse(id) {
  return request({
    method: 'DELETE',
    url: 'residences/' + id
  })
}

export function deleteInspection(id) {
  return request({
    method: 'DELETE',
    url: 'inspections/' + id
  })
}

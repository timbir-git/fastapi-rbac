import request from '@/utils/request'

// 获取域名列表
export function getCertificate(params) {
  return request({
    url: '/certificate',
    params
  })
}

// 条件查询
export function queryCertificate(data) {
  return request({
    url: '/certificate/query',
    method: 'post',
    data
  })
}

// 删除
export function delCertificate(id) {
  return request({
    url: `/certificate/${id}`,
    method: 'delete'
  })
}

// 创建
export function addCertificate(data) {
  return request({
    url: '/certificate',
    method: 'post',
    data
  })
}

// 修改
export function putCertificate(id, data) {
  return request({
    url: `/certificate/${id}`,
    method: 'put',
    data
  })
}

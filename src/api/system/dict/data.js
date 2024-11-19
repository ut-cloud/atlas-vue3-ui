import request from '@/utils/request'

// 查询字典数据列表
export function listData(data) {
  return request({
    url: '/core/dict/data/list',
    method: 'post',
    data: data
  })
}

// 查询字典数据详细
export function getData(dictCode) {
  return request({
    url: '/core/dict/data/info/' + dictCode,
    method: 'get'
  })
}

// 根据字典类型查询字典数据信息
export function getDicts(dictType) {
  return request({
    url: '/core/dict/data/' + dictType,
    method: 'get'
  })
}

// 新增字典数据
export function addData(data) {
  return request({
    url: '/core/dict/data/save',
    method: 'post',
    data: data
  })
}

// 修改字典数据
export function updateData(data) {
  return request({
    url: '/core/dict/data/update',
    method: 'put',
    data: data
  })
}

// 删除字典数据
export function delData(dictCode) {
  return request({
    url: '/core/dict/data/delete/' + dictCode,
    method: 'delete'
  })
}

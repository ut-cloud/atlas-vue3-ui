import request from '@/utils/request'

// 查询角色列表
export function listRole(data) {
  return request({
    url: '/core/role/list',
    method: 'post',
    data: data
  })
}

// 查询角色详细
export function getRole(roleId) {
  return request({
    url: '/core/role/info/' + roleId,
    method: 'get'
  })
}

// 新增角色
export function addRole(data) {
  return request({
    url: '/core/role/save',
    method: 'post',
    data: data
  })
}

// 修改角色
export function updateRole(data) {
  return request({
    url: '/core/role/update',
    method: 'put',
    data: data
  })
}

// 角色数据权限
export function dataScope(data) {
  return request({
    url: '/core/role/dataScope',
    method: 'put',
    data: data
  })
}

// 角色状态修改
export function changeRoleStatus(roleId, status) {
  const data = {
    roleId,
    status
  }
  return request({
    url: '/core/role/changeStatus',
    method: 'put',
    data: data
  })
}

// 删除角色
export function delRole(roleId) {
  return request({
    url: '/core/role/delete/' + roleId,
    method: 'delete'
  })
}

// 根据角色ID查询部门树结构
export function deptTreeSelect(roleId) {
  return request({
    url: '/core/dept/deptTreeByRoleId/' + roleId,
    method: 'get'
  })
}

// 查询角色已授权用户列表
export function allocatedUserList(data) {
  return request({
    url: '/core/role/authUser/allocatedList',
    method: 'post',
    data: data
  })
}

// 查询角色未授权用户列表
export function unallocatedUserList(data) {
  return request({
    url: '/core/role/authUser/unallocatedList',
    method: 'post',
    data: data
  })
}

// 取消用户授权角色
export function authUserCancel(data) {
  return request({
    url: '/core/role/authUser/cancel',
    method: 'put',
    data: data
  })
}

// 批量取消用户授权角色
export function authUserCancelAll(data) {
  return request({
    url: '/core/role/authUser/cancelAll',
    method: 'put',
    data: data
  })
}

// 授权用户选择
export function authUserSelectAll(data) {
  return request({
    url: '/core/role/authUser/selectAll',
    method: 'put',
    data: data
  })
}


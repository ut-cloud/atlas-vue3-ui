import request from '@/utils/request'

// 查询菜单列表
export function listMenu(data) {
  return request({
    url: '/core/menu/list',
    method: 'post',
    data: data === undefined ? {} : data
  })
}

// 查询菜单详细
export function getMenu(menuId) {
  return request({
    url: '/core/menu/info/' + menuId,
    method: 'get'
  })
}

// 查询菜单下拉树结构
export function treeselect() {
  return request({
    url: '/core/menu/treeSelect',
    method: 'get'
  })
}

// 根据角色ID查询菜单下拉树结构
export function roleMenuTreeselect(roleId) {
  return request({
    url: '/core/menu/menuTree/' + roleId,
    method: 'get'
  })
}

// 新增菜单
export function addMenu(data) {
  return request({
    url: '/core/menu/save',
    method: 'post',
    data: data
  })
}

// 修改菜单
export function updateMenu(data) {
  return request({
    url: '/core/menu/update',
    method: 'put',
    data: data
  })
}

// 删除菜单
export function delMenu(menuId) {
  return request({
    url: '/core/menu/delete/' + menuId,
    method: 'delete'
  })
}

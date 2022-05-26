import axios from '../axios'
import { apiAgent } from '../apiAgent'
// 左侧树形菜单
export function findMenuTree() {
  return axios({
    url: `/home/menuTree`,
    method: 'GET'
  })
}
// 左侧树形菜单
export function findMenuTreeSideBar() {
  return axios({
    url: `/home/menuTreeWithoutButton`,
    method: 'GET'
  })
}
// 角色拥有的资源，列表结构
export function findMenuList() {
  return axios({
    url: '/home/menuList',
    method: 'GET'
  })
}

import axios from '../axios'
import { apiAgent } from '../apiAgent'

// 登录页面获取图片验证码-获取验证码实体
export function getImgCode() {
  return axios({
    url: '/captcha/render',
    method: 'get'
  })
}
// 登录
export function login(data) {
  return axios({
    url: '/login',
    method: 'post',
    data
  })
}

// 角色拥有的权限，列表结构
export function getPermissionList() {
  return axios({
    url: '/home/getPermission',
    method: 'GET'
  })
}

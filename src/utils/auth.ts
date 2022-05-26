import Cookies from 'js-cookie'

const TokenKey = 'token'

export function getToken() {
  return sessionStorage.getItem(TokenKey)
}

export function setToken(token: string) {
  return sessionStorage.setItem(TokenKey, token)
}

export function removeToken() {
  return sessionStorage.removeItem(TokenKey)
}

//判断当前时间是否超过token过期时间
export function isTokenExpire(serverTokenExpire: number) {
  return getUTCTime(new Date()) >= getUTCTime(new Date(serverTokenExpire))
}
// 获取UTC时间
export function getUTCTime(now: Date) {
  let year = now.getUTCFullYear()
  let month = now.getUTCMonth()
  let date = now.getUTCDate()
  let hours = now.getUTCHours()
  let minutes = now.getMinutes()
  let seconds = now.getUTCSeconds()
  let ms = now.getUTCMilliseconds()
  return Date.UTC(year, month, date, hours, minutes, seconds, ms)
}

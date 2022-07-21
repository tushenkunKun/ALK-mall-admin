/* 获取本地存储数据 */
export function localGet(key) {
  const value = window.localStorage.getItem(key)
  try {
    return JSON.parse(window.localStorage.getItem(key))
  } catch (error) {
    return value
  }
}
/* 添加本地存储 */
export function localSet (key,value) {
  window.localStorage.setItem(key,JSON.stringify(value))
}
/* 删除本地存储 */
export function localRemove (key) {
  window.localStorage.removeItem(key)
}
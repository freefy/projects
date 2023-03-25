import { get, reUrl } from '../config'
console.log(get, 'get')
// 获取菜单栏
export default {
    getMes: (params) => get(`${reUrl}getMes/`, params)
}

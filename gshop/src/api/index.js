import ajax from './ajax'
const BASE_URL="/api"
// 相关的接口请求函数

// params参数  localhost:4000/position
export const reqAddress=(geohash)=> ajax(`${BASE_URL}/position/${geohash}`)
// query参数   localhost:4000/shops 
export const reqShop=({latitude,longitude})=>ajax(`${BASE_URL}/shops`,{latitude,longitude})
// 无参数      localhost:4000/index_category
export const reqShoplist=()=>ajax(`${BASE_URL}/index_category`)
// 搜索商铺
export const reqSearchShop=({geohash,keyword})=>ajax(`${BASE_URL}/search_shops`,{geohash,keyword})


// 账户密码登入
export const reqPwd=({name,pwd,captcha})=>ajax(`${BASE_URL}/login_pwd`,{name,pwd,captcha},'POST')
// 手机登入
export const reqSms=({phone,code})=>ajax(`${BASE_URL}/login_sms`,{phone,code},'POST')
// 发送短信
export const reqPhone=(phone)=>ajax(`${BASE_URL}/sendcode`,{phone})
// 根据会话获取用户信息
export const reqUserInfo=()=>ajax(`${BASE_URL}/userinfo`)
// 用户退出
export const reqLogOut=()=>ajax(`${BASE_URL}/logout`)

export const reqInfo=()=>ajax('/info')
export const reqGoods=()=>ajax('/goods')
// 获取商家评论
export const reqRatings=()=>ajax('/ratings')
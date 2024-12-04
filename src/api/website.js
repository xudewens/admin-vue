import request from '@/api'

// 登录
export function login(data) {
  return request({
    url: '/member/login',
    method: 'post',
    data
  })
}

// 注册
export function register(data) {
  return request({
    url: '/member/register',
    method: 'post',
    data
  })
}

// 会员中心
export function memberCenter(data) {
  return request({
    url: '/member/index',
    method: 'post',
    data
  })
}

// 网站信息
export function webSiteInfo(data) {
  return request({
    url: '/webSite/info',
    method: 'post',
    data
  })
}

// 商品搜索
export function goodsSearch(data) {
  return request({
    url: '/goods/search',
    method: 'post',
    data
  })
}

// 商品详情
export function goodsDetails(data) {
  return request({
    url: '/goods/details',
    method: 'post',
    data
  })
}

// 交易记录-列表
export function orderList(data) {
  return request({
    url: '/order/list',
    method: 'post',
    data
  })
}

// 交易记录-详情
export function orderDetails(data) {
  return request({
    url: '/order/details',
    method: 'post',
    data
  })
}

// 更新用户信息
export function updateUserInfo(data) {
  return request({
    url: '/member/update',
    method: 'post',
    data
  })
}

// 修改密码
export function upDatePassword(data) {
  return request({
    url: '/member/update/password',
    method: 'post',
    data
  })
}

// topUp下单
export function topUp(data) {
  return request({
    url: '/order/v2/topUp',
    method: 'post',
    data
  })
}

// 验证码发送接口
export function sendEmailCode(data) {
  return request({
    url: '/member/sendEmailCode',
    method: 'post',
    data
  })
}

// 验证码登录
export function v2_login(data) {
  return request({
    url: '/member/v2/login',
    method: 'post',
    data
  })
}

// 校验获取code
export function emailVerifyKey(data) {
  return request({
    url: '/member/emailVerifyKey',
    method: 'post',
    data
  })
}
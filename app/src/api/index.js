/*
 * @Author: czqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-04-23 17:02:24
 * @LastEditors: czqzzzzzz(czq)
 * @LastEditTime: 2023-05-31 16:32:09
 * @FilePath: /尚硅谷VUE项目实战——尚品汇/app/src/api/index.js
 * @Description: 对API接口进行统一管理
 * 
 * Copyright (c) 2023 by czqzzzzzz(czq), All Rights Reserved. 
 */
// 当前模块，所有的API接口进行统一管理
import requests from "./request";
import mockRequests from './mockAjax'

/**
 * @description: 三级联动菜单的接口 是get请求 无参数
 * @url /api/product/getBaseCategoryList 
 * @return {Object: Promise}
 */
export const reqGetCategoryList = () => {
    // 发请求：axios发请求返回的结果是Promise对象
    // 必须把服务器响应的数据返回供其他组件和模块使用
    return requests({
        method: 'GET',
        url: '/product/getBaseCategoryList', 
    })
}

/**
 * @description: 首页轮播图的接口 是get请求 无参数
 * @url /mock/banner
 * @return {Object: Promise}
 */
export const reqGetBannerList = () => {
    return mockRequests({
        method: 'GET',
        url: '/banner'
    })
}

/**
 * @description: 首页下层“家用电器”、“手机通讯”接口 是get请求 无参数
 * @url /mock/floor
 * @return {Object: Promise}
 */
export const reqGetFloorList = () => {
    return mockRequests({
        method: 'GET',
        url: '/floor'
    })
}

/**
 * @description: 获取搜索模块数据 是post请求，需要带参数
 * @url /api/list
 * @param {*} params 至少是一个空对象 里面的参数可传可不传 参数示例:
 * {
    "category3Id": "61",
    "categoryName": "手机",
    "keyword": "小米",
    "order": "1:desc",
    "pageNo": 1,
    "pageSize": 10,
    "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
    "trademark": "4:小米"
    }
 * @return {Object: Promise}
 */
export const reqGetSearchInfo = (params) => {
    return requests({
        method: 'POST',
        url: '/list',
        data: params // 当前这个接口给服务器传递一个默认参数（params至少得是一个空对象 否则返回失败）
    })
}

/**
 * @description: 在搜索列表时点击具体商品获取商品详情时请求数据 是get请求 需要带参数 
 * @url `/item/${skuId}`
 * @param {*} skuId 从goodsList获取的产品Id
 * @return {Object: Promise}
 */
export const reqGetGoodInfo = (skuId) => {
    return requests({
        method: 'GET',
        url: `/item/${skuId}`
    })
}

/**
 * @description: 将产品添加到购物车中或更新某一个产品的个数 是post请求 需要带参数
 * @url `/cart/addToCart/${skuId}/${skuNum}`
 * @param {*} skuId 被操作的商品Id
 * @param {*} skuNum 商品数量 正数代表增加 负数代表减少
 * @return {Object: Promise}
 */
export const reqGetAddOrUpdateShopCart = (skuId, skuNum) => {
    return requests({
        method: 'POST',
        url: `/cart/addToCart/${skuId}/${skuNum}`
    })
}

/**
 * @description: 获取购物车列表数据接口 是get请求 无参数
 * @url /cart/cartList
 * @return {Object: Promise}
 */
export const reqGetCartList = () => {
    return requests({
        method: 'GET',
        url: '/cart/cartList'
    })
}

/**
 * @description: 删除购物车中的商品 是delete请求 需要带参数
 * @url `cart/deleteCart/${skuId}`
 * @param {*} skuId 所操作的那个商品的id
 * @return {Object: Promise}
 */
export const reqDeleteCartBySkuId = (skuId) => {
    return requests({
        method: 'DELETE',
        url: `cart/deleteCart/${skuId}`
    })
}

/**
 * @description: 修改购物车中商品的选中状态 是get请求 需要带参数
 * @url `/cart/checkCart/${skuId}/${isChecked}`
 * @param {*} skuId 所操作的那个商品的id
 * @param {*} isChecked 所选中商品的勾选状态
 * @return {Object: Promise}
 */
export const reqUpdateCartCheckedById = (skuId, isChecked) => {
    return requests({
        method: 'GET',
        url: `/cart/checkCart/${skuId}/${isChecked}`
    })
}

/**
 * @description: 获取验证码 是get请求 需要带参数
 * @url `/user/passport/sendCode/${phone}`
 * @param {String} phone  用户输入的手机号
 * @return {Object: Promise}
 */
export const reqGetCode = (phone) => {
    return requests({
        method: 'GET',
        url: `/user/passport/sendCode/${phone}`
    })
}

/**
 * @description: 注册用户 是post请求 需要带参数
 * @url user/passport/register
 * @param {Object} userInfo 包含用户手机、用户密码以及服务器返回来的验证码的对象
 * @return {Object: Promise}
 */
export const reqUserRegister = (userInfo) => {
    return requests({
        method: 'POST',
        url: 'user/passport/register',
        data: userInfo
    })
}

/**
 * @description: 用户登录 是post请求 需要带参数
 * @param {*} userLoginInfo 用户登录所带的信息对象 包括用户名 密码
 * @return {Object: Promise}
 */
export const reqUserLogin = (userLoginInfo) => {
    return requests({
        method: 'POST',
        url: '/user/passport/login',
        data: userLoginInfo
    })
}

/**
 * @description: 获取用户登录后的信息 需要带着用户的token向服务器索要用户信息（放在了请求头里） 是get请求 不需要带参数
 * @url /user/passport/auth/getUserInfo
 * @return {Object: Promise}
 */
export const reqUserInfo = () => {
    return requests({
        method: 'GET',
        url: '/user/passport/auth/getUserInfo'
    })
}

/**
 * @description: 退出登录 是get请求 不需要带参数
 * @url /user/passport/logout
 * @return {Object: Promise}
 */
export const reqUserLogout = () => {
    return requests({
        method: 'GET',
        url: '/user/passport/logout'
    })
}

/**
 * @description: 获取登录后用户地址信息 是get请求 不需要带参数
 * @url /user/userAddress/auth/findUserAddressList
 * @return {Object: Promise}
 */
export const reqFindUserAddressList = () => {
    return requests({
        method: 'GET',
        url: '/user/userAddress/auth/findUserAddressList'
    })
}

/**
 * @description: 获取结算界面商品清单 是get请求 不需要带参数
 * @url /order/auth/trade
 * @return {Object: Promise}
 */
export const reqGetOrderInfo = () => {
    return requests({
        method: 'GET',
        url: '/order/auth/trade'
    })
}

/**
 * @description: 提交订单 是post请求 需要带参数
 * @url `/order/auth/submitOrder?tradeNo=${tradeNo}`
 * @param {*} tradeNo 拼接在路径上的交易编号
 * @param {*} data 带给服务器的数据 里面包含收件人信息、商品信息
 * @return {Object: Promise}
 */
export const reqSubmitOrder = (tradeNo, data) => {
    return requests({
        method: 'POST',
        url: `/order/auth/submitOrder?tradeNo=${tradeNo}`,
        data
    })
}

/**
 * @description: 获取支付信息 是get请求 需要带参数
 * @url `/payment/weixin/createNative/${orderId}`
 * @param {*} orderId 通过提交订单得到的支付订单ID
 * @return {Object: Promise}
 */
export const reqGetPayInfo = (orderId) => {
    return requests({
        method: 'GET',
        url: `/payment/weixin/createNative/${orderId}`
    })
}

/**
 * @description: 获取支付订单状态 是get请求 需要带参数
 * @url `/payment/weixin/queryPayStatus/${orderId}`
 * @param {*} orderId 通过提交订单得到的支付订单ID
 * @return {Object: Promise}
 */
export const reqPayStatus = (orderId) => {
    return requests({
        method: 'GET',
        url: `/payment/weixin/queryPayStatus/${orderId}`
    })
}

/**
 * @description: 获取个人中心的数据 是get请求 需要带参数
 * @url `/order/auth/${page}/${limit}`
 * @param {String} page 页码
 * @param {String} limit 每页显示的数量
 * @return {Object: Promise}
 */
export const reqGetMyOrderList = (page, limit) => {
    return requests({
        method: 'GET',
        url: `/order/auth/${page}/${limit}`
    })
}
/*
 * @Author: czqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-04-23 17:02:24
 * @LastEditors: czqzzzzzz(czq)
 * @LastEditTime: 2023-04-23 17:45:20
 * @FilePath: /尚硅谷VUE项目实战——尚品汇/app/src/main.js
 * @Description: 整个应用的入口文件
 * 
 * Copyright (c) 2023 by czqzzzzzz(czq), All Rights Reserved. 
 */
import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from '@/router'
// 三级联动组件---全局组件
import TypeNav from '@/pages/Home/TypeNav'
// 第一个参数：全局组件的名字 第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav)

// 关闭Vue生产提示
Vue.config.productionTip = false

// 测试
import { reqCategoryList } from "@/api";
reqCategoryList()


new Vue({
  render: h => h(App),
  // 注册路由 以下的写法是key-value一致省略value
  router
}).$mount('#app')

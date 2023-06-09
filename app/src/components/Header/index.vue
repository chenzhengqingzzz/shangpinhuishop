<!--
 * @Author: czqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-04-23 17:02:24
 * @LastEditors: 陈正清MacPro
 * @LastEditTime: 2023-05-31 21:50:52
 * @FilePath: /shangpinhuishop/app/src/components/Header/index.vue
 * @Description: 全局组件——头部(Header)
 * 
 * Copyright (c) 2023 by czqzzzzzz(czq), All Rights Reserved. 
-->
<template>
  <!-- 头部 -->
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>尚品汇欢迎您！</p>
          <!-- 没有用户名，表示未登录 则显示这个标签 -->
          <p v-if="!userName">
            <span>请</span>
            <!-- 只是跳过去，没有别的业务，可以用声明式导航 -->
            <router-link to="/login">登录</router-link>
            <router-link class="register" to="/register">免费注册</router-link>
          </p>
          <!-- 有用户名 表示已登录 则显示这个标签 -->
          <p v-else>
            <a>{{userName}}</a>
            <a class="register" @click="logout">退出登录</a>
          </p>
        </div>
        <div class="typeList">
          <router-link to="/center/myorder">我的订单</router-link>
          <router-link to="/shopcart">我的购物车</router-link>
          <a href="###">我的尚品汇</a>
          <a href="###">尚品汇会员</a>
          <a href="###">企业采购</a>
          <a href="###">关注尚品汇</a>
          <a href="###">合作招商</a>
          <a href="###">商家后台</a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <router-link class="logo" title="尚品汇" to="/home">
          <img src="./images/logo.png" alt="" />
        </router-link>
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm">
          <input
            type="text"
            id="autocomplete"
            class="input-error input-xxlarge"
            v-model="keyword"
          />
          <button
            class="sui-btn btn-xlarge btn-danger"
            type="button"
            @click="goSearch"
          >
            搜索
          </button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "Header",
  data() {
    return {
      keyword: "",
    };
  },
  mounted() {
    // 监听全局事件总线以清除关键字
    this.$bus.$on('clearKeyword', () => {
      this.keyword = ''
    })
  },
  methods: {
    /**
     * @description: 搜索按钮的回调函数，需要向Search路由进行跳转
     * @return {*}
     */
    goSearch() {
      // 路由传递参数：
      // 第一种：字符串形式
      // this.$router.push('/search/' + this.keyword + '?k=' + this.keyword.toUpperCase())
      // 第二种：模板字符串
      // this.$router.push(`/search/${this.keyword}?k=${this.keyword.toUpperCase()}`)
      // 第三种：对象写法
      // 如果有query参数 则也带过去
      if (this.$route.query) {
        let location = {
          name: "Search",
          params: {
            keyword: this.keyword || undefined,
          },
        };
        location.query = this.$route.query;
        this.$router.push(location);
      }

      // -------------------------------------------------------------------------------------------------
      // 面试题1：路由传递参数（对象写法）path是否可以结合params参数一起使用？
      // 答：路由跳转传参的时候，对象的写法可以使name、path形式，但是需要注意的是：path这种写法是不能与params参数一起使用
      // this.$router.push({
      //   path: '/search',
      //   params: {keyword: this.keyword},
      //   query: {k: this.keyword.toUpperCase()}
      // })

      // 面试题2：如何指定params参数可传可不传？
      // 如果路由要求传递params参数，我们不传，就会发现URL有问题
      // 答：如何指定params参数可传可不传？ --在配置路由的时候，在占位的后面加上一个问号
      // this.$router.push({
      //   name: 'Search',
      //   query: {k: this.keyword.toUpperCase()}
      // })

      // 面试题3：params参数可传也可不传，但是如果传递的是空串，如何解决？
      // 答：使用undefined解决：params参数可传可不传（空的字符串）
      // this.$router.push({
      //   name: 'Search',
      //   params: {keyword: '' || undefined},
      //   query: {k: this.keyword.toUpperCase()}
      // })

      // 面试题4：路由组件能否传递props数据？
      // 答：可以，有三种写法，需要在路由器中配置
      // this.$router.push({
      //   name: 'Search',
      //   params: {keyword: '' || undefined},
      //   query: {k: this.keyword.toUpperCase()}
      // })
    },

    /**
     * @description: 点击退出登录按钮的回调
     * @return {*}
     */
    async logout(){
      // 退出登录需要做的事情：
      // 1. 需要发请求，通知服务器退出登录【清除一些数据：服务器中的token】
      // 2. 清除项目当中的数据【在前端的userInfo、token】
      try {
        // 如果退出成功
        await this.$store.dispatch('user/userLogout')
        // 回到首页
        this.$router.push('/home')
      } catch (error) {
        alert(error)
      }
    }
  },
  computed: {
    /**
     * @description: 用户在登录之后需要展示的用户名信息 
     * @return {*}
     */
    userName(){
      // 捞取vuex仓库中的数据
      return this.$store.state.user.userInfo.name
    },
    // 简便写法：
    // ...mapState('user', {
    //   userName: state => state.userInfo.name
    // })
  }
};
</script>

<style scoped lang="less">
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>

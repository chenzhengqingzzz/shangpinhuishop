"use strict";(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[264],{5264:function(e,r,t){t.r(r),t.d(r,{default:function(){return c}});var a=function(){var e=this,r=e._self._c;return r("div",{staticClass:"register-container"},[r("div",{staticClass:"register"},[e._m(0),r("el-form",{ref:"formData",staticClass:"content",attrs:{rules:e.rules,model:e.formData,"status-icon":"","label-width":"80px"}},[r("el-form-item",{attrs:{label:"手机号",prop:"phone"}},[r("el-input",{attrs:{placeholder:"请输入手机号",autocomplete:"off"},model:{value:e.formData.phone,callback:function(r){e.$set(e.formData,"phone",r)},expression:"formData.phone"}})],1),r("el-form-item",{attrs:{label:"验证码",prop:"code"}},[r("el-input",{attrs:{placeholder:"请输入验证码",autocomplete:"off"},model:{value:e.formData.code,callback:function(r){e.$set(e.formData,"code",r)},expression:"formData.code"}}),e._v("   "),r("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.getCode}},[e._v("获取验证码")])],1),r("el-form-item",{attrs:{label:"登录密码",prop:"password"}},[r("el-input",{attrs:{type:"password",placeholder:"请输入登录密码",autocomplete:"off"},model:{value:e.formData.password,callback:function(r){e.$set(e.formData,"password",r)},expression:"formData.password"}})],1),r("el-form-item",{attrs:{label:"确认密码",prop:"confirmPassword"}},[r("el-input",{attrs:{type:"password",placeholder:"确认密码",autocomplete:"off"},model:{value:e.formData.confirmPassword,callback:function(r){e.$set(e.formData,"confirmPassword",r)},expression:"formData.confirmPassword"}})],1),r("el-form-item",{attrs:{prop:"agree"}},[r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-text":"已阅读并同意《尚品汇用户协议》"},model:{value:e.formData.agree,callback:function(r){e.$set(e.formData,"agree",r)},expression:"formData.agree"}})],1),r("div",{staticClass:"button-container"},[r("el-button",{attrs:{type:"warning",round:""},on:{click:function(r){return e.resetForm("formData")}}},[e._v("重置注册信息")]),r("el-button",{attrs:{type:"success",round:""},on:{click:function(r){return e.userRegister("formData")}}},[e._v("完成注册")])],1)],1)],1),e._m(1)])},s=[function(){var e=this,r=e._self._c;return r("h3",{staticClass:"title"},[e._v(" 注册新用户 "),r("span",{staticClass:"go"},[e._v("我有账号，去 "),r("a",{attrs:{href:"login.html",target:"_blank"}},[e._v("登陆")])])])},function(){var e=this,r=e._self._c;return r("div",{staticClass:"copyright"},[r("ul",[r("li",[e._v("关于我们")]),r("li",[e._v("联系我们")]),r("li",[e._v("联系客服")]),r("li",[e._v("商家入驻")]),r("li",[e._v("营销中心")]),r("li",[e._v("手机尚品汇")]),r("li",[e._v("销售联盟")]),r("li",[e._v("尚品汇社区")])]),r("div",{staticClass:"address"},[e._v("地址：北京市昌平区宏福科技园综合楼6层")]),r("div",{staticClass:"beian"},[e._v("京ICP备19006430号")])])}],o=(t(7658),{name:"Register",data(){var e=(e,r,t)=>{""===r?t(new Error("请输入密码")):r.length>16||r.length<6?t(new Error("请输入6~16位的字符")):(""!==this.formData.confirmPassword&&this.$refs.formData.validateField("confirmPassword"),t())},r=(e,r,t)=>{""===r?t(new Error("请再次输入密码")):r!==this.formData.password?t(new Error("两次输入密码不一致!")):t()},t=(e,r,t)=>{0==r?t(new Error("请同意用户协议")):t()};return{formData:{phone:"",code:"",password:"",confirmPassword:"",agree:!0},rules:{phone:[{required:!0,message:"请输入手机号",trigger:"blur"},{min:11,max:11,message:"手机号必须为11个字符",trigger:"blur"},{type:"number",message:"手机号必须为数字"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"},{min:6,max:6,message:"验证码必须为6个字符",trigger:"blur"},{type:"number",message:"验证码必须为数字"}],password:[{required:!0,validator:e,trigger:"blur"}],confirmPassword:[{required:!0,validator:r,trigger:"blur"}],agree:[{required:!0,validator:t,trigger:"change"}]}}},methods:{async getCode(){try{const{phone:e}=this.formData;e&&await this.$store.dispatch("user/getCode",this.formData.phone),this.formData.code=this.$store.state.user.code}catch(e){alert(e)}},userRegister(e){const{phone:r,code:t,password:a}=this.formData;this.$refs[e].validate((s=>{if(!s)return!1;this.$store.dispatch("user/userRegister",{phone:r,code:t,password:a}).then((e=>{alert("注册成功，请尽快登录吧！"),this.$router.push("/login")})).catch((r=>{this.resetForm(e),alert(r)}))}))},resetForm(e){this.$refs[e].resetFields()}}}),i=o,l=t(1001),n=(0,l.Z)(i,a,s,!1,null,"5ba7af77",null),c=n.exports}}]);
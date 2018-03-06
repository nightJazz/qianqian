// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// console.log(router);
Vue.config.productionTip = false
import ElementUI from 'element-ui'
//插件的样式
import 'element-ui/lib/theme-chalk/index.css'

//引入主组件app.vue


// 导入编译CSss
import 'normalize.css'

import api,{ domain } from './js/api.js'
//不是vue插件 ，导入之后只能在当前模块使用
//如果需要全局使用，需要把它放进原型
import axios from 'axios'

//引入les文件
import './less/index.less'
import './assets/css/style.css'
// axios.get(domain + api.logout).then(()=>console.log('登出'));

// 配置默认域名, 这样请求的时候就不用在url里加域名了
axios.defaults.baseURL = domain;
// 我们是跨域请求的接口, 默认不会携带cookie等信息, 后端需要这些信息来判断登陆状态, 所以要设为true
//因为调用的接口跨域了，默认情况下接口设置cokie无效
//为了有效，需要设置这一步
axios.defaults.withCredentials=true;

//为了使用方便  把axios和api添加到vue原型，vue组件直接使用
Vue.prototype.$http = axios;
Vue.prototype.$api =api


Vue.use(ElementUI)
// new Vue({
//     el:'#app',
//     router,
//     render: creaeElement => creaeElement(App)
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

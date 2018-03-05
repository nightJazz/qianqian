import Vue from 'vue'
import Router from 'vue-router'


//导入路由的vue文件
import Login from '../components/account/login/Login'
import Shop from '../components/shop/Shop'

//导入小路由的路径
import List from '../components/shop/goods/List'
import Detail from '../components/shop/goods/Detail'

import Site from '../components/shop/order/Site'
import Pay from '../components/shop/order/Pay'
import Complete from '../components/shop/order/Complete'

import Shopcart from '../components/shop/shopcart/shopcart'

Vue.use(Router)
//导入路由小组件
//商品列表和详情
let Goods = [
  {name:'list',path:'goods/list',component:List},
  {name:'detail',path:'goods/detail/:id',component:Detail},
]

//购物部分
let Order =[
  {name:'site',path:'order/site/:ids',component:Site},
  {name:'pay',path:'order/pay/:id',component:Pay},
  {name:'complete',path:'order/complete',component:Complete}
]
//购物车
let Shopcarts =[
  {name:'shopcart',path:'shopcart',component:Shopcart}
]

export default new Router({
    routes:[
      {name:'login',path:'/login',component:Login},
      {name:'shop',path:'/',component:Shop,children:[...Goods,...Order,...Shopcarts]
    }]
  })

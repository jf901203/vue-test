import Vue from 'vue'
import Router from 'vue-router'


// import Miste from 'views/Miste/Miste'
// import Login from 'views/Login/Login'
// import Order from 'views/Order/Order'
// import Profile from 'views/Profile/Profile'
// import Shop from 'views/Shop/Shop'
// import Search from 'views/Search/Search'

// 路由组件懒加载 封装成一个函数 并返回一个函数 当调用路由的时候就执行函数  
// 这是执行函数定义 并不是执行函数  执行函数在函数调用的时候才执行函数
// 请求路由路劲的才会执行对象的组件函数
// 拆分代码
const Miste=()=>import('views/Miste/Miste')
const Login=()=>import('views/Login/Login')
const Order=()=>import('views/Order/Order')
const Profile=()=>import('views/Profile/Profile')
const Search=()=>import('views/Search/Search')
const Shop=()=>import('views/Shop/Shop')

import ShopGoods from 'views/shop/Shopgoods/Shopgoods'
import ShopRatings from 'views/shop/ShopRatings/ShopRatings.vue'
import ShopInfo from 'views/shop/ShopInfo/ShopInfo'
import SearchFood from 'views/Search/SearchFood/SearchFood'

Vue.use(Router)

export default new Router({
  routes: [
      
      {
        path:'/profile',
        component:Profile,
        meta: { requiresAuth: true }
      },
      {
        path:'/miste',
        component:Miste,
        meta: { requiresAuth: true }
      },
      {
        path:'/order',
        component:Order,
        meta: { requiresAuth: true }
      },
      {
        path:'/shop',
        component:Shop,
        meta: { requiresAuth: false },
        children:[
          {
            path:'/shop/good',
            component:ShopGoods
          },
          {
            path:'/shop/rating',
            component:ShopRatings
          },
          {
            path:'/shop/info',
            component:ShopInfo
          },
          {
            path:'/',
            redirect:'/shop/good'
          }
        ]
      },
      {
        path:'/search',
        component:Search,
        meta: { requiresAuth: true },
      },
      {
        path:'/describe',
        component:SearchFood
      },
      {
        path:'/login',
        component:Login,
        meta: { requiresAuth: false }
      },
      {
        path:'/',
        redirect:'/miste'
      }
    
  ]
})

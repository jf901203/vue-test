
/*
路由器模块
*/
import Vue from 'vue'
import Router from 'vue-router'
import About from 'views/About'
import Home from 'views/Home'
import News from 'views/News'
import Message from 'views/Message'
import MessageDetal from 'views/MessageDetal'
Vue.use(Router)

// 向外暴露路由器对象

export default new Router({
  routes: [ //n个路由 数组中的每一个元素都代表一个路由
    {
     path:'/about',
     component:About
    },
    {
     path:'/home',   
     component:Home,
     children:[
      {
        //path:'/mes', //path最左侧的 / 永远代表根路劲 不对
        //path:'/home/mes', //完整写法 http://localhost:8080/#/home/mes
        path:'mes', //简化写法   
        component:Message,
        children:[
         {  
          // 占位路由  :   参数是params请求   http://localhost:8080/#/home/mes/detal/5
            path:'/home/mes/detal/:id',
            component:MessageDetal
         }
        ]
      },
      {
        path:'news',
        component:News
      },
      {
        path:'', //代表当前
        redirect:'news'
      }
     ]
    },
    { //当请求的是根路由的时候 重定向请求about路由
      path:'/',
      redirect:'/about'
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home'
import City from '../pages/city/City'

// 注册router
Vue.use(Router)

// 路由

export default new Router ({
    routes:[
        {
            path: '/',
            name: 'home',
            component: Home
          },
          {
            path: '/city',
            name: 'city',
            component: City
          }
    ]
})
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home'
import City from '../pages/city/City'
import Info from '../pages/info/Info'
import CommentCom from '../pages/comment/Comment'
import Raider from '../pages/raiders/Raider'
import Note from '../pages/note/Note.vue'
import WenDa from '../pages/wenda/Wenda'
import Friend from '../pages/friend/Friend'
import Hotel from '../pages/hotel/Hotel'
import Sales from '../pages/sales/Sales'


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
          },
          {
            path: '/info/:id',
            name: 'info',
            component: Info
          },
          {
            path: '/comment/:id',
            name: 'comment',
            component: CommentCom
          },
          {
            path:'/raider',
            name:'raider',
            component:Raider
          },
          {
            path:'/note',
            name:'note',
            component:Note
          },
          {
            path:'/wenda',
            name:'wenda',
            component:WenDa
          } ,         
          {
            path:'/friend',
            name:'friend',
            component:Friend
          } ,       
          {
            path:'/hotel',
            name:'hotel',
            component:Hotel
          }  ,     
          {
            path:'/sales',
            name:'sales',
            component:Sales
          }       
               
    ]
})
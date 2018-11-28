import Vue from 'vue'
import App from './App.vue'
import store from './store/Store'
import router from './router/router'
import fastClick from 'fastclick'
import './assets/styles/border.css'
import './assets/styles/reset.css'
import './assets/styles/iconfont.css'
import "mint-ui/lib/style.css"

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

// 点击延迟
fastClick.attach(document.body)

import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

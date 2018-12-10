import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = '北京'
let defaultId = 1
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
    defaultId = localStorage.id
  }
} catch (e) {
  console.log("在本地存储中没");
}

export default new Vuex.Store({

  state: {
    city: defaultCity,
    id: defaultId
  },
  mutations: {

    changeCity(state, city) {
      state.city = city.name
      state.id = city.id
      try {
        localStorage.city = city.name
        localStorage.id = city.id
      } catch (e) {
        console.log("在本地存储中没");

      }
    }

  }
})
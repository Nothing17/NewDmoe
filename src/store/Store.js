import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      city: '北京',
      id: '1'
  },
  mutations: {
    changeCity (state,city) {
      state.city = city.name
      state.id = city.id
    }

  }
})

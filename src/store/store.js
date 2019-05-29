import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  isShow: false,
  // 存储token
  Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
}

const getters = {
  isShowMethod (state) {
    return state.isShow
  }
}

const actions = {
  showSideBar ({commit}) {
    commit('showBar')
  },
  hideSideBar ({commit}) {
    commit('hideBar')
  }
}

const mutations = {
  showBar (state) {
    state.isShow = true
  },
  hideBar (state) {
    state.isShow = false
  },
  // 修改token，并将token存入localStorage
  changeLogin (state, user) {
    state.Authorization = user.Authorization
    localStorage.setItem('Authorization', user.Authorization)
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    article:[],
    editid:{ bgImgUrl:"",title: "", createTime: "", description: "", textContent: null },//栏目所要编辑的行id
    columnid:0,
    total:0,
    flag:1
  
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

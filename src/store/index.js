import { createStore } from 'vuex'

export default createStore({
  state: { 
    data:{}
  },
  getters: {
    getData: (state)=>state.data
  },
  mutations: {
    updateData:(state,newState)=>{
      state.data=newState
    }
  },
  actions: {
    updateData:({commit}, newState)=>{
      commit('updateData',newState)
    }
  },
  modules: {

  }
})

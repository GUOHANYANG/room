import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
       userInfo:{}
    },
    mutations:{
        keepUserInfo(state,user){
           state.userInfo = user
        }
    },
    actions:{
        holdUser({commit},user){
            commit('keepUserInfo',user)
        }
    }
}) 
export default store

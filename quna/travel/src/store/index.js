import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

// actions: {
//     changeCity (ctx, city) {
//         ctx.commit('changeCity', city)
//     }
// },

export default new Vuex.Store({
    state,
    mutations,
})

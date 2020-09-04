import Vue from 'vue'
import Vuex from 'vuex'

import {phoneState} from './phoneState.js'

Vue.use(Vuex)
//注意：新增state时要增加一个clear的mutation放到setPage的清理缓存方法中
const store = new Vuex.Store({
  strict: process.env.NODE_ENV != 'production',
  modules:{
    phoneState: phoneState,
  }
})

export default store

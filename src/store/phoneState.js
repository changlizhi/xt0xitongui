import {
  mutationNames
} from './mutationNames.js'
export const phoneState = {
  state: {
    phoneInfo: {}
  },
  mutations: {
    [mutationNames.setPhoneState](state, phoneInfo) {
      if (phoneInfo) {
        state.phoneInfo = phoneInfo
      }
    }

  },
}

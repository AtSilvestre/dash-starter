import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth'
import global from './global'

export const strict = false

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      auth,
      global
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    // strict: process.env.DEV
    strict: false
  })

  return Store
}

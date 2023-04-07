// 初始化一个vuex的实例（数据仓库） 导出即可
import Vuex from 'vuex'
import Vue from 'vue'

// 使用安装
Vue.use(Vuex)

// 初始化
const store = new Vuex.Store({
  state: {
    rollValue: 1,
    pageClassName: 'class-name-1'
  },
  mutations: {
    pageDown (state) {
      if (state.rollValue < 8) {
        console.log('11')
        state.rollValue = state.rollValue + 1
        state.pageClassName = `class-name-${state.rollValue}`
      } else {
        state.rollValue = 8
      }
    },
    pageUp (state) {
      if (state.rollValue > 1) {
        state.rollValue = state.rollValue - 1
        state.pageClassName = `class-name-${state.rollValue}`
      } else {
        state.rollValue = 1
      }
    },
    pageJumps (state, payload) {
      state.rollValue = payload
      state.pageClassName = `class-name-${state.rollValue}`
    }
  }

})

export default store

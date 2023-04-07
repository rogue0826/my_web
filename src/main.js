import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'
import Antd from 'ant-design-vue'
import VueClipboard from 'vue-clipboard2'


import './assets/font/iconfont.css'
import './css/base.css'
import 'ant-design-vue/dist/antd.css'


Vue.use(VueClipboard)
Vue.use(Antd)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

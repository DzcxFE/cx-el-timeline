import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'

import '@/styles/base.css'
import '@/styles/ele.scss'
import '@/styles/common.scss'
import '@/styles/layout.scss'
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

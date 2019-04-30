import Vue from 'vue'
import App from './App.vue'
import setup from './setup'

Vue.config.productionTip = false

setup()

new Vue({
  render: h => h(App)
}).$mount('#app')

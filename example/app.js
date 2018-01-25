import Vue from 'vue'
import App from './App.vue'
import Tabs from '../src'
Vue.use(Tabs)
new Vue({
  render: h => h(App)
}).$mount('#app')
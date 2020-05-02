import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.config.ignoredElements = [
  'a-scene',
  'a-entity',
  'a-camera',
  'a-box',
  'a-sphere',
  'a-plane',
  'a-sky',
  'a-cylinder'
]
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

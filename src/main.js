import Vue from 'vue'
import App from './App.vue'
import blockHidden from './public/index'

Vue.config.productionTip = false
Vue.use(blockHidden)
new Vue({
  render: h => h(App),
}).$mount('#app')

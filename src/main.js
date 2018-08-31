import Vue from 'vue'
import App from './App.vue'
import router from './routes'
// import test from './test'

// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import './UIComponents/assets/css/font-awesome.min.css'

// Vue.use(ElementUI)
import UIComponents from './UIComponents'
Vue.use(UIComponents)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

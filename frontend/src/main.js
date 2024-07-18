import Vue from 'vue'
import App from './App.vue'
import router from './router'
import HeaderNav from './components/HeaderNav'
import SidePanel from './components/SidePanel'
import ReceiptBox from './components/ReceiptBox'
import ReceiptForm from './components/ReceiptForm'
import Footer from './components/Footer'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/style.css'


Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.component('HeaderNav',HeaderNav)
Vue.component('SidePanel',SidePanel)
Vue.component('ReceiptBox',ReceiptBox)
Vue.component('ReceiptForm',ReceiptForm)
Vue.component('Footer',Footer)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


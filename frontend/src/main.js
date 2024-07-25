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
import VueI18n from 'vue-i18n'
import enLocale from 'element-ui/lib/locale/lang/en';
import zhLocale from 'element-ui/lib/locale/lang/zh-CN';
import locale from 'element-ui/lib/locale';
import messages from './i18n'
import i18nMixin from './mixins/i18nMixin';

Vue.mixin(i18nMixin); // 注册全局混入
Vue.config.productionTip = false
Vue.use(VueI18n)

Vue.use(ElementUI)
Vue.component('HeaderNav',HeaderNav)
Vue.component('SidePanel',SidePanel)
Vue.component('ReceiptBox',ReceiptBox)
Vue.component('ReceiptForm',ReceiptForm)
Vue.component('Footer',Footer)

const i18n = new VueI18n({
  locale:'en',
  messages:{
    en:{
      ...enLocale,
      ...messages.en,
    },
    zh:{
      ...zhLocale,
      ...messages.zh,
    },
  },
})

// 配置 Element UI 的语言切换
locale.i18n((key, value) => i18n.t(key, value));

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')


import Vue from 'vue'
import VueRouter from 'vue-router'
import CNoodleR from '../views/CNoodleR.vue'
import CRiceR from '../views/CRiceR.vue'
import IPastaR from '../views/IPastaR.vue'
import ISaladR from '../views/ISaladR.vue'
import CustomizedR from '../views/CustomizedR.vue'
import AboutView from '../views/AboutView.vue'
import BookAMeeting from '../views/BookAMeeting.vue'
import ReceiptDetail from '../views/ReceiptDetail.vue'
import LoginView from '../views/LoginView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/LoginView'
  },
  {
    path: '/LoginView',
    name: 'LoginView',
    component: LoginView,
    children:[
      {
        path: '/AboutView',
        name: 'AboutView',
        component: AboutView
      },
      {
        path: '/CNoodleR',
        name: 'CNoodleR',
        component: CNoodleR
      },
      {
        path: '/CRiceR',
        name: 'CRiceR',
        component: CRiceR
      },
      {
        path: '/IPastaR',
        name: 'IPastaR',
        component: IPastaR
      },
      {
        path: '/ISaladR',
        name: 'ISaladR',
        component: ISaladR
      },
      {
        path: '/CustomizedR',
        name: 'CustomizedR',
        component: CustomizedR
      },
      {
        path: '/BookAMeeting',
        name: 'BookAMeeting',
        component: BookAMeeting
      },
      {
        path: '/ReceiptDetail',
        name: 'ReceiptDetail',
        component: ReceiptDetail
      },

    ]
  },
  
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

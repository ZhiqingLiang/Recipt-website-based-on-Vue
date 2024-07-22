import Vue from 'vue'
import Router from 'vue-router'
import CNoodleR from '../views/CNoodleR.vue'
import CRiceR from '../views/CRiceR.vue'
import IPastaR from '../views/IPastaR.vue'
import ISaladR from '../views/ISaladR.vue'
import CustomizedR from '../views/CustomizedR.vue'
import AboutView from '../views/AboutView.vue'
import BookAMeeting from '../views/BookAMeeting.vue'
import ReceiptDetail from '../views/ReceiptDetail.vue'
import LoginView from '../views/LoginView.vue'


Vue.use(Router)

const router = new Router({
  mode:'history',
  routes:[
    {
      path: '/',
      redirect: '/LoginView'
    },
    {
      path: '/LoginView',
      name: 'LoginView',
      component: LoginView,
    },
        {
          path: '/',
          name: 'AboutView',
          component: AboutView,
          meta: { requiresAuth: true }
        },
        {
          path: '/CNoodleR',
          name: 'CNoodleR',
          component: CNoodleR,
          meta: { requiresAuth: true }
        },
        {
          path: '/CRiceR',
          name: 'CRiceR',
          component: CRiceR,
          meta: { requiresAuth: true }
        },
        {
          path: '/IPastaR',
          name: 'IPastaR',
          component: IPastaR,
          meta: { requiresAuth: true }
        },
        {
          path: '/ISaladR',
          name: 'ISaladR',
          component: ISaladR,
          meta: { requiresAuth: true }
        },
        {
          path: '/CustomizedR',
          name: 'CustomizedR',
          component: CustomizedR,
          meta: { requiresAuth: true }
        },
        {
          path: '/BookAMeeting',
          name: 'BookAMeeting',
          component: BookAMeeting,
          meta: { requiresAuth: true }
        },
        {
          path: '/ReceiptDetail',
          name: 'ReceiptDetail',
          component: ReceiptDetail,
          meta: { requiresAuth: true }
        }
  ]
})
   
router.beforeEach((to, from, next) => {
  const isLoggedIn = !!localStorage.getItem('userToken');

  if (to.matched.some(record => record.meta.requiresAuth) && !isLoggedIn) {
    next('/LoginView');
  } else if (to.path === '/LoginView' && isLoggedIn) {
    next('/AboutView');
  } else {
    next();
  }
});
  


// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

export default router

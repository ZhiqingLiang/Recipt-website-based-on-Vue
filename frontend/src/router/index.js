// Date(Last edited):2024/07/31
// Author:Zhiqing Liang
// Reference link:
// 1. https://blog.csdn.net/2401_84435700/article/details/138628542

import Vue from 'vue'
import Router from 'vue-router'
import CNoodleR from '../views/CNoodleR.vue'
import CRiceR from '../views/CRiceR.vue'
import IPastaR from '../views/IPastaR.vue'
import ISaladR from '../views/ISaladR.vue'
import CustomizedR from '../views/CustomizedR.vue'
import AboutView from '../views/AboutView.vue'
import BookAMeeting from '../views/BookAMeeting.vue'
import CNoodleTemplate from '../views/CNoodleTemplate.vue'
import CRiceTemplate from '../views/CRiceTemplate.vue'
import IPastaTemplate from '../views/IPastaTemplate.vue'
import ISaladTemplate from '../views/ISaladTemplate.vue'
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
          path: '/AboutView',
          name: 'AboutView',
          component: AboutView,
          // meta: { requiresAuth: true }
        },
        {
          path: '/CNoodleR',
          name: 'CNoodleR',
          component: CNoodleR,
          // meta: { requiresAuth: true }
        },
        {
          path: '/CRiceR',
          name: 'CRiceR',
          component: CRiceR,
          // meta: { requiresAuth: true }
        },
        {
          path: '/IPastaR',
          name: 'IPastaR',
          component: IPastaR,
          // meta: { requiresAuth: true }
        },
        {
          path: '/ISaladR',
          name: 'ISaladR',
          component: ISaladR,
          // meta: { requiresAuth: true }
        },
        {
          path: '/CustomizedR',
          name: 'CustomizedR',
          component: CustomizedR,
          // meta: { requiresAuth: true }
        },
        {
          path: '/BookAMeeting',
          name: 'BookAMeeting',
          component: BookAMeeting,
          // meta: { requiresAuth: true }
        },
        {
          path: '/CNoodleTemplate/:id',
          name: 'CNoodleTemplate',
          component: CNoodleTemplate,
          // meta: { requiresAuth: true }
        },
        {
          path: '/CRiceTemplate/:id',
          name: 'CRiceTemplate',
          component: CRiceTemplate,
          // meta: { requiresAuth: true }
        },
        {
          path: '/IPastaTemplate/:id',
          name: 'IPastaTemplate',
          component: IPastaTemplate,
          // meta: { requiresAuth: true }
        },
        {
          path: '/ISaladTemplate/:id',
          name: 'ISaladTemplate',
          component: ISaladTemplate,
          // meta: { requiresAuth: true }
        }

  ]
})

/*r
 *  router.beforeEach - Called before each route jump.
 * (to,from,next) - to: the target route to be entered; from: the route from which the current navigation is about to leave; next: the next navigation page to be entered.
 */
router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
 // to.matched is an array of all the route records matched by the 'to' route object
  // some(record => record.meta.requiresAuth): check if the routed record requires authentication
  if (to.matched.some(record => record.meta.requiresAuth) && !isLoggedIn) {
    next({ name: 'AboutView' });
  } else { 
    next();
  }
});
  


export default router

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
          path: '/CNoodleTemplate',
          name: 'CNoodleTemplate',
          component: CNoodleTemplate,
          // meta: { requiresAuth: true }
        },

  ]
})

/*r
 *  router.beforeEach - 在每次路由跳转前调用
 * （to,from,next) - to:即将要进入的目标路由对象；from：当前导航正要离开的路由对象；next：进入下一个导航页面
 */
router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  // to.matched是一个数组，包含了'to'路由对象匹配到的所有路由记录
  // some(record => record.meta.requiresAuth):检查路由记录是否需要认证
  if (to.matched.some(record => record.meta.requiresAuth) && !isLoggedIn) {
    next({ name: 'AboutView' });
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

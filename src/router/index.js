import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      //redirect:'/login',
      redirect:{
        name:'login'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      redirect:{
        name:'homemange'
      },
      children:[
        { // 账号添加
          path: 'columnmange', // 相对地址,自定带上父级地址
          name: 'columnmange',
          component: () => import(/* webpackChunkName: "column" */ '../views/column/Column.vue'),
          meta:{ispass:true},
        },
        { 
          path: 'homemange', // 相对地址,自定带上父级地址
          name: 'homemange',
          component: () => import(/* webpackChunkName: "homemange" */ '../views/home/Homemange.vue'),
          meta:{ispass:true},
        },
        { 
          path: 'contentmange', // 相对地址,自定带上父级地址
          name: 'contentmange',
          component: () => import(/* webpackChunkName: "about" */ '../views/content/Contentmange.vue'),
          meta:{ispass:true},
        },
        { 
          path: 'addtitle', // 相对地址,自定带上父级地址
          name: 'addtitle',
          component: () => import(/* webpackChunkName: "about" */ '../views/title/Addtitle.vue'),
          meta:{ispass:true},
        },
        { 
          path: 'editphoto', // 相对地址,自定带上父级地址
          name: 'editphoto',
          component: () => import(/* webpackChunkName: "about" */ '../views/title/Editphoto.vue'),
          meta:{ispass:true},
        },
      ]
    },
    {
      path:'*',
      redirect:'/',
    }

]

const router = new VueRouter({
  routes
})

export default router

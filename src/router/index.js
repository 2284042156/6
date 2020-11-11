import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    //redirect:'/login',
    redirect: {
      name: "login",
    },
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import( "../views/Login.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: Home,
    redirect: {
      name: "homemange",
    },
    meta: { ispass: true },
    children: [
      {
        // 账号添加
        path: "columnmange", // 相对地址,自定带上父级地址
        name: "columnmange",
        component: () =>
      import( "../views/column/Demo.vue"),
        meta: { ispass: true },
      },
      {
        path: "homemange", // 相对地址,自定带上父级地址
        name: "homemange",
        component: () =>
          import(
            "../views/home/Homemange.vue"
          ),
        meta: { ispass: true },
      },
      {
        path: "contentmange/:id", // 相对地址,自定带上父级地址
        name: "contentmange",
        component: () =>
          import(
             "../views/content/Contentmange.vue"
          ),
        meta: { ispass: true },
      },
      {
        path: "addtitle", // 相对地址,自定带上父级地址
        name: "addtitle",
        component: () =>
          import("../views/title/Addtitle.vue"),
        meta: { ispass: true },
      },
      {
        path: "editphoto", // 相对地址,自定带上父级地址
        name: "editphoto",
        component: () =>
          import(
            "../views/title/Editphoto.vue"
          ),
        meta: { ispass: true },
      },
    ],
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  // mode:"history",
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.meta.ispass === true) {
    const token = sessionStorage.getItem("token");
    if (token) {
      next();
    } else {
      next("/");
    }
  } else {
    next();
  }
});
export default router;

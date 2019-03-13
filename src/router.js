import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import LoadSecId from "./views/LoadSecId.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/sec/:secId",
      name: "sec",
      component: LoadSecId,
      props: route => ({ secId: parseInt(route.params.secId) })
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});

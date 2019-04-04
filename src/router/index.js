import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import Default from "@/views/Default.vue";
import Demo from "@/views/Demo.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "*",
      component: Default
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/About.vue")
    },
    { path: "/demo", component: Demo }
  ]
});
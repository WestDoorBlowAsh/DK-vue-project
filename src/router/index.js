import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import Default from "@/views/Default";
import DemoComponent from "@/views/DemoComponent";
import DemoSlot from "@/views/DemoSlot";
import client from "@/views/socket/client";

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

    { path: "/client", component: client },

    { path: "/DemoSlot", component: DemoSlot },
    { path: "/DemoComponent", component: DemoComponent }
  ]
});

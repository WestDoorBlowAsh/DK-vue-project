import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import VueSocketIO from 'vue-socket.io'

import "./style.less";

Vue.config.productionTip = false;

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://127.0.0.1:7001',
  vuex: {
      store,
      actionPrefix: 'SOCKET_',
      mutationPrefix: 'SOCKET_'
  },
}))

new Vue({
  router,
  store,
  sockets: {
    connect: function () {
      console.log('socket connected');
    },
    res: function (val) {
      console.log('接收到服务端消息', val);
    }
  },
  render: h => h(App)
}).$mount("#app");

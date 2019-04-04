<template>
  <div id="app">
    <navigator></navigator>
    <router-view />
  </div>
</template>

<script>
import navigator from "@/components/navigator";

export default {
  name: "app",
  components: {
    navigator
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="less">
@import "~vux/src/styles/reset.less";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

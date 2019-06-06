<template>
  <div id="app">
    <navigator>
      <router-view />
    </navigator>
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

html,
body {
  height: 100%;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>

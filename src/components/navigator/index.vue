<template>
  <div class="root">
    <div class="top">导航</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "navigator",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="less">
.root {
  display: flex;
  flex: 1;
  flex-direction: column;
  // background: yellow;
  height: 100%;

  .top {
    .center;
    height: 44px;
    // background-color: red;
  }
}
</style>

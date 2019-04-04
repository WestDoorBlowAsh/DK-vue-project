<template>
  <div class="root">
    <div class="demo">xix</div>
    <img :src="imageSrc" />
  </div>
</template>

<script>
export default {
  name: "Demo",
  components: {},
  computed: {
    // 图片加载方式 publicPath: process.env.BASE_URL
    imageSrc() {
      return `${this.publicPath}logo1.png`;
    }
  },
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
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

  .demo {
    background-color: @themeColor;
  }
}

</style>

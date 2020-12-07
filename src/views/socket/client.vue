<template>
  <div class="about">
      <div class="btn" @click="onDianwo">点我</div>
  </div>
</template>

<script>
export default {
  name: "client",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {
      onDianwo() {
        //   console.log('tag', 'dian wo')
          this.$socket.emit('chat', '111111111111');
      }
  }
};
</script>

<style lang="less" scoped>

.btn {
    .center;
    width: 100px;
    height: 100px;
    background: chartreuse;
}

</style>
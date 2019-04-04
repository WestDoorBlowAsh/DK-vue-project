<template>
  <div class="root">
    <div @click="onCount" class="count">{{ count }}</div>
    <img src="@/assets/crane_gray.png" v-if="count == 0" />
    <img src="@/assets/crane_blue.png" v-if="count == 1" />
    <img src="@/assets/crane_red.png" v-if="count == 2" />
  </div>
</template>

<script>
export default {
  name: "SelectDot",
  props: ["initCount", "syncCount"],
  components: {},
  data() {
    return {
      count: this.initCount
    };
  },
  mounted() {},
  methods: {
    onCount() {
      this.count = (this.count + 1) % 3;

      this.$emit("update:syncCount", this.count);
      this.$emit("onChange", this.count);
    }
  }
};
</script>

<style scoped lang="less">
.root {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;

  .count {
    height: 50px;
    width: 50px;
    background: @themeColor;
  }

  img {
    width: 32px;
    height: 24px;
  }
}
</style>

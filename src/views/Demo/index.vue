<template>
  <div class="root">
    <div class="demo" @click="onClick">xix</div>
    <img :src="imageSrc" />
    <SelectDot
      :initCount="count"
      ref="dot"
      @onChange="onDotChange"
      :syncCount.sync="syncCount"
    ></SelectDot>
    <div>{{ fullName }}</div>
  </div>
</template>

<script>
import SelectDot from "./SelectDot";

export default {
  name: "Demo",
  components: {
    SelectDot
  },
  computed: {
    // 图片加载方式 publicPath: process.env.BASE_URL
    imageSrc() {
      return `${this.publicPath}logo1.png`;
    },
    fullName: {
      get: function() {
        return this.firstName + " " + this.lastName;
      },
      set: function(newValue) {
        var names = newValue.split(" ");
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      }
    }
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      firstName: "deng",
      lastName: "kai",
      count: 0,
      syncCount: 0
    };
  },
  watch: {
    fullName: function(newName, oldName) {
      console.log("fullName changed" + newName + oldName);
    }
  },
  mounted() {},
  methods: {
    onClick() {
      console.log("this.$refs.dot.subCount: " + this.$refs.dot.count);
      this.fullName = "xi men";
      console.log('this.syncCount = ', this.syncCount);
    },
    onDotChange(dot) {
      this.count = dot;
      console.log("dot Change = " + dot, this.count, this.syncCount);
    }
  }
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

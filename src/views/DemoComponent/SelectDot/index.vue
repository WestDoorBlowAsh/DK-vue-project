<template>
<div style="background:cyan">
  <div class="root">
    <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
      <swiper-slide v-for="item in [1,2,3,4,5,6,7,8]" :key="item.id" :style="myCSS">
        <div class="card">
          {{ "I'm Slide " + item }}
        </div>
      </swiper-slide>
      <!-- slides -->
      <!-- <swiper-slide>I'm Slide 1</swiper-slide>
      <swiper-slide>I'm Slide 2</swiper-slide>
      <swiper-slide>I'm Slide 3</swiper-slide>
      <swiper-slide>I'm Slide 4</swiper-slide>
      <swiper-slide>I'm Slide 5</swiper-slide>
      <swiper-slide>I'm Slide 6</swiper-slide>
      <swiper-slide>I'm Slide 7</swiper-slide> -->
      <!-- Optional controls -->
      <!-- <div class="swiper-pagination" slot="pagination"></div> -->
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-scrollbar" slot="scrollbar"></div> -->
    </swiper>
    <div @click="onCount" class="count">{{ count }}</div>
    <img src="@/assets/crane_gray.png" v-if="count == 0" />
    <img src="@/assets/crane_blue.png" v-if="count == 1" />
    <img src="@/assets/crane_red.png" v-if="count == 2" />
    </div>
    <div>
      <slot name="default"></slot>
    </div>
    <div>
      <slot name="other"></slot>
    </div>
  </div>
</template>

<script>
// require styles
import 'swiper/dist/css/swiper.css'
import {
  swiper,
  swiperSlide
} from 'vue-awesome-swiper'

export default {
  name: "SelectDot",
  props: ["initCount", "syncCount"],
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    myCSS: function() {
      let css = {"transform": "translate3d(" + 20 + "px," + 0 + "px," + 0 + "px)"};
      return css
    },
  },
  data() {
    return {
      count: this.initCount,
      swiperOption: {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        spaceBetween: 20,
        // height: 300,
        // width: 320,
        // "marginLeft": 70,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false
        },
        pagination: {
          el: '.swiper-pagination'
        }
      }
    };
  },
  mounted() {},
  methods: {
    myCSS1(index) {

      let css = {"transform": "translate3d(" + 20 + "px," + 0 + "px," + 0 + "px)"};
      return css
    },
    callback() {

    },
    onCount() {
      this.count = (this.count + 1) % 3;

      this.$emit("update:syncCount", this.count);
      this.$emit("onChange", this.count);
    }
  }
};
</script>

<style lang="less" scoped>
// 父组件的 css 属性会渗透到 子组件 根元素
.root {
  flex-direction: row;
  align-items: center;
  // height: 200px;
  background: blanchedalmond;

  .count {
    height: 50px;
    width: 50px;
    background: @themeColor;
  }

  img {
    width: 32px;
    height: 24px;
  }

  .swiper-inner {
    width: 100%;
    height: 400px;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 300px;
  }

  .card {
    background: red;
    height: 300px;
    // width: 320px;
    justify-content: center;
    align-items: center;
    display: flex;
    // width: 320px;
  }
}
</style>

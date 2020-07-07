<template>
  <!-- 首页轮播图 -->
  <div class="rotationAll">
    <div class="rotation">
      <Carousel autoplay v-model="value2" loop>
        <div class="demo-carousel" v-for="item in rotation" :key="item.id">
          <CarouselItem>
            <img :src="item.picUrl" alt />
            <img :src="item.picUr2" alt />
          </CarouselItem>
        </div>
      </Carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    rotation: {
      type: Array
    }
  },
  components: {},
  data() {
    return {
      value2: 0
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.rotationAll {
  width: 100%;
  display: flex;
  justify-content: center;
}
.rotation {
  width: 1240px;
}
</style>
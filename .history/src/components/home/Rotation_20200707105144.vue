<template>
  <!-- 首页轮播图 -->
  <div class="rotationAll">
    <div class="rotation">
      <Carousel autoplay v-model="value2" loop>
        <div class="demo-carousel" v-for="item in rotation" :key="item.id">
          <CarouselItem>
            <div><img :src="item.picUrl" alt class="picture"/></div>
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
.picture{
  width: 100%;
  height: 200px;
}
</style>
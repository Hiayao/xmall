<template>
  <!-- 首页轮播图 -->
  <div class="rotationAll">
    <div class="rotation">
      <Carousel  v-model="value2" loop class="img">
        <div class="pictureAll" v-for="item in rotation" :key="item.id">
          <CarouselItem>
            <img :src="item.picUrl" alt class="picture"/>
            <img :src="item.picUrl2" alt class="picture2"/>
            <img :src="item.picUrl3" alt class="picture3"/>
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
  height: 500px;
  z-index: -1;
}
.rotation {
  width: 1240px;
  // position: relative;
  margin-top: 30px;
  height: 500px;
}
.picture{
   position: relative;
  width: 94%;
  margin-left: 3%;
  height: 500px;
}

.picture2{
  position: relative;
  top: -512px;
  left: 70px;
}
.picture3{
  position: relative;
  top: -1050px;
  left: 70px;
}
.img{
  width: 100%;
  height: 500px;
}
</style>
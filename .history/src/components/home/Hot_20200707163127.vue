<template>
  <!-- 热门商品 -->
  <div class="hot_All">
    <div class="hot">
      <div class="title">热门商品</div>
      <div class="List">
      <div v-for="item in hot" :key="item.id" class="hotList">
        <img :src="item.picUrl" alt class="picture" />
      </div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    hot: {
      sype: Array
    }
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.hot_All {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 550px;
  margin-top: 30px;
}
.hot {
  width: 1240px;
  height: 500px;
}
.picture {
  width: 50%;
}
.title {
  width: 100%;
  line-height: 50px;
  border: 1px solid rgb(194, 194, 194);
  border-radius: 15px 15px 0 0;
  background: rgb(242, 242, 242);
  padding-left: 50px;
  font-size: 20px;
}
.hotList{
    width: 50%;
    height: 500px;
    background: chocolate;
}
.List{
    display: flex;
}
</style>
<template>
  <!-- 热门商品 -->
  <div class="hot_All">
    <div class="hot">
        <div class="title">热门商品</div>
      <div v-for="item in hot" :key="item.id">
        <img :src="item.picUrl" alt class="picture" />
      </div>
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
  height: 400px;
}
.hot {
  width: 1240px;
  height: 400px;
}
.picture {
  width: 50%;
}
.title {
    width: 100%;
    height: 100px;
    border: 1px solid rgb(242,242,242);
    background: rgb(242,242,242);
}
</style>
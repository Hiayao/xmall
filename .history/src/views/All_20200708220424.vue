<template>
  <!-- 全部商品 -->
  <div class="All_All">
    <div class="All">
        <div class="title">
      <div>综合排序</div>
      <div>价格从低到高</div>
      <div>价格从高到低</div>
      <div><Input v-model="value" type='number' placeholder="价格" style="width: 50px" /></div>
      <div>-</div>
      <div><Input v-model="value" type='number' placeholder="价格" style="width: 50px" /></div>
    </div></div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
        page:1,
        size:1,
        value: '',
    };
  },
  methods: {},
  mounted() {
      this.$api.allGoods(this.page,this.size).then(res => {
          console.log(res);
      }).catch(err => {
          console.log(err);
      })
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.All_All {
  background: rgb(237, 237, 237);
  width: 100%;
  height: 1000px;
  display: flex;
  justify-content: center;
}
.All {
  width: 1240px;
  height: 1000px;
  padding: 0 20px 0 20px;
  background: burlywood;
//   display: flex;
}
.title{
    display: flex;
    width: 45%;
    height: 80px;
    justify-content: space-between;
    align-items: center;
}
</style>
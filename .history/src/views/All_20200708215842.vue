<template>
  <!-- 全部商品 -->
  <div class="All_All">
    <div class="All">
      <div>kshd</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
        page:'',
        size:'',
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
}
</style>
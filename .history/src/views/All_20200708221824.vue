<template>
  <!-- 全部商品 -->
  <div class="All_All">
    <div class="All">
      <div class="title">
        <div class="titleOne">
          <div>综合排序</div>
          <div>价格从低到高</div>
          <div>价格从高到低</div>
        </div>
        <div class="titleTwo">
          <div>
            <Input v-model="value" type="number" placeholder="价格" style="width: 57px" />
          </div>
          <div>-</div>
          <div>
            <Input v-model="value" type="number" placeholder="价格" style="width: 57px" />
          </div>
          <div><Button type="primary">确定</Button></div>
        </div>
      </div>
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
      page: 1,
      size: 1,
      value: ""
    };
  },
  methods: {},
  mounted() {
    this.$api
      .allGoods(this.page, this.size)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
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
.title {
  display: flex;
  width: 50%;
  display: flex;
  // justify-content: space-between;
  align-items: center;
}
.titleOne {
  width: 50%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.titleTwo {
  width: 40%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 30px;
}
</style>
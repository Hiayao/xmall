<template>
  <!-- 商品详情页 -->
  <div class="Details_All">
    <div class="All">
      <div class="imgLeft">
        <div v-for="item in list.productImageSmall" :key="item.id">
          <div>
            <img :src="item" alt="" class="img">
          </div>
        </div>
        <div></div>
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
      list:[]
      //  productId:''
    };
  },
  methods: {},
  mounted() {
    //    接收Windows open传过来的参数（固定写法）
    var afterUrl = window.location.search.substring(1);
    var afterEqual = afterUrl.substring(afterUrl.indexOf("=") + 1);
    console.log(afterEqual);
    // this.productId = afterEqual
    this.$api
      .detail(afterEqual)
      .then(res => {
        this.list = res.data.result
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
.Details_All {
  background: rgb(237, 237, 237);
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 60px;
}
.All {
  width: 1240px;
  // height: 100px;
  padding: 0 20px 0 20px;
  border-radius: 15px;
  background: white;
  margin-top: 30px;
}
.imgLeft{
  width: 50%;
  height: 500px;
  padding: 30px 0 30px 10px;
  background: blueviolet;
}
.img{
  width: 70px;
  height: 70px;
}
</style>
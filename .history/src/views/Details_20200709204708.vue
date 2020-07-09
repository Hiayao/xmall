<template>
  <!-- 商品详情页 -->
  <div class="Details_All">
    <div class="All">
      <div class="imgAll">
        <div class="smartImg">
          <div v-for="(item,index) in list.productImageSmall" :key="index" class="imgLeft">
            <div class="imgOne" @click="bigImg(item)">
              <img :src="item" alt class="imgOne" :class="{'boxBoder':fleg === item}"/>
            </div>
          </div>
        </div>
        <div class="imgTwo">
          <img :src="pic" alt class="imgTwoT" />
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
      list: [],
      //  productId:''
      pic: [],
      fleg:''
    };
  },
  methods: {
    bigImg(item) {
      this.pic = item;
      this.fleg = item
    }
  },
  mounted() {
    //    接收Windows open传过来的参数（固定写法）
    var afterUrl = window.location.search.substring(1);
    var afterEqual = afterUrl.substring(afterUrl.indexOf("=") + 1);
    console.log(afterEqual);
    // this.productId = afterEqual
    this.$api
      .detail(afterEqual)
      .then(res => {
        this.list = res.data.result;
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
.imgAll {
  width: 50%;
  height: 500px;
  padding: 30px 0 30px 50px;
  display: flex;
}
.imgOne {
  width: 70px;
  height: 70px;
  border: .5px solid rgb(194, 194, 194);
}
.imgLeft {
  width: 70px;
  height: 70px;
  margin-bottom: 20px;
}
.imgTwo {
  width: 380px;
  height: 380px;
  margin-top: 25px;
  margin-left: 80px;
}
.imgTwoT {
  width: 380px;
  height: 380px;
}
.boxBoder{
  box-shadow: 0 20 10px #999;
}
</style>
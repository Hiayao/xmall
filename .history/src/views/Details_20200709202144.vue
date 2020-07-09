<template>
  <!-- 商品详情页 -->
  <div class="Details_All">
    <div class="All">
      <div class="imgAll">
        <div v-for="(item,index) in list.productImageSmall" :key="index" class="imgLeft">
          <div class="imgOne" @click="bigImg(index)">
            <img :src="item" alt="" class="imgOne">
          </div>
          <div class="imgTwo"><img :src="pic.slice(1,1)" alt="" class="imgTwo"></div>
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
      list:[],
      //  productId:''
      pic:[]
    };
  },
  methods: {
    bigImg(index){
      this.pic = this.list.productImageSmall[index]
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
.imgAll{
  width: 50%;
  height: 500px;
  padding: 30px 0 30px 50px;
  background: blueviolet;
}
.imgOne{
  width: 70px;
  height: 70px;
}
.imgLeft{
  width: 70px;
  height: 70px;
  margin-bottom: 20px;
  border: 1px solid rgb(99, 99, 99);
}
.imgTwo{
  width: 200px;
  height: 200px;
}
</style>
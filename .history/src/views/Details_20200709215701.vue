<template>
  <!-- 商品详情页 -->
  <div class="Details_All">
    <div class="All">
      <!-- 左边商品图片 -->
      <div class="imgAll">
        <div class="smartImg">
          <div v-for="(item,index) in list.productImageSmall" :key="index" class="imgLeft">
            <div class="imgOne" @click="bigImg(item)">
              <img :src="item" alt class="imgOne" :class="{'boxBoder':fleg === item}" />
            </div>
          </div>
        </div>
        <div class="imgTwo">
          <img :src="pic" alt class="imgTwoT" />
        </div>
      </div>
      <!-- 右边名字加购等 -->
      <div class="wordAll">
        <div class="productName">{{list.productName}}</div>
        <div class="priceAll">
          <div class="subTitle">{{list.subTitle}}</div>
          <div class="salePrice">{{list.salePrice | fixed}}</div>
        </div>
        <div class="StepperBox">
          <div class="StepperAll">
            <div>数量</div>
            <div class="Stepper">
              <div>
                <Icon type="ios-remove-circle-outline" size="24" @click="reduce" />
              </div>
              <div>{{num}}</div>
              <div>
                <Icon type="ios-add-circle-outline" size="24" @click="plus" />
              </div>
            </div>
          </div>
        </div>
        <!-- 购买按钮 -->
        <div>
          <span>
            <Button type="primary" size="large">加入购物车</Button>
          </span>
          <span>
            <Button size="large">现在购买</Button>
          </span>
        </div>
      </div>
      <!-- 产品信息 -->
      <div class="new">
        <div class="title">产品信息</div>
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
      list: {},
      //  productId:''
      pic: [],
      fleg: "",
      num: 1
    };
  },
  methods: {
    bigImg(item) {
      this.pic = item;
      this.fleg = item;
    },
    // 步进器
    reduce() {
      this.num--;
      if (this.num <= 0) {
        this.num = 1;
      }
    },
    plus() {
      this.num++;
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
        // 初始化图片显示的pic地址
        this.pic = this.list.productImageBig;
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  },
  //过滤器 对数字进行操作就用这个
  filters: {
    fixed(val) {
      return "￥" + Number(val).toFixed(2);
    }
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
  display: flex;
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
  border: 0.9px solid rgb(211, 210, 210);
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
.boxBoder {
  border: 3px solid #999;
}
.wordAll {
  width: 50%;
  height: 500px;
  padding: 30px 0 30px 50px;
}
.priceAll {
  width: 70%;
  display: flex;
  height: 40px;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 0.5px solid rgb(190, 190, 190);
  margin-bottom: 30px;
}
.productName {
  font-size: 26px;
  margin-bottom: 20px;
}
.subTitle {
  font-size: 14px;
  color: rgb(199, 199, 199);
  height: 30px;
  display: flex;
  align-items: center;
}
.salePrice {
  font-size: 26px;
  font-weight: 600;
  height: 30px;
  color: red;
  display: flex;
  align-items: center;
}
.Stepper {
  display: flex;
  width: 76px;
  justify-content: space-between;
}
.StepperAll {
  display: flex;
  width: 120px;
  height: 20px;
  align-items: center;
  justify-content: space-between;
}
.ivu-icon {
  box-shadow: 0 0 10px;
  border-radius: 50%;
}
.StepperBox {
  width: 70%;
  border-bottom: 0.5px solid rgb(190, 190, 190);
  height: 40px;
  margin-bottom: 30px;
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
.new {
  width: 1240px;
}
</style>
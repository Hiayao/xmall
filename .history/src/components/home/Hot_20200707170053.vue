<template>
  <!-- 热门商品 -->
  <div class="hot_All">
    <div class="hot">
      <div class="title">热门商品</div>
      <div class="List">
        <div v-for="(item,index) in hot" :key="item.id" class="hotList" :class="'hotList'+index">
          <div class="picture">
            <img :src="item.picUrl" alt class="picture" />
          </div>
          <div class="productName">{{item.productName}}</div>
          <div class="subTitle">{{item.subTitle}}</div>
          <div class="salePrice">￥{{item.salePrice}}.00</div>
        </div>
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
  height: 550px;
  margin-top: 30px;
}
.hot {
  width: 1240px;
  height: 500px;
}
.picture {
  width: 220px;
  height: 220px;
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
.hotList {
  width: 50%;
  height: 500px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  
}
.hotList0 {
  border-radius: 0 0 0 15px;
  &:hover{
      cursor: pointer;
      box-shadow: 15px 10px 10px -10px red;
      translate: 0 -2px;
  }
}
.hotList1 {
  border-radius: 0 10px 15px 0;
  &:hover{
      cursor: pointer;
      box-shadow: -15px 10px 10px -10px red;
  }
}
.List {
  border: 1px solid rgb(194, 194, 194);
  border-radius: 0 0 15px 15px;
  display: flex;
}
.productName {
  font-size: 20px;
  font-weight: 520;
  margin: 8px 0 5px 0;
}
.subTitle {
  color: rgb(199, 198, 198);
  margin-bottom: 20px;
}
.salePrice {
  font-size: 20px;
  font-weight: 600;
  color: red;
}
</style>
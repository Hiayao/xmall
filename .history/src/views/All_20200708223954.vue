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
            <Input v-model="value" type="number" placeholder="价格" style="width: 58px" />
          </div>
          <div>-</div>
          <div>
            <Input v-model="value" type="number" placeholder="价格" style="width: 58px" />
          </div>
          <div>
            <Button type="primary">确定</Button>
          </div>
        </div>
      </div>

      <div class="baby">
        <div v-for="item in listOne" :key="item.id" class="babyItem">
          <div class="imgAll">
            <img :src="item.productImageBig" alt class="img" />
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
  props: {},
  components: {},
  data() {
    return {
      page: 1,
      size: 1,
      value: "",
      listOne: [],
      listTwo: []
    };
  },
  methods: {},
  mounted() {
    this.$api
      .allGoods(this.page, this.size)
      .then(res => {
        this.listOne = res.data;
        console.log(this.listOne);
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
.imgAll {
  width: 70%;
  height: 50%;
}
.img {
	width: 200px;
	height: 200px;
}
.baby {
	width: 100%;
  display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
}
.babyItem{
	width: 24.8%;
	height: 440px;
	margin-bottom: 3px;
	background: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.productName{
	font-size: 17px;
	font-weight: 540;
}
.subTitle{
	font-size: 13px;
	color: #999;
	margin: 10px 0 30px 0;
}
.salePrice{
	font-size: 18px;
	font-weight: 600;
	color: red;
}
</style>
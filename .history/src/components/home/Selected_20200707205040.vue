<template>
  <!-- 首页品牌精选，官方精选，品牌周边 -->
  <div class="Selected_All">
    <div class="Selected">
      <div class="title">{{SelectedName}}</div>
      <div class="list">
        <div v-for="item in Selected.slice(0,1)" :key="item.id" class="img1All">
          <div><img :src="item.picUrl" alt class="img1" /></div>
        </div>
        <div class="img2All">
          <div v-for="item in Selected.slice(1,3)" :key="item.id" class="img2list">
            <div class="img2"><img :src="item.picUrl" alt class="img2A" /></div>
						<div class="productName">{{item.productName}}</div>
						<div class="subTitle">{{item.subTitle}}</div>
						<div class="salePrice">￥{{item.salePrice}}.00</div>
          </div>
        </div>
				<div class="img3All">
					<div v-for="item in Selected.slice(3,7)" :key="item.id" class="img3list">
						<div class="img3">
              <img :src="item.picUrl" alt="" class="img3A">
            </div>
					</div>
				</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    Selected: {
      type: Array
    },
    SelectedName: {
      type: String
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
.Selected_All {
  margin-top: 30px;
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: center;
}
.Selected {
  width: 1240px;
  height: 800px;
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
.list {
  width: 100%;
  height: 750px;
  background: white;
  border: 1px solid rgb(194, 194, 194);
  border-radius: 0 0 15px 15px;
	display: flex;
	flex-wrap: wrap;
}
.img1All{
	width: 50%;
	height: 50%;
}
.img1 {
  width: 100%;
  height: 50%;
}
.img2All {
  width: 50%;
  height: 50%;
  display: flex;
}
.img2A{
	width: 100%;
	height: 100%;
}
.img2 {
  width: 70%;
  height: 60%;
}
.img2list{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
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
.img3All{
	width: 100%;
  height: 50%;
  display: flex;
}
.img3list{
  width: 25%;
  height: 100%;
}
.img3 {
  width: 70%;
  height: 60%;
}
.img3A{
  width: 100%;
  height: 100%;
}
</style>
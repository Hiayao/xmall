<template>
  <div class="home_top">
    <div class="topAll">
      <div class="top">
        <div class="logo">M</div>
        <div class="topRight">
          <div>
            <Input
              suffix="ios-search"
              v-model="value"
              placeholder="请输入商品信息"
              style="width: 250px"
              size="large"
            />
          </div>
          <div class="fontTop">全部商品</div>
          <div class="fontTop">捐赠</div>
          <div class="shu">丨</div>
          <div class="fontTop">
            <Icon type="logo-octocat" size="20" />
          </div>
          <div class="fontLast">
            <div>
              <Icon type="ios-cart" size="20" />
            </div>
            <div class="num">0</div>
          </div>
        </div>
      </div>
			
    </div>
		<div class="dav"></div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      value: ""
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.topAll {
  background: black;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
}
.top {
  width: 1240px;
  height: 100%;
  display: flex;
	align-items: center;
	justify-content: space-between;
}
.logo {
  font-family: "Helvetica Neue";
  width: 40px;
  height: 40px;
  background: white;
  font-size: 25px;
  font-weight: 400;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-left: 20px;
}
.topRight {
  display: flex;
  font-size: 14px;
  align-items: center;
}
.fontTop {
  width: 100px;
  height: 100%;
  text-align: center;
  color: rgb(200, 200, 200);
}
.num {
  width: 15px;
  height: 15px;
  background: rgb(200, 200, 200);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}
.fontLast {
  width: 60px;
  height: 100%;
  text-align: center;
  color: rgb(200, 200, 200);
  display: flex;
  align-items: center;
}
.dav {
	width: 1240px;
  height: 100%;
  display: flex;
	align-items: center;
	background: chocolate;
}
</style>
<template>
<!-- 公共路由，顶部两个导航栏 -->
  <div class="home_top">
    <!-- 第一个黑色的导航栏 -->
    <div class="topAll">
      <div class="top">
        <div class="logo">M</div>
        <div class="topRight">
          <div>
            <Input
              suffix="ios-search"
              v-model="value"
              placeholder="请输入商品信息"
              style="width: 274px"
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
            <div class="car">
              <Tooltip content="Bottom Right text" placement="bottom-end">
              <Icon type="ios-cart" size="20" />
               </Tooltip>
            </div>
            <div class="num">0</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 第二个白色的导航栏 -->
    <div class="davAll">
      <div class="dav">
        <div class="davOne">
          <div class="home">
            <div>·</div>
            <div class="homeFont">首页</div>
          </div>
          <div v-for="item in davList" :key="item.id" class="list">
            <div>·</div>
            <div class="listFont">{{item}}</div>
          </div>
        </div>
      </div>
    </div>
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
      value: "",
      davList: [
        "全部",
        "品牌周边",
        "捐赠名单",
        "后台管理系统",
        "XPay支付系统",
        "XBoot开发平台",
        "宣传视频",
        "Github",
        "商用授权"
      ]
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
  position: relative;
}
.logo {
  font-family: "Helvetica Neue";
  position: absolute;
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
  // margin-left: 20px;
  left: 200px;
}
.topRight {
  display: flex;
  font-size: 14px;
  align-items: center;
  position: absolute;
  right: 10px;
}
.fontTop {
  width: 100px;
  height: 100%;
  text-align: center;
  color: rgb(200, 200, 200);
}
.fontTop:hover {
  cursor: pointer;
  color: white;
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
.davAll {
  background: pink;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
}
.dav {
  width: 1240px;
  height: 100%;
}
.davOne {
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 20px;
}
.list {
  display: flex;
  justify-content: space-between;
}
.home {
  display: flex;
  justify-content: space-between;
}
.listFont {
  margin: 0 10px 0 10px;
}
.homeFont {
  margin: 0 20px 0 14px;
  font-weight: 600;
}
.car:hover {
  cursor: pointer;
  color: white;
}
</style>
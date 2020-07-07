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
              <Tooltip placement="bottom-end" theme="light">
                <Icon type="ios-cart" size="20" />
                <div slot="content" class="card">
                  <div>
                    <Icon type="ios-cart-outline" size="80" />
                  </div>
                  <div style="font-size:18px">您的购物车还是空的！</div>
                </div>
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
    <div class="fixedTop" :class="navBarFixed == true ? 'navBarWrap' :''" v-if="this.navBarFixed === true">
      <!-- 将需要固定的元素的class与navBarFixed进行绑定，如果navBarFixed为true时，就应用这个isFixed样式 -->
      <div class="davAllT">
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
      ],
      navBarFixed: false //将navBarFixed实例初始化
    };
  },
  methods: {
    //写入 watchScroll 方法。
    watchScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      //  当滚动超过 100 时，实现吸顶效果

      //监听元素到顶部的距离
      //并判断滚动的距离如果大于了元素到顶部的距离时，
      //设置navBarFixed为true,否则就是false
      if (scrollTop > 100) {
        this.navBarFixed = true;
      } else {
        this.navBarFixed = false;
      }
    }
  },
  mounted() {
    //写入事件监听，监听滚动条。
    window.addEventListener("scroll", this.watchScroll);
  },
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
  background: white;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  box-shadow: 10px 10px 10px 10px rgba(153,153,153,.8);
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
  &:hover {
    cursor: pointer;
    color: rgb(77, 77, 228);
  }
}
.homeFont {
  margin: 0 20px 0 14px;
  font-weight: 600;
  &:hover {
    cursor: pointer;
    color: rgb(77, 77, 228);
  }
}
.car:hover {
  cursor: pointer;
  color: white;
}
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
}

// 写一个该元素固定到顶部的样式，isFixed
.navBarWrap {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
  background:white;
}
.davAllT{
  background: white;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
}
</style>
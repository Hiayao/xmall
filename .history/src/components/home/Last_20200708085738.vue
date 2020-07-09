<template>
  <!-- 首页底部 -->
  <div class="Last_All">
    <div class="Last">
      <div class="lastOne">
        <div class="wordOne">
          <div class="wordAll">
            <div>
              <div class="one">订单服务</div>
              <div class="two">购买指南</div>
              <div class="two">支付方式</div>
              <div class="two">送货政策</div>
            </div>
            <div>
              <div class="one">服务支持</div>
              <div class="two">官方开源</div>
              <div class="two">项目前端</div>
              <div class="two">项目后端</div>
            </div>
            <div>
              <div class="one">自助服务</div>
              <div class="two">个人博客</div>
              <div class="two">个人简介</div>
              <div class="two">个人视频</div>
            </div>
            <div>
              <div class="one">其他项目</div>
              <div class="two">XPay支付系统</div>
              <div class="two">数据共享</div>
              <div class="two">待开发…</div>
            </div>
            <div>
              <div class="one">友情链接</div>
              <div class="two">宇cccc</div>
              <div class="two">Smartisan</div>
              <div class="two">Vue</div>
            </div>
            <div>
              <div class="one">关注我吧</div>
              <div class="two">腾讯QQ</div>
              <div class="two">新浪微博</div>
              <div class="two">官方邮箱</div>
            </div>
          </div>
          <div class="wordTwo">
            <div class="num">289632629</div>
            <div class="time">周一至周日 10:00-23:00（限Starrer或捐赠人联系）</div>
            <div>
              <Button @click="warning(false)">在线帮助</Button>
            </div>
          </div>
        </div>
      </div>
      <div class="lastTwo">
        <div class="wordThe">
          <div>Copyright ©2017, exrick.cn Co., Ltd. All Rights Reserved.本网站设计内容大部分属锤子科技</div>
          <div class="shu">丨</div>
          <div class="wordFr" @click="info(false)">法律声明</div>
          <div class="shu">丨</div>
          <div class="wordFr" @click="Privacy(false)">隐私条款</div>
          <div class="shu">丨</div>
          <div class="wordFr" @click="pioneer(false)">开发者中心</div>
        </div>
        <div class="wordfive">
          <div class="icp">蜀ICP备16030308号-1</div>
          <div>蜀ICP证16030308号</div>
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
    return {};
  },
  methods: {
    warning(nodesc) {
      this.$Notice.warning({
        title: "在线帮助",
        desc: nodesc ? "" : "用心聆听，别怕打扰，朋友请听好"
      });
    },
    info(nodesc) {
      this.$Notice.info({
        title: "法律声明",
        desc: nodesc
          ? ""
          : "此仅为个人练习开源模仿项目，仅供个人查看，我可承担不了什么责任"
      });
    },
    Privacy(nodesc) {
      this.$Notice.info({
        title: "隐私条款",
        desc: nodesc
          ? ""
          : "本网站没有什么需要获取的隐私，请勿乱扣帽子"
      });
    },
    pioneer(nodesc) {
      this.$Notice.info({
        title: "开发者中心",
        desc: nodesc
          ? ""
          : "本来可以跳转我的Github，不过里面没什么东西，所以还是不跳了"
      });
    },
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.Last_All {
  margin-top: 60px;
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: center;
  background: rgb(250, 250, 250);
}
.Last {
  width: 1240px;
  height: 350px;
}
.lastOne {
  width: 100%;
  height: 240px;
  border-bottom: 1px solid rgb(219, 219, 219);
  padding-top: 70px;
}
.wordOne {
  width: 100%;
  height: 150px;
  display: flex;
}
.wordAll {
  width: 65%;
  height: 100%;
  display: flex;
  font-size: 12px;
  justify-content: space-between;
  align-items: center;
}
.one {
  padding-bottom: 16px;
}
.two {
  color: #999;
  padding-bottom: 10px;
}
.wordTwo {
  width: 35%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
}
.ivu-btn {
  width: 140px !important;
}
.num {
  font-size: 30px;
  font-weight: 600;
}
.time {
  margin-bottom: 10px;
  font-size: 12px;
  color: rgb(172, 172, 172);
}
.lastTwo {
  width: 100%;
  line-height: 110px;
  display: flex;
  flex-direction: column;
}
.wordThe {
  height: 30px;
  display: flex;
  font-size: 12px;
}
.shu {
  color: #999;
  margin: 0 5px 0 5px;
}
.wordFr {
  color: rgb(68, 68, 194);
  &:hover{
    cursor: pointer;
  }
}
.wordfive {
  height: 20px;
  display: flex;
  font-size: 12px;
  color: rgb(172, 172, 172);
}
.icp {
  margin-right: 20px;
}
</style>
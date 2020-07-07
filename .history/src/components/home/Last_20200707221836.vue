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
            <div class="num">1012139570</div>
            <div class="time">周一至周日 10:00-23:00（限Starrer或捐赠人联系）</div>
            <div>
              <Button>在线帮助</Button>
            </div>
          </div>
        </div>
      </div>
      <div class="lastTwo">
        <div class="wordThe">
          <div>Copyright ©2017, exrick.cn Co., Ltd. All Rights Reserved.本网站设计内容大部分属锤子科技</div>
          <div>丨</div>
          <div>法律声明</div>
          <div>丨</div>
          <div>隐私条款</div>
          <div>丨</div>
          <div>开发者中心</div>
        </div>
        <div></div>
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
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.Last_All {
  margin-top: 60px;
  width: 100%;
  height: 380px;
  display: flex;
  justify-content: center;
  background: white;
}
.Last {
  width: 1240px;
  height: 390px;
  background: white;
}
.lastOne {
  width: 100%;
  height: 260px;
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
  line-height: 130px;
  display: flex;
  flex-direction: column;
  background: chocolate;
}
.wordThe{
	display: flex;
}
</style>
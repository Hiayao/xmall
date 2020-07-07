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
						<div>1012139570</div>
						<div>周一至周日 10:00-23:00（限Starrer或捐赠人联系）</div>
						<div></div>
					</div>
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
  border-bottom: 1px solid rgb(204, 204, 204);
  padding-top: 70px;
}
.wordOne {
  width: 100%;
  height: 150px;
  display: flex;
  background: wheat;
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
  background: chocolate;
}
</style>
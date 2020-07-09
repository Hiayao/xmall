<template>
  <!-- 登录 -->
  <div class="login_All">
    <div>
      <img src="../assets/水彩粒子背景.jpg" alt class="img" />
    </div>
    <Card style="width:320px" class="boxCard">
      <div style="text-align:center">
        <div>
          <img src="../assets/登录logo.png" alt class="logo" />
        </div>
        <div>使用 XMall 账号 登录官网</div>
        <Form :model="formLeft" label-position="left" :label-width="100">
          <FormItem>
            <Input v-model="formLeft.input1" placeholder="账号" />
          </FormItem>
          <FormItem prop="passwd">
            <Input type="password" v-model="formLeft.passwd" />
          </FormItem>
        </Form>
        <div id="vaptchaContainer" style="width: 300px;height: 36px;">
          <!--vaptcha-container是用来引入VAPTCHA的容器，下面代码为预加载动画，仅供参考-->
          <div class="vaptcha-init-main">
            <div class="vaptcha-init-loading">
              <a href="/" target="_blank">
                <img src="https://r.vaptcha.net/public/img/vaptcha-loading.gif" />
              </a>
              <span class="vaptcha-text">Vaptcha启动中...</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  </div>
</template>
<script src="https://v.vaptcha.com/v3.js"></script>
<script>
// vaptcha({
//   vid: "5f053e4586e8ce893ab1c838", // 验证单元id
//   type: "click", // 显示类型 点击式
//   scene: 0, // 场景值 默认0
//   container: "#vaptchaContainer", // 容器，可为Element 或者 selector
//   offline_server: "" //离线模式服务端地址，若尚未配置离线模式，请填写任意地址即可。
//   //可选参数
//   //lang: 'auto', // 语言 默认auto,可选值auto,zh-CN,en,zh-TW,jp
//   //https: true, // 使用https 默认 true
//   //style: 'dark' //按钮样式 默认dark，可选值 dark,light
//   //color: '#57ABFF' //按钮颜色 默认值#57ABFF
// }).then(function(vaptchaObj) {
//   obj = vaptchaObj; //将VAPTCHA验证实例保存到局部变量中
//   vaptchaObj.render(); // 调用验证实例 vpObj 的 render 方法加载验证按钮
//   //获取token的方式一：
//   //vaptchaObj.renderTokenInput('.login-form')//以form的方式提交数据时，使用此函数向表单添加token值
//   //获取token的方式二：
//   vaptchaObj.listen("pass", function() {
//     // 验证成功进行后续操作
//     var data = {
//       //表单数据
//       token: vaptchaObj.getToken()
//     };
//     $.post("login", data, function(r) {
//       if (r.code !== 200) {
//         console.log("登录失败");
//         vaptchaObj.reset(); //重置验证码
//       }
//     });
//   });
//   //关闭验证弹窗时触发
//   vaptchaObj.listen("close", function() {
//     //验证弹窗关闭触发
//   });
// });
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      formLeft: {
        input1: "",
        passwd: ""
      }
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.img {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
}
.boxCard {
  height: 500px;
}
.login_All {
  min-height: 610px;
  min-width: 630px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo {
  width: 90px;
  height: 90px;
}
.vaptcha-init-main {
  display: table;
  width: 100%;
  height: 100%;
  background-color: #eeeeee;
}
​ .vaptcha-init-loading {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}
​ .vaptcha-init-loading > a {
  display: inline-block;
  width: 18px;
  height: 18px;
  border: none;
}
​ .vaptcha-init-loading > a img {
  vertical-align: middle;
}
​ .vaptcha-init-loading .vaptcha-text {
  font-family: sans-serif;
  font-size: 12px;
  color: #cccccc;
  vertical-align: middle;
}
</style>
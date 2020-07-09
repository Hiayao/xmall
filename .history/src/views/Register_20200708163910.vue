<template>
  <!-- 注册 -->
  <div class="login_All">
    <div>
      <img src="../assets/水彩粒子背景.jpg" alt class="img" />
    </div>
    <Card class="boxCard">
      <div class="cardWord">
        <div slot="title" class="title">注册 XMall 账号</div>
        <Divider />
        <div class="form">
          <Form ref="formValidate" :model="formValidate" :label-width="80">
            <FormItem prop="name">
              <Input v-model="formValidate.name" placeholder="账号" />
            </FormItem>
            <FormItem prop="passwd">
              <Input type="password" v-model="formValidate.passwd" placeholder="密码" />
            </FormItem>
            <FormItem prop="passwdCheck">
              <Input type="password" v-model="formValidate.passwdCheck" placeholder="重复密码" />
            </FormItem>
          </Form>
        </div>

        <!-- 验证码 -->
        <div class="vpat">
          <div ref="vaptcha" style="width:248px;height:36px">
            <div class="vaptcha-init-main">
              <div class="vaptcha-init-loading">
                <a href="https://www.vaptcha.com/" target="_blank">
                  <img src="https://cdn.vaptcha.com/vaptcha-loading.gif" />
                </a>
                <span class="vaptcha-text">VAPTCHA启动中...</span>
              </div>
            </div>
          </div>
        </div>

        <div class="operation">
          <Checkbox v-model="single">我已阅读并同意遵守</Checkbox>
          <div class="state">法律声明</div>
          <div>和</div>
          <div class="hide">隐私条款</div>
        </div>

        <div class="btn">
          <Button type="success">注册</Button>
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
// 验证码
const extend = function(to, _from) {
  for (const key in _from) {
    to[key] = _from[key];
  }
  return to;
};
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      formValidate: {
        name: "",
        passwd: "",
        passwdCheck: ""
      },
      single: false
    };
  },
  methods: {
    //   验证码
    loadV2Script() {
      if (typeof window.vaptcha === "function") {
        //如果已经加载就直接放回
        return Promise.resolve();
      } else {
        return new Promise(resolve => {
          var script = document.createElement("script");
          script.src = "https://v.vaptcha.com/v3.js";
          script.async = true;
          script.onload = script.onreadystatechange = function() {
            if (
              !this.readyState ||
              this.readyState == "loaded" ||
              this.readyState == "complete"
            ) {
              resolve();
              script.onload = script.onreadystatechange = null;
            }
          };
          document.getElementsByTagName("head")[0].appendChild(script);
        });
      }
    }
  },
  mounted() {
    //   验证码
    var config = extend(
      {
        vid: "5f053e4586e8ce893ab1c838",
        container: this.$refs.vaptcha,
        style: this.vpStyle
      },
      this.$props
    );
    this.loadV2Script().then(() => {
      window.vaptcha(config).then(obj => {
        this.$emit("input", obj);
        obj.render();
      });
    });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.login_All {
  min-height: 610px;
  min-width: 630px;
  display: flex;
  align-items: center;
  justify-content: center;
}
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
  width: 340px;
}
.title {
  text-align: center;
  font-weight: 600;
}
.cardWord {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px 0 20px;
}
.form {
  margin-top: 20px;
}
.operation {
  display: flex;
  font-size: 12px;
  width: 248px;
  color: rgb(177, 177, 177);
  margin-top: 10px;
}
.ivu-checkbox-wrapper {
  font-size: 12px;
  color: rgb(177, 177, 177);
}
.state{
    color: rgb(88, 88, 223);
    margin-right: 2px;
}
.hide{
    color: rgb(88, 88, 223);
    margin-left: 2px;
}
</style>
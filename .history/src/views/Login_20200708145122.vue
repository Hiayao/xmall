<template>
  <!-- 登录 -->
  <div class="login_All">
    <div>
      <img src="../assets/水彩粒子背景.jpg" alt class="img" />
    </div>
    <Card style="width:340px" class="boxCard">
      <div class="cardWord">
        <div>
          <img src="../assets/登录logo.png" alt class="logo" />
        </div>
        <div class="title">使用 XMall 账号 登录官网</div>
        <Form :model="formLeft" label-position="left" :label-width="100">
          <FormItem>
            <Input v-model="formLeft.input1" placeholder="账号" />
          </FormItem>
          <FormItem prop="passwd">
            <Input type="password" v-model="formLeft.passwd" placeholder="密码" />
          </FormItem>
        </Form>
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
          <Checkbox v-model="single">记住密码</Checkbox>
          <div class="forget">
            <div>注册XMall账号</div>
            <div>丨</div>
            <div>忘记密码</div>
          </div>
        </div>
        <div class="btn">
          <Button type="success">登录</Button>
        </div>
        <div>
          <Button>返回</Button>
        </div>
        <!-- 分割线 -->
        <Divider />
        <div class="other">
          <div class="otherTitle">其它账号登录:</div>
					<div class="icon"><img src="../assets/wechat.svg" alt="" class="ico" @click="wait(false)"></div>
					<div class="icon"><img src="../assets/sina.svg" alt="" class="ico" @click="wait(false)"></div>
					<div class="icon"><img src="../assets/qq.svg" alt="" class="ico" @click="wait(false)"></div>
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
      formLeft: {
        input1: "",
        passwd: ""
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
		},
		wait(nodesc) {
                this.$Notice.info({
                    title: '待开发',
                    desc: nodesc ? '' : '此功能正在开发，请稍等'
                });
            },
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
.operation {
  display: flex;
  font-size: 12px;
  width: 248px;
  justify-content: space-between;
}
.cardWord {
  //  text-align:center
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px 0 20px;
}
.title {
  font-size: 18px;
  margin-bottom: 20px;
}
.vpat {
  margin-bottom: 10px;
}
.ivu-checkbox-wrapper {
  width: 30%;
  font-size: 12px;
}
.forget {
  display: flex;
  width: 70%;
  justify-content: flex-end;
  margin-bottom: 20px;
}
.btn {
  margin-bottom: 10px;
}
.ivu-btn-success{
	background-color: rgb(177,177,177);
    border-color:  rgb(177,177,177);
}
.other{
	display: flex;
	font-size: 10px;
	color:rgb(177,177,177) ;
	height: 34px;
	width: 248px;
	align-items: center;
	// justify-content: space-between;
}
.ico {
	width: 14px;
	height: 14px;
	&:hover{
		cursor: pointer;
	}
}
.otherTitle{
	width: 80px;
}
.icon{
	width: 26px;
}
</style>
<template>
  <!-- 注册 -->
  <div class="login_All">
    <div>
      <img src="../assets/水彩粒子背景.jpg" alt class="img" />
    </div>
    <Card class="boxCard">
         <div class="cardWord">
      <p slot="title" class="title">注册 XMall 账号</p>
      <Form ref="formValidate" :model="formValidate" :label-width="80">
        <FormItem prop="name">
          <Input v-model="formValidate.name" placeholder="账号" />
        </FormItem>
        <FormItem prop="passwd">
          <Input type="password" v-model="formValidate.passwd" placeholder="密码" />
        </FormItem>
        <FormItem  prop="passwdCheck">
          <Input type="password" v-model="formValidate.passwdCheck" placeholder="重复密码" />
        </FormItem>
      </Form>
         </div>
    </Card>
  </div>
</template>

<script>
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
  //  text-align:center
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px 0 20px;
}
</style>
<template>
  <!-- 注册 -->
  <div class="login_All">
    <div>
      <img src="../assets/水彩粒子背景.jpg" alt class="img" />
    </div>
        <Card class="boxCard">
          <p slot="title">注册 XMall 账号</p>
          
        </Card>
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
  width:340px
}
</style>
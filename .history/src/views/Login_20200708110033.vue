<template>
  <!-- 登录 -->
  <div class="login_All">
    <div>
      <img src="../assets/水彩粒子背景.jpg" alt class="img" />
    </div>
    <Card style="width:320px" class="boxCard">
      <div style="text-align:center">
        <div><img src="../assets/登录logo.png" alt=""></div>
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
    return {};
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
.boxCard{
    height: 500px;
}
.login_All{
    min-height: 610px;
    min-width: 630px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
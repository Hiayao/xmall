<template>
  <!-- 登录 -->
  <div class="login_All">
    <div>
      <img src="../assets/水彩粒子背景.jpg" alt class="img" />
    </div>
    <Card style="width:320px" class="boxCard">
      <div style="text-align:center">
        <h3>A high quality UI Toolkit based on Vue.js</h3>
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
    height: 300px;
}
.login_All{
    min-height: 500px;
    min-width: 630px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
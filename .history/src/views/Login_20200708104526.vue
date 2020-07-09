<template>
  <!-- 登录 -->
  <div>
    <div>
      <img src="../assets/水彩粒子背景.jpg" alt class="img" />
    </div>
    <Card style="width:320px">
        <div style="text-align:center">
            <img src="../../images/logo.png">
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
</style>
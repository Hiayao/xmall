<template>
  <!-- 首页活动版块 -->
  <div class="activity_All">
    <div class="activity"></div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    activity: {
      type: Array
    }
  },
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
.activity_All {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
.activity{
    width: 1240px;
    height: 200px;
    border:1px solid #999;
    border-radius: 15px;
    background: chartreuse;
}
</style>
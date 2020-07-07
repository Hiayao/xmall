<template>
  <!-- 首页活动版块 -->
  <div class="activity_All">
    <div class="activity">
        <div v-for="item in activity" :key="item.id" class="pictureAll">
            <img :src="item.picUrl" alt="" class="picture">
        </div>
    </div>
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
    border-radius: 15px;
    // background: chartreuse;
     display: flex;
}
.pictureAll {
   width: 25%;
}
.picture{
    width: 100%;
    height: 200px;
    border: 1px solid #999;
}
</style>
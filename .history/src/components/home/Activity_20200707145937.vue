<template>
  <!-- 首页活动版块 -->
  <div class="activity_All">
    <div class="activity">
        <div v-for="(item,index) in activity" :key="item.id" class="pictureAll" :id="pic+(index)">
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
  methods: {
      pic(index){
          return "pic"+ index
      }
  },
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
    border: 1px solid rgb(219, 219, 219);
}
.pic1{
    border-radius: 0 0 15px 15px;
}
</style>
<template>
  <!-- 首页活动版块 -->
  <div class="activity_All">
    <div class="activity">
      <div v-for="(item,index) in activity" :key="item.id" class="pictureAll">
        <div class="shadow">
          <!-- 用:class给循环出来的每一个数据加上一个单独的类名
          类名为pic+index-->
          <img :src="item.picUrl" alt :class="'pic'+ index" />
        </div>
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
.activity {
  width: 1240px;
  height: 200px;
  border-radius: 15px;
  // background: chartreuse;
  display: flex;
}
.pictureAll {
  width: 25%;
  z-index: 1;
  &:hover {
    cursor: pointer;
    // box-shadow:0 0 15px #f00 inset;
  }
}
img {
  width: 100%;
  height: 200px;
  border: 1px solid rgb(219, 219, 219);
  z-index: 1;
  &:hover:before {
    content: "";
    position: absolute;
    width: 310px;
    height: 200px;
    box-shadow: inset 1px 1px 10px;
    -webkit-box-shadow: 0 0 30px #ccc inset;
    -moz-box-shadow: 0 0 30px #ccc inset;
    -o-box-shadow: 0 0 30px #ccc inset;
    
  }
}
.pic0 {
  border-radius: 15px 0 0 15px;
}
.pic3 {
  border-radius: 0 15px 15px 0;
}
.shadow {
  display: flex;
  display: inline-block;
  *display: inline;
  width: 100%;
  height: 200px;
  
}
</style>
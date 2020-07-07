<template>
  <!-- 首页品牌精选，官方精选，品牌周边 -->
  <div class="Selected_All">
    <div class="Selected">
      <div class="title">{{SelectedName}}</div>
      <div class="list">
        <div v-for="item in Selected.slice(0,1)" :key="item.id" class="img1">
          <img :src="item.picUrl" alt class="img1" />
        </div>
        <div class="img2All">
          <div v-for="item in Selected.slice(1,3)" :key="item.id">
            <img :src="item.picUrl" alt class="img2" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    Selected: {
      type: Array
    },
    SelectedName: {
      type: String
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
.Selected_All {
  margin-top: 30px;
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: center;
}
.Selected {
  width: 1240px;
  height: 800px;
}
.title {
  width: 100%;
  line-height: 50px;
  border: 1px solid rgb(194, 194, 194);
  border-radius: 15px 15px 0 0;
  background: rgb(242, 242, 242);
  padding-left: 50px;
  font-size: 20px;
}
.list {
  width: 100%;
  height: 750px;
  background: white;
  border: 1px solid rgb(194, 194, 194);
  border-radius: 0 0 15px 15px;
  display: flex;
}
.img1 {
  width: 50%;
  height: 50%;
}
.img2All {
  width: 50%;
  height: 50%;
  display: flex;
}
.img2 {
  width: 25%;
  height: 50%;
}
</style>
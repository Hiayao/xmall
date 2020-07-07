<template>
  <div class="home_All">
    <Rotation :rotation="rotation"></Rotation>
    <Activity :activity="activity"></Activity>
    <Hot></Hot>
  </div>
</template>

<script>
import Rotation from "../components/home/Rotation";
import Activity from "../components/home/Activity";
import Hot from "../components/home/Hot";
export default {
  name: "",
  props: {},
  components: {
    Rotation,
    Activity,
    Hot
  },
  data() {
    return {
      rotation: [], //轮播图
      activity: [], //活动版块
      hot: [] //热门商品
    };
  },
  methods: {},
  mounted() {
    this.$api
      .getHome()
      .then(res => {
        this.rotation = res.data[0].panelContents; //轮播图
        //  console.log(this.rotation);
        this.activity = res.data[1].panelContents; //活动版块
        // console.log(this.activity);
        this.hot = res.data[2].panelContents; //热门商品
        console.log(this.hot);

        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.home_All {
  height: 1800px;
  background: rgb(237, 237, 237);
}
</style>

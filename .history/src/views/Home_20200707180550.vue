<template>
  <div class="home_All">
    <Rotation :rotation="rotation"></Rotation>
    <Activity :activity="activity"></Activity>
    <Hot :hot="hot"></Hot>
    <Selected :Selected='Selected1'></Selected>
    <Selected :Selected='Selected2'></Selected>
    <Selected :Selected='Selected3'></Selected>

  </div>
</template>

<script>
import Rotation from "../components/home/Rotation";
import Activity from "../components/home/Activity";
import Hot from "../components/home/Hot";
import Selected from "../components/home/Selected";
export default {
  name: "",
  props: {},
  components: {
    Rotation,
    Activity,
    Hot,
    Selected,
  },
  data() {
    return {
      rotation: [], //轮播图
      activity: [], //活动版块
      hot: [], //热门商品
      Selected1:[], //官方精选
      Selected2:[], //品牌周边
      Selected3:[], //品牌精选
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
        // console.log(this.hot);
        this.Selected1 = res.data[3].panelContents; //官方精选
        console.log(this.Selected1);
        this.Selected2 = res.data[4].panelContents; //品牌周边
        console.log(this.Selected2);
        this.Selected3 = res.data[5].panelContents; //品牌精选
        console.log(this.Selected3);

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

<template>
  <div class="home_All">
    <!-- 首页轮播图 -->
    <Rotation :rotation="rotation"></Rotation>
    <!-- 活动版块1 -->
    <Activity :activity="activity"></Activity>
    <!-- 热门商品 -->
    <Hot :hot="hot"></Hot>
    <!-- 首页品牌精选，官方精选，品牌周边 -->
    <Selected :Selected='Selected1' :SelectedName='SelectedName1'></Selected>
    <Selected :Selected='Selected2' :SelectedName='SelectedName2'></Selected>
    <Selected :Selected='Selected3' :SelectedName='SelectedName3'></Selected>
    <!-- 活动版块2 -->
    <ActivityT></ActivityT>

  </div>
</template>

<script>
import Rotation from "../components/home/Rotation"; //首页轮播图
import Activity from "../components/home/Activity"; //活动版块1
import Hot from "../components/home/Hot"; //热门商品
import Selected from "../components/home/Selected"; //首页品牌精选，官方精选，品牌周边
import ActivityT from "../components/home/ActivityT"; //活动版块2
export default {
  name: "",
  props: {},
  components: {
    Rotation, //首页轮播图
    Activity, //活动版块1
    Hot, //热门商品
    Selected, //首页品牌精选，官方精选，品牌周边
    ActivityT, //活动版块2
  },
  data() {
    return {
      rotation: [], //轮播图
      activity: [], //活动版块
      hot: [], //热门商品
      Selected1:[], //官方精选
      Selected2:[], //品牌周边
      Selected3:[], //品牌精选

      SelectedName1:'官方精选',
      SelectedName2:'品牌周边',
      SelectedName3:'品牌精选',

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
        // console.log(this.Selected1);
        this.Selected2 = res.data[4].panelContents; //品牌周边
        // console.log(this.Selected2);
        this.Selected3 = res.data[5].panelContents; //品牌精选
        // console.log(this.Selected3);

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
  // height: 1800px;
  background: rgb(237, 237, 237);
}
</style>

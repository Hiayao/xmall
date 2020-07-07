<template>
 <div class="home_All">
<Rotation :rotation='rotation'></Rotation>
<Activity :activity='activity'></Activity>
 </div>
</template>

<script>
import Rotation from '../components/home/Rotation'
import Activity from '../components/home/Activity'
 export default {
   name: '',
   props: {
   },
   components: {
Rotation,Activity,
   },
   data () {
     return {
       rotation:[], //轮播图
       activity:[],
     }
   },
   methods: {

   },
   mounted() {
     this.$api.getHome().then(res => {
       this.rotation = res.data[0].panelContents //轮播图
       this.activity = res.data[1].panelContents //活动版块
       console.log(res.data);
      //  console.log(this.rotation);
      console.log(this.activity);
     }).catch(err => {
       console.log(err);
     })
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.home_All{
  height: 1800px;
  background: rgb(237,237,237);
}
</style>

<template>
 <!-- 首页活动版块2 -->
 <div>
<div class="activity_All">
    <div class="activity">
        <div v-for="item in ActivityT" :key="item.id" class="imgAll">
            <img :src="item.picUrl" alt="" class="img">
        </div>
    </div>
</div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
       ActivityT:{
           type:Array
       }
   },
   components: {

   },
   data () {
     return {

     }
   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
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
.imgAll {
    width: 33%;
    height: 100%;
}
</style>
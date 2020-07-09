<template>
 <!-- 首页活动版块2 -->
 <div>
<div class="activity_All">
    <div class="activity">
        <div v-for="(item,index) in activityT.slice(1,4)" :key="item.id" class="imgAll" @click="gotoDetails(item)">
            <img :src="item.picUrl" alt="" class="img" :class="'img' + index">
        </div>
    </div>
</div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
       activityT:{
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
gotoDetails(item){
      // 另开一个网页打开路由并传参
      window.open('/details?productId='+ item.productId)
    }
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
  background: white;
  display: flex;
  border: 1px solid rgb(194, 194, 194);
}
.imgAll {
    width: 33.3%;
    height: 100%;
    &:hover{
        cursor: pointer;
        box-shadow: inset 0 0 15px rgb(194, 194, 194);
        border-radius: 15px 0 0 15px;
        
    }
 
}
.img{
    width: 78%;
    height: 100%;
}
.img0{
    border-radius: 15px 0 0 15px;
}

</style>
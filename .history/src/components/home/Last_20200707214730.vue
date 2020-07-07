<template>
<!-- 首页底部 -->
 <div class="Last_All">
     <div class="Last">
         <div class="lastOne">
             <div class="wordOne"></div>
         </div>
     </div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
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
.Last_All{
    margin-top: 60px;
  width: 100%;
  height: 380px;
  display: flex;
  justify-content: center;
  background: white;
}
.Last{
    width: 1240px;
  height: 390px;
  background: white;
}
.lastOne{
    width: 100%;
    height: 260px;
    border-bottom: 1px solid rgb(204, 204, 204);
}
.wordOne{
    width: 100%;
    height: 150px;
    padding-top: 60px;
    background: wheat;
}
</style>
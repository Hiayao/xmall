<template>
<!-- 热门商品 -->
 <div class="hot_All">
     <div v-for="item in hot" :key="item.id">
         <img :src="item.picUrl" alt="">
     </div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
       hot:{
           sype:Array
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
.hot_All{
    display: flex;
}
</style>
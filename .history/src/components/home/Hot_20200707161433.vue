<template>
<!-- 热门商品 -->
 <div>
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

</style>
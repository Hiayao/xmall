<template>
<!-- 首页轮播图 -->
 <div>
   <div v-for="item in rotation" :key="item.id">{{item.id}}</div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
     rotation:{
       type: Array
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
<template>
<!-- 商品详情页 -->
 <div class="Details_All">
     <div class="All">

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
         productId:''
     }
   },
   methods: {

   },
   mounted() {
this.productId = window.location.search.substring(item._id);
console.log(this.productId);
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.Details_All {
  background: rgb(237, 237, 237);
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 60px;
}
.All {
  width: 1240px;
  height: 100px;
  padding: 0 20px 0 20px;
  border-radius: 15px;
  background: white;
  margin-top: 30px;
}
</style>
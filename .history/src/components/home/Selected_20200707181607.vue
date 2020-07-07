<template>
<!-- 首页品牌精选，官方精选，品牌周边 -->
 <div class="Selected_All">
     <div class="Selected"></div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
        Selected:{
            type:Array
        },
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
.Selected_All{
    margin-top: 30px;
    width: 100%;
    height: 800px;
    display: flex;
    justify-content: center;
}
.Selected{
    width: 1240px;
    height: 800px;
    background: olivedrab;
}
</style>
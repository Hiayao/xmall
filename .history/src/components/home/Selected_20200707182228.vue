<template>
<!-- 首页品牌精选，官方精选，品牌周边 -->
 <div class="Selected_All">
     <div class="Selected">
          <div class="title">{{SelectedName}}</div>
     </div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
        Selected:{
            type:Array
        },
        SelectedName:{
            type:String
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
}
.title {
  width: 100%;
  line-height: 50px;
  border: 1px solid rgb(194, 194, 194);
  border-radius: 15px 15px 0 0;
  background: rgb(242, 242, 242);
  padding-left: 50px;
  font-size: 20px;
}
</style>
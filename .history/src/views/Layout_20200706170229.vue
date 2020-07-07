<template>
 <div>
     <div class="topAll">
         <div class="top">
             <div class="logo">M</div>
         </div>
     </div>
     <router-view/>
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
.topAll {
    background: black;
    width: 100%;
    height: 100px;
}
.top {
    width: 1240px;
    height: 100%;
}
.logo{
    font-family:Helvetica;
    width: 50px;
    height: 50px;
    background: white;
    font-size: 20px;
    font-weight: 500;
    color: black;
}
</style>
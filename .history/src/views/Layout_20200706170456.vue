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
    width: 34px;
    height: 34px;
    background: white;
    font-size: 30px;
    font-weight: 500;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
}
</style>
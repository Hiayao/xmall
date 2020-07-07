<template>
 <div>
     <div class="topAll">
         <div class="top"></div>
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
</style>
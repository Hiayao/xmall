<template>
<!-- 首页轮播图 -->
 <div>
   <div v-for="item in rotation" :key="item.id">
     <Carousel autoplay v-model="value2" loop>
        <CarouselItem>
            <div class="demo-carousel">1</div>
        </CarouselItem>
        
    </Carousel>
   </div>
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
value2: 0
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
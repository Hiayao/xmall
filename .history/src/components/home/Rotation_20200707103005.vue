<template>
<!-- 首页轮播图 -->
 <div>
   <div>
     <Carousel autoplay v-model="value2" loop height='200px'>
        <CarouselItem>
            <div class="demo-carousel">1</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">2</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">3</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">4</div>
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
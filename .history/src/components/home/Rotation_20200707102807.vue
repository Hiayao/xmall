<template>
<!-- 首页轮播图 -->
 <div>
   
     <Carousel autoplay v-model="value2" loop>
        <CarouselItem>
          <div v-for="item in rotation" :key="item.id">
            <div class="demo-carousel">1</div>
            </div>
        </CarouselItem>
        
    </Carousel>
   
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
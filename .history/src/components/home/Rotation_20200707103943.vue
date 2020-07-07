<template>
<!-- 首页轮播图 -->
 <div>
   <div class="rotation">
     <Carousel autoplay v-model="value2" loop>
        <CarouselItem>
            <div class="demo-carousel" v-for="item in rotation" :key="item.id"><img :src="item.picUrl" alt=""></div>
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
.rotation{
  width: 1240px;
}
</style>
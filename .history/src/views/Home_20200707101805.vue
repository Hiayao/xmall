<template>
 <div class="home_All">
<Rotation></Rotation>
 </div>
</template>

<script>
import Rotation from '../components/home/Rotation'
 export default {
   name: '',
   props: {
   },
   components: {
Rotation,
   },
   data () {
     return {
       rotation:[]
     }
   },
   methods: {

   },
   mounted() {
     this.$api.getHome().then(res => {
       this.rotation = res.data[0].panelContents
       console.log(res.data);
       console.log(this.rotation);
     }).catch(err => {
       console.log(err);
     })
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.home_All{
  height: 1000px;
  background: rgb(237,237,237);
}
</style>

<template>
<!-- 首页底部 -->
 <div class="Last_All">
     <div class="Last">
         <div class="lastOne">
             <div class="wordOne">
                 <div class="wordAll">
                     <div>
                         <div>订单服务</div>
                         <div>购买指南</div>
                         <div>支付方式</div>
                         <div>送货政策</div>
                     </div>
                     <div>
                         <div>服务支持</div>
                         <div>官方开源</div>
                         <div>项目前端</div>
                         <div>项目后端</div>
                     </div>
                     <div>
                         <div>自助服务</div>
                         <div>个人博客</div>
                         <div>个人简介</div>
                         <div>个人视频</div>
                     </div>
                     <div>
                         <div>其他项目</div>
                         <div>XPay支付系统</div>
                         <div>数据共享</div>
                         <div>待开发…</div>
                     </div>
                     <div>
                         <div>友情链接</div>
                         <div>宇cccc</div>
                         <div>Smartisan</div>
                         <div>Vue</div>
                     </div>
                     <div>
                         <div>关注我吧</div>
                         <div>腾讯QQ</div>
                         <div>新浪微博</div>
                         <div>官方邮箱</div>
                     </div>
                 </div>
             </div>
         </div>
     </div>
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
.Last_All{
    margin-top: 60px;
  width: 100%;
  height: 380px;
  display: flex;
  justify-content: center;
  background: white;
}
.Last{
    width: 1240px;
  height: 390px;
  background: white;
}
.lastOne{
    width: 100%;
    height: 260px;
    border-bottom: 1px solid rgb(204, 204, 204);
    padding-top: 70px;
}
.wordOne{
    width: 100%;
    height: 150px;
    
    background: wheat;
}
.wordAll{
    width: 70%;
    height: 100%;
    background: violet;
}
</style>
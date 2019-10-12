<template> 


 <div class="right">
     <p>评论回复</p>
    <p v-show="comtents.length===0">暂时没有评论 点击左侧添加评论</p>
     <ul class="list">
       <Item v-for="(item,index) in comtents" :key="index" :item="item" :deletcomtents="deletcomtents" :index="index"/>
     </ul>
   </div>
</template> 


<script> 

import Item from 'components/Item'
export default {

 props:['comtents','deletcomtents'],

 components:{
 	Item
 }


} 


</script>

<style lang="stylus" rel="stylesheet/stylus">
.right
  flex-basis 70%  
  box-sizing border-box
  padding 15px
  .list
    width 100%
    


</style>
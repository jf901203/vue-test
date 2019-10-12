<template> 


 <div class="right">
         <p>评论回复：</p>
         <p v-show="comments.length===0">暂时没有评论 点击左侧添加评论</p>
         <ul>
           <Itme :comments="comments" v-for="(item,index) in comments" 
           :key="index" :item="item" :deletComtents="deletComtents" :index="index"/>
         </ul>
       </div>

</template> 


<script> 

import Itme from 'components/item'
export default {
  props:['comments','deletComtents'],
  components:{
  	Itme
  }


} 


</script>

<style>
	
.right{
  border:1px solid blue;
  flex-basis:70%;
}

</style>
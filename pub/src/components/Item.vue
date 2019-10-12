<template> 


<li @mouseenter="isShow(true)" @mouseleave="isShow(false)" :class="{bg:msg}">
 <input type="checkbox" v-model="item.complete">
 <span>{{item.title}}</span>
 <span class="fix" @click="del">删除</span>
</li>

</template> 


<script> 

import Pubsub from 'pubsub-js'
export default {
data(){
	return{
		msg:false
	}
},
 props:{
 	item:Object,
 	index:Number
 },
 methods:{
 	isShow(isOk){
   if(isOk){
   	this.msg=!this.msg
   }else{
   	this.msg=!this.msg
   }
 	},

 	del(){
     const {index,item}=this

    if(window.confirm(`确定删除${item.title}吗?`)){

     // 发布事件
     Pubsub.publish('delItem',index)

    }

     

 }

 },




} 


</script>

<style>
	
li{
  position: relative;
  text-align: left;
  border-bottom: 1px solid #ccc;
  padding:5px 0;
}
.fix{
  position:absolute;
  top:0;
  right:5px;
  background:red;
  color:#fff;
  display:inline-block;
  padding:0 5px;
  border-radius: 5px;
}
.bg{
	background:#ccc;
}
</style>
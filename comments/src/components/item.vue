<template> 


<li>
   <p>{{item.name}}</p>
   <p>{{item.comment}}</p>
   <span @click="deletComtent">删除</span>
 </li>

</template> 


<script> 


export default {

 props:{
   
   item:Object,
   deletComtents:Function,
   index:Number

 },

 methods:{
 	deletComtent(){
 		const {item,deletComtents,index}=this
 		if(window.confirm(`确定删除${item.name}吗?`)){
      
     deletComtents(index)

 		}
 	}
 }

} 


</script>

<style>
	
li{
  border-bottom:1px solid #ccc;
  padding:5px 0;
  text-align: left;
  position:relative;
}
span{
	display:inline-block;
	width: 50px;
	height:30px;
	background:blue;
	color:#fff;
	position: absolute;
	right:10px;
	top:0;
	text-align: center;
	line-height: 30px;
}

</style>
<template> 


	<div class="root"> 

   <h1>{{$route.params.id}}</h1>
   <ul>
   	<li>
   		{{MessageDetal.id}}
   	</li>
   	<li>
   		{{MessageDetal.title}}
   	</li>
   	<li>
   		{{MessageDetal.content}}
   	</li>
   </ul>
	</div> 

</template> 


<script> 


export default {

data(){

	return{
		MessageDetal:{
			
		},

	}
},

// 
mounted(){

  setTimeout(()=>{
   //局部变量
   const AllMessage=[
   {id:1,title:'message01',content:'message0001'},
   {id:2,title:'message02',content:'message0002'},
   {id:3,title:'message03',content:'message0003'},
   {id:4,title:'message04',content:'message0004'},
   {id:5,title:'message05',content:'message0005'}

   ]
   // 有时候获取到文本 *1就会发生类型转换
 // 把局部变量保存到组件对象上

  this.AllMessage=AllMessage
  const id=this.$route.params.id*1

  this.MessageDetal=AllMessage.find((item)=>{

   return item.id===id

  })

  },1000)

},

watch:{ // $route  路由路径发生了改变 就会触发回调函数的执行 value就是$route对象

 $route:function(value){
  
  const id=value.params.id*1
  this.MessageDetal=this.AllMessage.find((item)=>{
  
   return item.id===id

  })

 }

}


} 


</script>

<style>
	


</style>
<template> 

<div class="top">
  <input type="text" placeholder="请输入按enter键确认" @keyup.enter="addArr" v-model="title">
</div>


</template> 


<script> 


export default {

data(){
	return{
		title:'',
		complete:false
	}
}, 
props:{
	addDataArr:Function
},
methods:{
	
	addArr(){

   const title=this.title.trim()
   const complete=this.complete
    
   if(!title){
   	 alert("必须输入")
   	 return
   }

   const obj={
   	title,
   	complete
   }

 this.addDataArr(obj)
 this.title=''

	}
}

} 


</script>

<style>
	.top input{
  width:100%;
  height:25px;
  border:none;
  border:1px solid #ccc;
  border-radius: 5px;
}


</style>
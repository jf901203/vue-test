<template> 


	<div class="top">
      <input type="text" placeholder="请输入内容按enter确认" @keyup.enter="addTo" v-model="title">
    </div>

</template> 


<script> 


export default {

data(){
	return{
		title:''
	}
},
methods:{

	addTo(){
    
   const title=this.title.trim()

   if(!title){
   	return
   }
   
   const obj={
   	title:title,
   	compiles:false
   }

   this.$store.dispatch('addTo',obj)

   this.title=''

	}
}


} 


</script>

<style>
	
.top input{

  width: 80%;
  height:25px;
  border:none;
  border:1px solid #ccc;
  border-radius: 2px;
}


</style>
<template> 

<div class="top">
   <h2>搜索 github users</h2>
   <input type="text" v-model="searchName">
   <button @click="search">提交</button>
</div>

</template> 


<script> 

import Pubsub from 'pubsub-js'
export default {

data(){
	return{
		searchName:''
	}
},
methods:{

	search(){
    
  const searchName=this.searchName

  // this.searchName=''

  Pubsub.publish('search',searchName)

   

	}
}


} 


</script>

<style>
	.top{
  padding: 50px;
  background:#ccc;
  box-sizing:border-box;
}


</style>
<template> 

<div class="search">
  <p>search github Users</p>
  <input type="text" placeholder="enter the name your search" v-model="userName"> 
  <button @click="searchs">search</button>
</div>

</template> 


<script> 

import Pubsub from 'pubsub-js'
export default {

 data(){
 	return{
   userName:''
 	}
 },

mounted(){


},
 methods:{

  searchs(){

   const userName=this.userName.trim()
   // 通知消息
   if(userName){

    Pubsub.publish('SearchEvent',userName)
    
   }

  }

 }

} 


</script>

<style>
	
.search{
  width: 100%;
  padding:50px 20px 30px;
  background:  #ccc;
  box-sizing:border-box;
}
input{
	border:none;
	border:1px solid #ccc;
	height:25px;
	border-radius: 2px;
}
</style>
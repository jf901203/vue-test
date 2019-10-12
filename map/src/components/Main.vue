<template> 

<div class="center">
  <h2 v-if="userName">请输入用户</h2>
  <h2 v-if="loading">Loading...</h2>
  <h2 v-if="errorMsg">{{errorMsg}}</h2>
  <ul class="list">
    <li v-for="(item,index) in users" :key="index">
      <a :href="item.url"><img :src="item.avatar"></a>
      <p>{{item.name}}</p>
    </li>
    
  </ul>

</div>

</template> 


<script> 

import Pubsub from 'pubsub-js'
import axios from 'axios'
export default {

 data(){
 	return{
 		userName:true,
 		loading:false,
 		errorMsg:'',
 		users:null   //[{name:'',url:'',avatar:''}]
 	}
 },


/*

更新状态(请求中)

请求成功 更新状态

请求失败 更新状态

*/

 mounted(){

 	Pubsub.subscribe('search',(msg,searchName)=>{

   const url=`https://api.github.com/search/users?q=${searchName}`
   
   //更新状态(请求中)


   this.userName=false
   this.loading=true
   this.users=null
   axios.get(url).then((response)=>{
    
    const res=response.data

   const users=res.items.map((item)=>({
   	name:item.login,
   	url:item.html_url,
   	avatar:item.avatar_url
   }))
   
   this.loading=false
   this.users=users
   

   }).catch((error)=>{
     this.loading=false
     this.errorMsg="请求失败"

   })



 	})


 }


} 


</script>

<style>
	.center{
  width: 100%;
}
.list{
  width:100%;
  display:flex;
  justify-content:space-between;
  flex-wrap:wrap;

}

li{
  flex-basis:32%;
  margin-top: 0.5%;
}
li img{
  width:100%;
}


</style>
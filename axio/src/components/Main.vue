<template> 

 <div class="center">
 	<h1 v-if="searchName">请输入用户</h1>
 	<h1 v-if="loading">Loading...</h1>
 	<h1 v-if="errorMsg">{{errorMsg}}</h1>
  <ul class="list">
    <li v-for="(item,index) in users" :key="index">
      <a :href="item.url"><img :src="item.avatar" alt=""></a>
      <p>{{item.name}}</p>
    </li>
    
    
  </ul>
</div>

</template> 


<script> 

import axios from 'axios'
import Pubsub from 'pubsub-js'
export default {

 data(){
 	return{
 		searchName:true,
 		loading:false,
    errorMsg:'',
    users:null
 	}
 },

 mounted(){
    // 接收消息
   	Pubsub.subscribe('SearchEvent',(msg,userName)=>{

    // 发送ajax请求

    const url=`https://api.github.com/search/users?q=${userName}`

      // 更新请求状态(请求中的状态)
      this.searchName=false
      this.loading=true
      this.users=null
      this.errorMsg=''


    axios.get(url).then(response=>{
     // 成功，更新状态
      
      const res=response.data

      const users=res.items.map((item)=>({
       avatar:item.avatar_url,
       name:item.login,
       url:item.html_url

      }))
      this.loading=false
      this.users=users

    }).catch(error=>{

     
     
     this.loading=false
     this.errorMsg="请求出错"

    })

 	})

 }


} 


</script>

<style>

.center{
  width:100%;
}
.list{
  width:100%;
  display:flex;
  list-style: none;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap:wrap;
}
.list li{
  flex-basis:32%;
  border:1px solid #ccc;
  margin-top: 0.5%;
}
img{
  width:100%;
}	


</style>
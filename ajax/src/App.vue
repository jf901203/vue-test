<template>
  <div id="app">
    <!-- 没有值的时候显示 -->
   <div v-if="!gitName">loading......</div>
   <div v-else>最受欢迎的库是<a :href="gitUrl">{{gitName}}</a></div>

   <div v-if="!gitNames">
     <img src="./load.jpg">
   </div>
   <div v-else>最受欢迎的库是<a :href="gitUrls">{{gitNames}}</a></div>

  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'App',
  data(){
    return{
      gitUrl:'',
      gitName:'',
      gitUrls:'',
      gitNames:''
    }
  },
  mounted(){
    // 使用vue-resource发送ajax请求
    this.$http.get('https://api.github.com/search/repositories?q=v&sort=stars').then(response=>{
      const res=response.data.items[0]
       // 更新数据
      this.gitName=res.name
      this.gitUrl=res.html_url

    },response=>{
      console.log('出错')
    })
    
  const url="https://api.github.com/search/repositories?q=v&sort=stars"
   
   axios.get(url).then(response=>{
     const res=response.data.items[0]
      // 更新数据
      this.gitNames=res.name
      this.gitUrls=res.html_url
   }).catch(error=>{

     console.log('请求出错')

   })

  }
 
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

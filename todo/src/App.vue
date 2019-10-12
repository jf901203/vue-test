<template>
  <div id="app">
    <div class="main">
      <!-- 将函数对象传递到组件对象 -->
      <Top :addTodo="addTodo"/>
      
      <ul class="list">
       
       <Main  v-for="(item,index) in todos" :key="index" :item="item" :delTo="delTo" :index="index"/>

      </ul>
     <Foot :todos="todos" :seleAll="seleAll" :deleteAll="deleteAll"/>
    </div>
  </div>
</template>

<script>

import Top from 'components/Top'
import Main from 'components/Main'
import Foot from 'components/Foot'
export default {

data(){
  return{
    todos:[
    {title:'吃饭',complete:true},
    {title:'睡觉',complete:false},
    {title:'打球',complete:false},
    {title:'游泳',complete:false},
    {title:'玩游戏',complete:false},
    {title:'放牛',complete:false},
    {title:'摘棉花',complete:false},
    ],
    num:10
  }
},

components:{
  Top,
  Main,
  Foot
},
methods:{
  // 都是回调函数
  addTodo(obj){
   this.todos.unshift(obj)
  },
  delTo(index){
    this.todos.splice(index,1)
  },
  // 全选/反选
  seleAll(check){
    if(check){
      this.todos.forEach((item)=>{
        item.complete=check
      })
     
    }else{

     this.todos.forEach((item)=>{
        item.complete=check

      })
    }

  },

  // 删除所有选中的 留下没有选中的

  deleteAll(){
    
   this.todos=this.todos.filter((item)=>{
      return !item.complete
    })

  }

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
  
}
.main{
  width: 60%;
  margin:auto;
  border:1px solid #ccc;
  padding:5px;
  box-sizing:border-box;
}



</style>

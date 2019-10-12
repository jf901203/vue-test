<template>
  <div id="app">
   <div class="main">
     <Header class="hed">
       <p slot="left">北京</p>

       <p slot="right">天津</p>
     </Header>
     <Top/>
     <List :arr="arr"/>
     <Foot :arr="arr"/>
     <Foot>
       <input type="checkbox" v-model="isCheck" slot="isCheck">
       <span slot="text">已完成{{filterArr}}/全部{{arr.length}}</span>
       <span class="del" @click="allArr" slot="del">删除已完成</span>
     </Foot>
   </div>
  </div>
</template>

<script>
import Pubsub from 'pubsub-js'
import Top from 'components/Top'
import List from 'components/List'
import Foot from 'components/Foot'
import Header from 'components/Header'

import storage from 'util/storage'

export default {
  name: 'App',
  data(){
    return{
      arr:storage.readeStorage()
    }
  },

 mounted(){ //执行异步函数


  // 绑定事件
  Pubsub.subscribe('delItem',(msg,index)=>{
    this.arr.splice(index,1)
  }),
// 绑定事件
  Pubsub.subscribe('addItem',(msg,obj)=>{
    this.arr.unshift(obj)
  }),
// 绑定事件
  Pubsub.subscribe('deleteAll',(msg)=>{
    this.arr=this.arr.filter((item)=>{
      return !item.complete
    })

  })

 },

computed:{

  filterArr(){
    
    const {arr}=this

   return arr.reduce((total,item)=>{

      return total+(item.complete?1:0)

    },0)

  },
  // 每一个对象都有get set方法
  isCheck:{
    get(){
      // return true
      return this.filterArr===this.arr.length && this.filterArr>0
    },
    set(value){

      const {arr}=this
      arr.forEach((item)=>{

        item.complete=value

      })
    }
  }

},

watch:{

 arr:{
  deep:true,
  // handler:function(value){
  
  //   storage.saveStorage(value)

  // }
  // 不是调用 通过这个storage的 saveStorage属性访问到值 这个值是一个函数 
  //现在是将一个函数传递给handler
  /*
  
  handler:storage.saveStorage 一样的

  handler:function(value){
  
    window.localStorage.setItem(ARR,JSON.stringify(value))

  }
 

  */
  handler:storage.saveStorage

  

 }


},


methods:{
 
 allArr(){

  Pubsub.publish('deleteAll')
  
 }

}
,

  components: {
  Top,
  List,
  Foot,
  Header
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
  width: 80%;
  margin: auto;
  padding:10px;
  border:1px solid #ccc;
}
.hed{
  width:100%;
  display: flex
}
.hed>p{
  flex:1;
}



</style>

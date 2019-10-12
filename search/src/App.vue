<template>
  <div id="app">
    <div class="mian">
      <Top :addDataArr="addDataArr"/>
      <List :dataArr="dataArr" :delDataArr="delDataArr"/>
      <Foot :dataArr="dataArr" :delSlecte="delSlecte"/>
    </div>
  </div>
</template>

<script>

import Top from 'components/Top'
import List from 'components/List'
import Foot from 'components/Foot'
export default {
  data(){
    return{
      // 从localStorage中获取arr_key文本字符串
      dataArr:JSON.parse(window.localStorage.getItem('arr_key')||'[]')
    }
  },
  components:{
    Top,
    List,
    Foot
  },

  watch:{
   
   dataArr:{
    // 深度监视
     deep:true,
     handler:function(val){
      // 把数据存储到本地存储中 以json字符串的形式存储
       window.localStorage.setItem('arr_key',JSON.stringify(val))
     }
   }

  },

  // 数据在那里改变数据的行为就在哪里
  methods:{
    addDataArr(obj){
      this.dataArr.unshift(obj)
    },
    delDataArr(index){
      this.dataArr.splice(index,1)
    },
    delSlecte(){
         // 删除被选中的 留下没有选中的
       this.dataArr= this.dataArr.filter((item)=>{
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
.mian{
  width: 60%;
  padding:10px;
  box-sizing:border-box;
  margin:auto;
  border:1px solid #ccc;

}




</style>


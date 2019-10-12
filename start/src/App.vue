<template>

<div class="root">

 <div class='header'>
   请发表对Vue的评论
 </div>
 <div class="content">
   <Add :addComtents='addComtents'></Add>
   <!-- 标签属性通讯 -->
  <List :comtents="comtents" :deletcomtents="deletcomtents"></List>
 </div>

</div>
 
</div>



</template>

<script>
// 引入组件对象
import Add from 'components/Add'
import List from 'components/List'
export default {
  name: 'App',

  data(){
    return{

     comtents:[

     {name:'Bob',comtent:'Vue不错'},
     {name:'Rose',comtent:'Vue so ease'},
     {name:'Tom',comtent:'React不错'},
     {name:'Jack',comtent:'Vue 我喜欢'}

     ]


    }
  },

methods:{

  addComtents(comtent){
    
    this.comtents.unshift(comtent)

  },

  deletcomtents(index){

    this.comtents.splice(index,1)
  }

},
  // 映射组建
 components:{
  List,
  Add
 }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.header
  background #ccc
  height 100px
  line-height 100px
  text-align center
.content
  display:flex
  width 100%
  justify-content space-around
  

           
</style>

<template> 

	 <li>  
     <p>{{item.name}}</p>
     <p>{{item.comtent}}</p>
     <button class="btn" @click="deleteItem">删除</button>
     </li>

</template> 


<script> 


export default {

 props:{
 	item:Object,
  deletcomtents:Function,
  index:Number
 },
 methods:{

  deleteItem(){
   const {item,deletcomtents,index} =this
   if(window.confirm(`确定删除${item.name}吗?`)){
      
     deletcomtents(index)

   }

  }
 }
} 


</script>

<style lang="stylus" rel="stylesheet/stylus">
li:first-child
  width 100%
  border-top 1px solid #999
li 
  border 1px solid #999
  border-top none
  position relative
  p:last-child
    text-indent 50px
    font-size 12px
    line-height 30px 	
  .btn
    position absolute
    right 5px
    top 0
</style>
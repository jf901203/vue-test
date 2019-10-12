<template> 

<div class="foot">
  <input type="checkbox" v-model="isCheck">
  <span>已完成{{filterArr}}/全部{{dataArr.length}}</span>
  <span class="clear" @click="allDel">清除已完成的任务</span>
</div>

</template> 


<script> 


export default {
props:{
  dataArr:Array,
  delSlecte:Function
 },
 computed:{
  filterArr(){
    // 统计被选中的个数
   return this.dataArr.reduce((total,item)=>{
      return total+(item.complete?1:0)
    },0)
  },

 // 全选与反选
isCheck:{
  get(){
   return this.filterArr===this.dataArr.length && this.filterArr>0
  },
  set(value){
    if(value){
      this.dataArr.forEach((item)=>{
        item.complete=true
      })
    }else{
     this.dataArr.forEach((item)=>{
        item.complete=false
      })
    }
  }
}

 },

 methods:{
  allDel(){
   this.delSlecte()
  }
 }

} 


</script>

<style>
	.foot{
  text-align: left;
  position: relative;
}
.clear{
  position: absolute;
  right:5px;
  background:red;
  line-height: 25px;
  top:2px;
  display:inline-block;
  padding:0 5px;
  border-radius: 3px;
  color:#fff;
}


</style>
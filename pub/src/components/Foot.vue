<template> 


<div class="foot">
       <p class="ft">
         <!-- <input type="checkbox" v-model="isCheck">
         <span>已完成{{filterArr}}/全部{{arr.length}}</span>
         <span class="del" @click="allArr">删除已完成</span> -->

          <slot name="isCheck"></slot>
          <slot name="text"></slot>
          <slot name="del"></slot>
          
       </p>
     </div>

</template> 


<script> 


// export default {

// // props:{
// // 	arr:Array
// // },

// // computed:{

// //   filterArr(){
    
// //     const {arr}=this

// //    return arr.reduce((total,item)=>{

// //     	return total+(item.complete?1:0)

// //     },0)

// //   },
// //   // 每一个对象都有get set方法
// //   isCheck:{
// //   	get(){
// //   		return this.filterArr===this.arr.length
// //   	},
// //   	set(value){
// //   		const {arr}=this
// //   		arr.forEach((item)=>{
// //   			item.complete=value
// //   		})
// //   	}
// //   }

// // },

// // methods:{
 
// //  allArr(){

// //  	Pubsub.publish('deleteAll')
 	
// //  }

// // }

// // } 


</script>

<style>
	
.ft{
  position:relative;

}
.del{
  position:absolute;
  right:5px;
  background:red;
  padding:0 5px;
  border-radius: 3px;
  color:#fff;
}

</style>
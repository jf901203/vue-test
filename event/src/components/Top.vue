<template> 


	<div class="root">
		<div>
			<input type="text" v-model="name">
			<input type="text" v-model="age">
			<button @click="adds">添加</button>
		</div>
    <ul>
    	<li v-for="(item,index) in arr" :key="index" >
    		<span>{{item.name}}</span>
    		<span>{{item.age}}</span>
    		<span @click="del(index)">删除</span>
    	</li>
    </ul>


	</div> 

</template> 


<script> 
import Pubsub from 'pubsub-js'

export default {
	data(){
		return{
			name:'',
			age:0
		}
	},
props:{
	arr:Array
},
methods:{

 del(index){

  this.$emit('del',index)
   
 },



 adds(){
   
  const name=this.name
  const age=this.age

  var obj={name,age}
   //触发
   Pubsub.publish('adds',obj)

 },

}


} 


</script>

<style>
	


</style>
<template> 


	<div class="top">
       <input type="text" class="add" v-model="title" @keyup.enter="addArr">
   </div>

</template> 


<script> 
import Pubsub from 'pubsub-js'

export default {

 
data(){
	return{
		title:'',
		complete:false
	}
},

methods:{
	addArr(){
    
    const title=this.title.trim()
    const complete=this.complete

    if(!title){
    	alert("必须输入")
    	return
    }

    const obj={
    	title,
    	complete
    }

    Pubsub.publish('addItem',obj)
   
   this.title=''
   

	},


}

} 


</script>

<style>
	
.add{
  border:none;
  border:1px solid #ccc;
  height:30px;
  width:100%;
  border-radius: 5px;
}

</style>
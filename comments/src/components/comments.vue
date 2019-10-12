<template> 

<div class="left">
         <p>
           用户名
         </p>
         <input type="text" v-model="name">
         <p>评论内容</p>
         <textarea name="" id="" cols="30" rows="10" v-model="comment"></textarea>
         <br>
         <button @click="add">提交</button>
       </div>

</template> 


<script> 

export default {
	data(){
		return{
			name:'',
		  comment:''
		}
	},
props:{

  addComment:Function,
  required:true

},

methods:{

	add(){
   
    const name=this.name.trim()
    const comment=this.comment.trim()
    if(!name || !comment){
    	alert("不能为空")
    	return
    }

	 const obj={
	  	name,
	  	comment
	  }
  
  this.addComment(obj)

  this.name=''
  this.comment=''


	}
}

} 


</script>

<style>
	
.left{
  border:1px solid blue;
  flex-basis:30%;
}


</style>
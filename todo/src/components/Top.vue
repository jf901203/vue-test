<template> 


<p class="top">

	<input type="text" placeholder="输入内容按enter确认" @keyup.enter="addTo" v-model="title">

</p>

</template> 


<script> 


export default {
	data(){
		return{
			complete:false,
			title:''
		}
	},
	props:{
	  addTodo:{
      type:Function,
      required: true
    }
	},
  methods:{

  	addTo(){
    
     // 收集数据
     const title=this.title.trim()
     const complete=this.complete
     // 检测数据的合法性
     if(!title){
     	alert("必须输入")
     	return
     }
     // 生成一个对像
     const obj={
       title,
       complete
     }
      
      // 添加todos数组  数据在哪里 改变数据的行为就应该在哪里
      this.addTodo(obj)
      // 清空表单数据
       this.title=''
  	}
  }


} 


</script>

<style>
	.top{
  text-align: left;
}
.top input{
  width:90%;
  height:30px;
  margin:5px;
  border:none;
  border:1px solid #ccc;
  border-radius: 5px;

}


</style>
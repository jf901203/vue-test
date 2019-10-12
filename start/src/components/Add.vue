<template> 

	<div class="left">
      <form action="">
        <p>用户名</p>
        <input type="text" class="usename" placeholder="输入用户名" v-model="name">
        <p>
          评论内容
        </p>
        <textarea class="usename" rows="10" placeholder="输入内容" v-model="comtent">
          
        </textarea>
        <br>
        <button @click.prevent="add">提交</button>
      </form>
   </div>

</template> 


<script> 


export default {

  data(){
    
  return{
  	name:'',
  	comtent:''
  }

  },
  props:{
    //接受属性名 属性值的类型 属性的必要性
    addComtents:{  
    	type:Function,   //属性值的类型
    	required: true  //属性的必要性
    }

  },
  methods:{

     add(){
      // 收集表单数据
      const name=this.name.trim()
      const comtent=this.comtent.trim()
      // 判断数据的合法性
      if(!name || !comtent){
        
        alert("用户名或内容不能为空")
        return

      }
      // 根据合法数据产生一个对象
      const obj={
        name:name,
        comtent:comtent
      }


      // 把产生的对象添加到comtents数组中
    
     this.addComtents(obj)

    //添加完成后 清空输入框

    this.name=''
    this.comtent=''

     }
  }


} 


</script>

<style lang="stylus" rel="stylesheet/stylus">
.left
  flex-basis 30%
  box-sizing border-box
  padding 15px
  .usename
    width 90%	


</style>
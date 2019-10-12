<template> 

 <p class="footer" >
  <input type="checkbox"  v-model="isAllCheck">
  <span>已完成{{filterTo}}/全部{{todos.length}}</span>
  <span class="btn" @click="delAll" v-show="filterTo" >清除已完成任务</span>
</p>

</template> 


<script> 


export default {

 
  props:{
  	todos:{
  		type:Array
  	},
  	seleAll:Function,
  	deleteAll:Function
  },


  mounted(){
    console.log(this.$parent.num)
  },

  computed:{

  	// filterTo(){

  	//     return	this.todos.filter((item)=>{
   //        return item.complete

  	// 	})

  	// }

   
   filterTo(){

       return this.todos.reduce((total,item)=>{
          return  total+(item.complete?1:0)

      },0)

   },

   isAllCheck:{
     
     get(){

     	return this.filterTo===this.todos.length && this.filterTo>0
     },
     set(value){ //value是当前checkbox最新的值
       
       this.seleAll(value)

     }

   }




  },
  methods:{

  	delAll(){
  		this.deleteAll()
  	}
  }

} 


</script>

<style>
	
.footer{
  position: relative;
  margin: 10px;
}
.btn{
  position:absolute;
  right:0px;
  padding:5px;
  background:red;
  color:#fff;
  border-radius: 5px;

}

</style>
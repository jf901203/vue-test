<template> 


	<li @mouseenter="show(true)" @mouseleave="show(false)" :class="{bg:bg}">

    <input type="checkbox" v-model="item.compiles">
    <span>{{item.title}}</span>
    <span v-show="bg" @click="deItme(item,index)">删除</span>

  </li>

</template> 


<script> 


export default {
data(){
	return{
		isOk:false,
		bg:false
	}
},
props:{
	item:Object,
	index:Number
},
methods:{
	deItme(item,index){
   
   if(item.compiles){

	   	if(window.confirm('确定删除')){
	   	 this.$store.dispatch('deItme',index)
	   }
   }

	},

	show(isEvent){
		if(isEvent){
			this.isOk=!this.isOk
			this.bg=!this.bg
		}else{
			this.isOk=!this.isOk
			this.bg=!this.bg
		}
	}
}

} 


</script>

<style>
li{
  
  border-bottom:1px solid #ccc;
  line-height: 35px;
  position: relative;

}

li>span:last-child{
  position:absolute;
  right:10px;
  background:red;
  color:#fff;
  display:inline-block;
  padding:0 5px;
  height:25px;
  line-height: 25px;
  bottom:0px;
}

.bg{
	background:#ccc;
}
</style>
<template> 

    <li @mouseenter="showHede(true)" @mouseleave="showHede(true)" :class="{hede:isShow}">
	    <input type="checkbox" v-model="item.complete">
	    <span>{{item.title}}</span>
	    <span class="del" @click="delItem">删除</span>
	  </li>

</template> 


<script> 


export default {
data(){
	return{
		isShow:false
	}
},
props:{
	item:Object,
	delDataArr:Function,
	index:Number
},

methods:{
	showHede(isOk){
    
    if(isOk){
    	this.isShow=!this.isShow
    }else{
    	this.isShow=!this.isShow
    }
    
	},
	delItem(){
		const {item,delDataArr,index}=this
		if(item.complete){
			if(window.confirm(`你确定删除${item.title}吗?`)){

        delDataArr(index)
			}
		}
	}
}


} 


</script>

<style>
	
li{
  border-bottom: 1px solid #ccc;
  line-height: 45px;
  text-align: left;
  position:relative;
}
.del{
 position: absolute;
 right:5px;
 background:red;
 display:inline-block;
 width:50px;
 text-align: center;
 color:#fff;
 line-height: 30px;
 top:7px;
 border-radius: 5px;
}
.hede{
	background:#ccc;
}
</style>
<template> 


	 <li @mouseenter="over(true)" @mouseleave="over(false)" :class="{bg:show}">

    <input type="checkbox" v-model="item.complete">
    <span>{{item.title}}</span>
    <span class="btns" @click="del" v-show="isOk">删除</span>

  </li>

</template> 


<script> 


export default {
 data(){
 	return{
 		isOk:false,
 		show:false
 	}
 },
  props:{
  	item:Object,
  	index:Number,
  	delTo:{
  		type:Function,
  		required:true
  	}
  },

  methods:{
  	del(){

  		const {index,delTo,item} =this

      if(item.complete){
         if(window.confirm(`确定删除${item.title}吗?`)){

        delTo(index)

       }
      }

  		
  	},

  	over(inEnter){
  		if(inEnter){
        this.isOk=!this.isOk
        this.show=!this.show
  		}else{
  			this.isOk=!this.isOk
        this.show=!this.show
  		}
  	}
  }


} 


</script>

<style>
	
li{
  text-align: left;
  padding:5px;
  box-sizing:border-box;
  border-bottom: 1px solid #ccc;
  position: relative;
}
.btns{
  display:inline-block;
  width: 30px;
  height:15px;
  background:red;
  color:#fff;
  line-height:15px;
  text-align: center;
  position:absolute;
  top:5px;
  right:10px;


}
.bg{
	background:#ccc;
}

</style>
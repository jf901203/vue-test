<template> 

<div class="main">
      <ul class="list">

        <Item v-for="(item,index) in todos" :key="index" :item="item" :index="index"/>
        
      </ul>
    </div>

</template> 


<script> 
import storage from 'util/storage'

import {mapState,mapActions,mapGetters} from 'vuex'
import Item from 'components/Item'

export default {

 data(){

 	return{
 		bg:false
 	}
 },
components:{
	Item
},
computed:{
	...mapState(['todos'])
},
// 深度监视一个值todos   value是被监视的值 当这个值发生改变就会出发回调函数
watch:{
	todos:{
		 handler:function(value){
		 	storage.saveTodos(value)
		  
		 },
     deep: true
	}

}

} 


</script>

<style>
	



</style>
<template> 

<div class="content">    
	<ul>
	 <Item v-for="(item,index) in dataArr" :key="index" :item="item" :delDataArr="delDataArr" :index="index"/>
	</ul>
</div>
</template> 


<script> 

import Item from 'components/Item'
export default {

props:{
	delDataArr:Function,
	dataArr:Array
},
components:{
	Item
}


} 


</script>

<style>
	


</style>
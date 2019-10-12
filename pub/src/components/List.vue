<template> 


<div class="content">
   <ul class="uls">
    <Item v-for="(item,index) in arr" :key="index" :item="item" :index="index"/> 
   </ul>
 </div>

</template> 


<script> 

import Item from 'components/Item'
export default {
 
 props:{
 	arr:Array
 },

 components:{
 	Item
 }


} 


</script>

<style>
	


</style>
<template> 


	<div class="root"> 
    <ul>
    	<li v-for="(item,index) in news" :key="index">{{item}}</li>
    </ul>
	</div> 
</template> 
<script> 
export default {
 data(){
 	return{
 		news:['News01','News02','News03','News04','News05']
 	}
 }

} 


</script>

<style>
	


</style>
<template> 

 <div>
 	
 	<slot name="left"></slot>
 	<p class="center">北京中关村</p>
 	<slot name="right"></slot>


 </div>

</template> 


<script> 


export default {

  name: '', 
  components: { } 


} 


</script>

<style>
.center{
	font-size: 16px;
	font-weight: 700
}


</style>
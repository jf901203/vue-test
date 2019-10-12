<template> 
<div class="botton">
 <h3>Home组件</h3>

  <router-link to="/home/news" class="active">News</router-link>
  <router-link to="/home/mes" class="active">Message</router-link>
  <router-view/>
</div>

</template> 


<script> 


export default {

  data(){
    return{
      selected:'1'
    }
  }


} 


</script>

<style>
	.active{
  display:inline-block;
  width: 60px;
  background: #ccc;
  padding:10px;
  border-radius: 2px;
  text-decoration: none;
  color:#333;
	}

</style>
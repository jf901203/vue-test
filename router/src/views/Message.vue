<template> 


	<div class="root">
		<ul>
			<li v-for="(item,index) in mesArr" :key="item.id">

				<router-link :to="`/home/mes/detal/${item.id}`">

         {{item.title}}

			  </router-link>
        <button @click="pushShow(item.id)">push</button>
        <button @click="replaceShow(item.id)">replace</button>
			</li>
			
		</ul>
		<button @click="$router.back()">返回</button>
		<router-view></router-view>
	</div> 

</template> 


<script> 


export default {

data(){
	return{
		mesArr:[]
	}
},
mounted(){
// 模拟ajax请求
setTimeout(()=>{

this.mesArr=[
	{id:1,title:'message01'},
	{id:2,title:'message02'},
	{id:3,title:'message03'},
	{id:4,title:'message04'},
	{id:5,title:'message05'},

	]
  
},1000)

},

methods:{
pushShow(id){
	// 压栈操作
	this.$router.push(`/home/mes/detal/${id}`)
},
replaceShow(id){

	this.$router.replace(`/home/mes/detal/${id}`)
}

}


} 


</script>

<style>
	


</style>
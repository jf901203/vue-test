<template> 


<div class="foot">
      <input type="checkbox" v-model="isCompile" >
      <span>已完成{{totalCount}}/全部{{totalNum}}</span>
      <span class="del" @click="allCompiles" v-show="totalCount">删除已完成</span>
 </div>
</template> 


<script> 

import {mapState,mapActions,mapGetters} from 'vuex'
export default {

	data(){
		return{
			compile:false
		}
	},
  computed:{
    
    ...mapGetters(['totalCount','totalNum']),
    ...mapState(['todos']),
    // 任何一个属性都有一个set和set方法
   isCompile:{
    get(){
    	return this.$store.getters.isCompile
    },
    set(value){
      this.$store.dispatch('compiled',value)
    }


   }


  },

 methods:{

    ...mapActions(['allCompiles'])

 },




} 


</script>

<style>
	
.del{
	background:red;
	color:#fff;
	line-height: 30px;
	padding:0 5px;

}

</style>
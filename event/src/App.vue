<template>
  <div id="app">
   <!-- <Top :arr="arr" @del="del"/> -->

   <Top :arr="arr" ref="tar"/>
  </div>
</template>

<script>
import Pubsub from 'pubsub-js'
import Top from 'components/Top'
export default {
  name: 'App',
  data(){
    return{
     arr:[
     {name:'战三',age:10},
     {name:'战三',age:10},
     {name:'战三',age:10},
     {name:'战三',age:10},
    ]
    }
  },
  components: {
  Top
  },
 
 mounted(){ //生命周期回调函数 执行异步代码

  // <Top />给这个组件对象绑定监听
   this.$refs.tar.$on('del',this.del)

   // this.$refs.tar.$on('adds',function(obj){
   //  this.arr.unshift(obj)
   // })

  Pubsub.subscribe('adds',(msg,obj)=>{

    this.arr.unshift(obj)

  })

 },


  //数据在哪里操作数据的行为就在哪里
  methods:{

  del(index){
   this.arr.splice(index,1)
  }

    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

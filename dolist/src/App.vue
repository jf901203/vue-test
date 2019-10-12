<template>
  <div id="app">
    <Top/>
    <Todo/>
    <Foot/>
  </div>
</template>

<script>

import Top from 'components/Top'
import Todo from 'components/Todo'
import Foot from 'components/Foot'
export default {
 


mounted(){

 this.$store.dispatch('reqTodos')

},
components:{
  Top,
  Todo,
  Foot
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
  border:1px solid #ccc;
  padding:20px;
  box-sizing:border-box;
}


</style>

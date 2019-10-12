<template>
  <div id="app">
    <Search/>
    <user-main/>
   
  </div>
</template>

<script>

import Search from 'components/Search'
import Main from 'components/Main'
export default {

components:{
  Search,
  userMain:Main
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

}



</style>

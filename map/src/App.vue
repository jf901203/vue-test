<template>
  <div id="app">
    <Top/>
    <userMain/>
  </div>
</template>

<script>

import Top from 'components/Top'
import Main from 'components/Main'
export default {
  name: 'App',
  components: {
    Top,
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

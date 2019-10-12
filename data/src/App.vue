<template>
  <div id="app">
    <Top>
      <h1 slot="left">asfgag</h1>
    </Top>
    <p ref="de"></p>
  </div>
</template>

<script>

import Top from 'components/Top'
export default {
  name: 'App',
  components: {
    Top
  },
  data(){
    return{
      name:"zhangs"
    }
  },

  mounted(){
    
    this.name="demi"

    console.log(this.name)
    
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

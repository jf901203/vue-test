<template>
  <div id="app">
     <h1>Router-basic-01</h1>
     <div class="main">
       <div class="left">
         <router-link to="/about">
           <mt-button>About</mt-button>
         </router-link>
         <br>
         <br>
         <router-link to="/home">
          <mt-button>home</mt-button>
         </router-link>
       </div>

       <div class="right">
         
         <keep-alive>

           <router-view :mas="mas"/>

         </keep-alive>

       </div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'App',

  data(){
    return{
     
     mas:'传递props'

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
}
.main{
  width: 100%;
  display:flex;
}
 .router-link-active .mint-button{
     background:red;
     color:#fff;
    }

</style>

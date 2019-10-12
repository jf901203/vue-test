<template>
  <div id="app">
     
     <div class="main">
      <Comments :addComment="addComment"/>
      <List :comments="comments" :deletComtents="deletComtents"/>
     </div>
   
  </div>
</template>

<script>

import Comments from 'components/comments'
import List from 'components/list'
export default {
  data(){
    return{
      comments:[
       {name:'Tom',comment:"明天去钓鱼"},
       {name:'Rose',comment:"明天去钓鱼"},
       {name:'Bom',comment:"明天去钓鱼"},
       {name:'Jack',comment:"明天去钓鱼"}
      ]
    }
  },

methods:{

  
  addComment(comment){
     
     this.comments.unshift(comment)

  },
  deletComtents(index){

    this.comments.splice(index,1)
  }
},

  components: {
   Comments,
   List
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
  justify-content:space-between;
}



</style>

<template>
  <div>

    searchFood
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
data() {
return {
  _id:0
}
},
mounted () {
 this._id=parseInt(this.$route.query.id)
 console.log(this.describe)
},

computed:{
 ...mapState(['searchList']),

 describe(){
   const {_id}=this
   return this.searchList.find((item)=>{
     if(item.id===_id){
       return item
     }
   })
 }

 
},

 

}

</script>
<style lang='stylus' rel='stylesheet/stylus'>
</style>
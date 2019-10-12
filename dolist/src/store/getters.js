
// 包含所有基于State的getter计算属性的对象

export default{
  // 完成的数量
	totalCount(state){
  
    return state.todos.reduce((total,item)=>{
      
      return total+(item.compiles?1:0)

     },0)

   },
// 总数量
   totalNum(state){
     
     return state.todos.length

   },
   
   isCompile(state,getters){
    
     return getters.totalCount===getters.totalNum && getters.totalNum>0
    
   }
}
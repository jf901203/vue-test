
import {ADDTO,DEITME,ALLCOMPILES,COMPILED,RECIVE_TODOS} from './mutation-types.js'

// 函数名 方法名本身都是字符串

export default{

/*

 var obj={
 	
  ['demo'](){
  	console.log('sakfnj')
  }
 }

 obj.demo()

*/

[ADDTO](state,{obj}){
    
    state.todos.unshift(obj)    

  },
[DEITME](state,{index}){
   state.todos.splice(index,1)
  },

[ALLCOMPILES](state){
   
   state.todos=state.todos.filter((item)=>{
      return !item.compiles

    })

  },

  [COMPILED](state,{value}){

   state.todos.forEach((item)=>{

    item.compiles=value

   })

  },

  [RECIVE_TODOS](state,{res}){

       state.todos=res

  }
}


import {ADDTO,DEITME,ALLCOMPILES,COMPILED,RECIVE_TODOS} from './mutation-types.js'


import storage from 'util/storage.js'

export default{

  addTo({commit,state},obj){
     
     // 不管传的参数是基本类型的值 还是对象类型的值 都需要用{}对象包裹传递
     commit(ADDTO,{obj})
     
   },

   deItme({commit},index){

      commit(DEITME,{index})
   },

   allCompiles({commit}){
    
    commit(ALLCOMPILES)

   },

   compiled({commit},value){
   	commit(COMPILED,{value})
   },

   reqTodos({commit}){
    // 模拟发送异步请求 
    setTimeout(()=>{

    const res=storage.readTodos()
     commit(RECIVE_TODOS,{res})

   },1000)

   }

}
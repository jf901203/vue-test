
/*

使用localStorage存储数据的工具模块

1.函数  暴露一个功能
2.对象  可以包含多个函数

*/

 const ARR="arr_keys"

export default{ 
 
 saveStorage(value){
  
  window.localStorage.setItem(ARR,JSON.stringify(value))
  
 },

 readeStorage(){
   
  return JSON.parse(window.localStorage.getItem(ARR) || '[]')
 
 }


}
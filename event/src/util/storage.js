
/*

使用localStorage存储数据的工具模块

1.函数  暴露一个功能
2.对象  可以包含多个函数

*/

export default{ //向外暴露一个对象 一个对象可以包含多个功能  es6给对象添加方法的简写方法
 
 const ARR="arr_key"
// 写入数据
 saveStorage(value){
  
  window.localStorage.setItem(ARR,JSON.stringify(value))
  
 },
// 读取数据
 readeStorage(){
   
  return JSON.parse(window.localStorage.getItem(ARR) || '[]')
 
 }


}
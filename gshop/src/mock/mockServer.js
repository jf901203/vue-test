import Mock from 'mockjs'  
import apiData from './data.json'
// mockServer 模拟服务器
// Mock.mock('/info', {code:0, data:apiData.info})  根据数据模板生成模拟数据 按照这个模板生成随机数据{code:0, data:apiData.info}
// 当拦截到匹配 url 的 Ajax 请求时，将根据数据模板 template 生成模拟数据
// Mock.mock( rurl, template )
// mock生成随机(要写随机语法才会生成随机数据)的数据返回 但是结构保持不变
Mock.mock('/info', {code:0, data:apiData.info})
// 运行这个文件 这个接口就可以访问了
Mock.mock('/goods', {code:0, data:apiData.goods})
Mock.mock('/ratings', {code:0, data:apiData.ratings})


// 不需要向外暴露 只需要执行即可
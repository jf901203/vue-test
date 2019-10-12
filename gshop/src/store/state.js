
export default{
  // 页面初始换显示数据的时候 都从这里拿数据
  // 过了一会儿才从后台获取数据更新这里的数据
  // 当获取对象的时候 当前初始值为空a.xxx a.xxx的值就undefind 过了一会儿才会有值
  // 初始换数据结构为的是给模板中的两层表达式渲染 a.b =undefind
  // 如果是三层表达式就会报错a.b.c undefind.c 报错
  latitude:'40.10038',
  longitude:'116.36867',
  address:{},
  shoplist:[],
  foodlist:[],
  userInfo:{},
  info:{},
  goods:[],
  ratings:[],
  cartFood:[],//这是购物车 把每个 整个商品的信息都添加进去
  searchList:[]
	
}
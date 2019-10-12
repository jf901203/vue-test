
// options vue的配置对象
function MVVM(options){

this.$options=$options || {};
var data=this._data=this.$options.data;
var me=this

Object.keys(data).forEach(function(key){
    // 代理每一个属性
	me._proxy(key);
})

this._initComputed();

observe(data,this)
// 编译
this.$compile=new Compile(options.el || document.body,this)

}


MVVM.prototype={

constructor:MVVM

$watch:function(key,cb,options){

   new Watcher(this,key,cb)

}

_proxy:function(key,setter,getter){

  var me=this
  setter=setter ||

  Object.defineProperty(me,key,{

   enumerabl:true,
   configurable:false,
   get:function(){
   	 return me._data[key]
   },
   set:function (newValue){
   	me._data[key]=newValue
   }


  })

},

//vm代理计算属性数据

_initComputed:function(){


	var me=this
	var computed=this.$options.computed;
	if(typeof computed==='object'){

		Object.keys(computed).forEach(function(key){
          Object.defineProperty(me,key,{
           get:typeof computed[key]==='function'?computed[key]:computed[key].get,
           set:function(){}

          })
		})
	}
}




}
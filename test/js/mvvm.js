function MVVM(options) {
    // 配置对象
    this.$options = options || {};
    var data = this._data = this.$options.data;
    // vm实例
    var me = this;

    // 数据代理
    // 实现 vm.xxx -> vm._data.xxx
    // 获取到data对象中的属性数组
    Object.keys(data).forEach(function(key) {
        // vm代理data对象中的每一个属性
        me._proxyData(key);
    });
    //vm代理计算属性的数据
    this._initComputed();
     // 从这个开始观察对象vm实例中的data对象
    observe(data, this);
    // 创建了一个编译对象    new了一个编译器
    this.$compile = new Compile(options.el || document.body, this)
}

MVVM.prototype = {
    constructor: MVVM,
    $watch: function(key, cb, options) {
        new Watcher(this, key, cb);
    },
  
  // 
    _proxyData: function(key, setter, getter) {
        var me = this;
        setter = setter || 
        // 给vm实例添加属性  并且给每一个属性添加上访问器属性符
        Object.defineProperty(me, key, {
            // 不可以重新定义
            configurable: false,
            // 可以枚举
            enumerable: true,
            // vm.name 读取数据时调用 回调函数
            get: function proxyGetter() {
                // 从data中去读数据
                return me._data[key];
            },
            // vm.name=xxx 修改了name属性值 触发回调函数  newVal=xxx
            set: function proxySetter(newVal) {
                // 更新data中的属性值
                me._data[key] = newVal;
            }
        });
    },

    _initComputed: function() {
        var me = this;
        var computed = this.$options.computed;
        if (typeof computed === 'object') {
            Object.keys(computed).forEach(function(key) {
                Object.defineProperty(me, key, {
                    get: typeof computed[key] === 'function' 
                            ? computed[key] 
                            : computed[key].get,
                    set: function() {}
                });
            });
        }
    }
};
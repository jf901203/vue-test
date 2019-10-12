function Observer(data) {
    // 保存data对象
    this.data = data;
    // 开始对data的监视
    this.walk(data);
}

Observer.prototype = {
    constructor: Observer,
    walk: function(data) {
      // 保存observer对象
        var me = this;
        // 遍历的data中所有的属性
        Object.keys(data).forEach(function(key) {
          // 对指定data中的属性进行劫持
          // 对指定的属性实现响应式的数据绑定
            me.defineReactive(me.data, key, data[key]);
        });
    },
   
    // 定义响应式数据 数据变化页面就更新
    defineReactive: function(data, key, val) {
        // 创建属性对应的dep对象 dependency(依赖) 关联的是Watcher 表达式{{name}}
        var dep = new Dep();
        // 再次调用 间接递归 data{a:'aaa',b:{name:'xahng'}} 对b对象调用observe函数
        // 通过间接的递归调用实现对data中所有层次属性的数据劫持
        var childObj = observe(val);
        // 重新定义 data中的属性的属性描述符添加上存储器描述符  data{name:'xahn'} 没有get set方法 在这里添加上get set方法
        // 给data重新定义属性 添加set/get方法
        Object.defineProperty(data, key, {
            enumerable: true, // 可枚举
            configurable: false, // 不能再define
            get: function() {
              // 返回值 建立dep与Watcher之间的关系
                if (Dep.target) {
                    //建立dep与Watcher之间的关系
                    dep.depend();
                }
                return val;
            },
            // 监视data中key属性的变化 更新界面
            set: function(newVal) {
                if (newVal === val) {
                    return;
                }
                val = newVal;
                // 新的值是object的话，进行监听
                childObj = observe(newVal);
                // 通知订阅者 通知所有相关的Watcher
                dep.notify();
            }
        });
    }
};

function observe(value, vm) {
    // 被观察的data对象必须是一个对象 其实并不是观察对象的本身 本质是观察对象的所有属性
    if (!value || typeof value !== 'object') {
        return;
    }
    // 为每一个data对象创建一个观察者 实现数据的劫持
    return new Observer(value);
};


var uid = 0;

function Dep() {

    this.id = uid++;
    // 添加Watcher到数组中
    this.subs = [];
}

Dep.prototype = {
    // 添加watcher到dep中
    addSub: function(sub) {
        this.subs.push(sub);
    },
    // 去建立dep与wathcer之间的关系
    depend: function() {
        Dep.target.addDep(this);
    },

    removeSub: function(sub) {
        var index = this.subs.indexOf(sub);
        if (index != -1) {
            this.subs.splice(index, 1);
        }
    },

    notify: function() {
        // 遍历所有的watcher 通知watcher更新 
        this.subs.forEach(function(sub) {
            sub.update();
        });
    }
};

Dep.target = null;
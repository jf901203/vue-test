function Compile(el, vm) {
    // 保存vm到compile对象
    this.$vm = vm;
    // 将el对应的元素对象保存到compile对象中
    this.$el = this.isElementNode(el) ? el : document.querySelector(el);
    //如果有el元素
    if (this.$el) {
      //编译模板的三步

        // 把el元素中所有子节点保存到一个fragment对象中
        this.$fragment = this.node2Fragment(this.$el);
        // 编译fragment中所有层次的子节点
        this.init();
        // 将编译好的fragment添加到页面的el元素中
        this.$el.appendChild(this.$fragment);
    }
}

Compile.prototype = {
    constructor: Compile,
    // 创建一个空的frament对象
    node2Fragment: function(el) {
        var fragment = document.createDocumentFragment(),
            child;

        // 将el直接欧冠所有的子节点转移到fragment对象
        while (child = el.firstChild) {
            fragment.appendChild(child);
        }
       //返回framgment
        return fragment;
    },

    init: function() {
        // 编译fragment对象中的所有节点
        this.compileElement(this.$fragment);
    },

    // 编译内存中的fragment对象的所有子节点
    //编译这个节点el所包含的所有子节点

    compileElement: function(el) {
        //取出第一层的子节点
        var childNodes = el.childNodes,
        //保存fragment对象
            me = this;
        //编列所有节点
        [].slice.call(childNodes).forEach(function(node) {
            // 得到文本内容
            var text = node.textContent;
            // 创建正则对象 匹配大括号表达式 {{}} 表达式
            var reg = /\{\{(.*)\}\}/;
            
            // 判断节点是否是一个元素节点
            if (me.isElementNode(node)) {
                //编译指令
                me.compile(node);

               //如果是文本节点 并且是{{}} 

            } else if (me.isTextNode(node) && reg.test(text)) {
                //笔译大括号表达式
                me.compileText(node, RegExp.$1.trim());
            }
             // 判断当前节点是否还有子节点  如果有就会递归调用函数实现所有层次节点的编译
            if (node.childNodes && node.childNodes.length) {
                me.compileElement(node);
            }
        });
    },

    compile: function(node) {
        //得到标签所有的属性
        var nodeAttrs = node.attributes,
            me = this;
         //遍历所有的属性
        [].slice.call(nodeAttrs).forEach(function(attr) {
            // 得到属性名 v-on:click
            var attrName = attr.name;
            // 判断属性名是否是一个指令属性
            if (me.isDirective(attrName)) {
                // 得到属性值====>表达式
                var exp = attr.value;
                // 从属性名中得到指令名 on:click
                var dir = attrName.substring(2);
                // 事件指令 是否是事件指令
                if (me.isEventDirective(dir)) {
                    // 解析事件指令 node:当前节点 me.$vm:vm exp:表达式  dir:on:click
                    compileUtil.eventHandler(node, me.$vm, exp, dir);
                    // 普通指令
                } else {
                    // 解析一般指令属性
                    compileUtil[dir] && compileUtil[dir](node, me.$vm, exp);
                }
                //移除指令属性
                node.removeAttribute(attrName);
            }
        });
    },

    compileText: function(node, exp) {
        // 
        compileUtil.text(node, this.$vm, exp);
    },

    isDirective: function(attr) {
        return attr.indexOf('v-') == 0;
    },

    isEventDirective: function(dir) {
        return dir.indexOf('on') === 0;
    },

    isElementNode: function(node) {
        return node.nodeType == 1;
    },

    isTextNode: function(node) {
        return node.nodeType == 3;
    }
};

// 指令处理集合 编译指令的工具对象
var compileUtil = {
    //解析v-text/{{}}
    text: function(node, vm, exp) {
        this.bind(node, vm, exp, 'text');
    },
    //解析v-html
    html: function(node, vm, exp) {
        this.bind(node, vm, exp, 'html');
    },
    //解析v-model
    model: function(node, vm, exp) {
        this.bind(node, vm, exp, 'model');

        var me = this,
            val = this._getVMVal(vm, exp);
        node.addEventListener('input', function(e) {
            var newValue = e.target.value;
            if (val === newValue) {
                return;
            }

            me._setVMVal(vm, exp, newValue);
            val = newValue;
        });
    },
   //解析v-class
    class: function(node, vm, exp) {
        this.bind(node, vm, exp, 'class');
    },

    bind: function(node, vm, exp, dir) {
        // 得到更新节点的函数
        var updaterFn = updater[dir + 'Updater'];
        // 如果存在这个函数 就执行这个函数 给节点更新特定的属性值
        updaterFn && updaterFn(node, this._getVMVal(vm, exp));
        // 初始化节点 显示数据之后 给模板指令/模板表达式 创建一个观察对象
        // 为表达式创建一个对应的watcher 实现节点的更新显示
        new Watcher(vm, exp, function(value, oldValue) { //当表达式对应的一个属性值发生变化时回调函数被调用
            // 更新界面中的属性节点
            updaterFn && updaterFn(node, value, oldValue);
        });
    },

    // 事件处理
    eventHandler: function(node, vm, exp, dir) {
        //得到事件类型/名
        var eventType = dir.split(':')[1],
        //从methods中得到表达式所对应的函数(事件回调函数)
            fn = vm.$options.methods && vm.$options.methods[exp];
        // 如果事件名和回调函数都存在
        if (eventType && fn) {
            // 给当前节点绑定指定事件名和回调函数(强制绑定了this为vm)的DOM事件监听
            node.addEventListener(eventType, fn.bind(vm), false);
        }
    },
    // 获取到vm data数据的值 更新到节点上
    //从vm得到表达式{{}}所对应的值
    _getVMVal: function(vm, exp) {
        var val = vm;
        exp = exp.split('.');

        exp.forEach(function(k) {

            val = val[k];

        });

        return val;
    },
  //更新节点 
    _setVMVal: function(vm, exp, value) {
        var val = vm;
        exp = exp.split('.');
        exp.forEach(function(k, i) {
            // 非最后一个key，更新val的值
            if (i < exp.length - 1) {
                val = val[k];
            } else {
                val[k] = value;
            }
        });
    }
};


//包含多个更新节点的方法的工具对象 节点上显示的值都是在这里更新的
var updater = {


    //更新节点的textContent属性值
    textUpdater: function(node, value) {
        
        node.textContent = typeof value == 'undefined' ? '' : value;
    },
    //更新节点的innerHTML属性值
    htmlUpdater: function(node, value) {
       
        node.innerHTML = typeof value == 'undefined' ? '' : value;
    },
    //更新节点的classNamet属性值
    classUpdater: function(node, value, oldValue) {
        //静态的class属性值
        var className = node.className;
        //将静态的class属性值与动态的class属性值合并 设置为新的className的属性值
        node.className = className + (className?' ':'') + value;
    },
    //更新节点的value属性值
    modelUpdater: function(node, value, oldValue) {
   
        node.value = typeof value == 'undefined' ? '' : value;
    }
};
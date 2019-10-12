function Watcher(vm, expOrFn, cb) {
    // 更新界面的回调
    this.cb = cb;
    this.vm = vm;
    // 表达式
    this.expOrFn = expOrFn;
    // 包含所有相关的dep的容器对象
    this.depIds = {};
   
    if (typeof expOrFn === 'function') {
        this.getter = expOrFn;
    } else {
        this.getter = this.parseGetter(expOrFn.trim());
    }
    // 得到模板编译之后的初始值 即表达式的初始值
    this.value = this.get();
}

Watcher.prototype = {
    constructor: Watcher,
    update: function() {
        this.run();
    },
    run: function() {
        var value = this.get();
        var oldVal = this.value;
        if (value !== oldVal) {
            this.value = value;
            // 数据更新之后 调用回调函数 更新页面节点
            this.cb.call(this.vm, value, oldVal);
        }
    },
    addDep: function(dep) {

       // 判断dep与watcher的关系是否已经建立
      
        if (!this.depIds.hasOwnProperty(dep.id)) {

            // 将Watcher添加到Dep 1:n 用于更新阶段 Dep通知Watcher  Watcher 通知 update
            dep.addSub(this);
            // 将Dep添加到Watcher中 1:n 用于防止重复建立关系
            this.depIds[dep.id] = dep;
        }
    },
    // 得到表达式的值 建立dep与Watcher的关系
    get: function() {
        // 给Dep指定当前的watcher
        Dep.target = this;
        // 读取表达式的值 内部调用get建立dep与Wacher的关系
        var value = this.getter.call(this.vm, this.vm);
        // 把Dep中的Watcher清除
        Dep.target = null;

        return value;
    },
   // 得到对应表达式的值
    parseGetter: function(exp) {

        if (/[^\w.$]/.test(exp)) return; 
        var exps = exp.split('.');
        return function(obj) {
            for (var i = 0, len = exps.length; i < len; i++) {
                if (!obj) return;
                obj = obj[exps[i]];
            }
            return obj;
        }
    }
};
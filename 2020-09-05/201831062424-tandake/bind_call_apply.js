// call的简单实现
// 模拟简单步骤
/*1. 将函数设为对象的属性
2. 执行该函数
3. 删除该函数*/
Function.prototype.myCall = function(context) { // 在原型上书写
    if(typeof this !== 'function') { // 只有函数才能调用
       throw 'type error'
    } 
    if (!(context instanceof Object)) {
        context = new Object(context) // 不是对象就包装成对象[type:context]
    }
    context = context || window // 没有第一个参数就默认window
    context.fn = this // 指向第一个参数对象的实例
    let args = [...arguments].slice(1) // 取出第一个参数之后的数据
    let result = context.fn(...args) // 展开数组传入参数
    delete context.fn // 删除属性
    return result //返回结果
}
// apply的简单实现 大体与call相同

Function.prototype.myApply = function(context) { // 在原型上书写
    if(typeof this !== 'function') { // 只有函数才能调用
       throw 'type error'
    } 
    if (!(context instanceof Object)) {
        context = new Object(context) // 不是对象就包装成对象[type:context]
    }
    context = context || window // 没有第一个参数就默认window
    context.fn = this // 指向第一个参数对象的实例
    if (arguments[1]) {
        result = context.fn(...arguments[1]) // 展开参数对象
    } else {
        result = context.fn()
    }
    delete context.fn // 删除属性
    return result //返回结果
}

// bind的简单实现
Function.prototype.myBind = function (context) {
     if(typeof this !== 'function'){
      throw new TypeError('被绑定的对象需要是函数')
    }
    const _this = this
    const args = [...arguments].slice(1) //取出参数
    return function F() {
        const bindArgs = args.concat(...arguments) // 先传入使用bind的时候绑定的参数 
        // 然后把之后传入的参数展开之后拼接到后面
        if (this instanceof F) { // 检查构造关系
            return new _this(...bindArgs)
        }// 返回改变了this指向之后的函数
        return _this.apply(context,bindArgs)
    }
}

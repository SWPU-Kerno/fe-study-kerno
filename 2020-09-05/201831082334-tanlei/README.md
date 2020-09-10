## 大数相加
> leetcode题链：415. 字符串相加

> 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和

```js
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

// 生成num个0的字符串
function createZero(num) {
    result = ""
    while (num)
    {
        result += "0"
        num -= 1
    }
    return result
}
// 清除前导0
function clearZero(num) {
    num = num.replace(/^0*/, "")
    // 如果全是0，返回'0'，而不是空串
    if (num.length === 0) {
        return "0"
    }
    return num
}
var addStrings = function(num1, num2) {
    // 分段计算的位数, Number.MAX_SAFE_INTEGER是16位的数字，因此n最多为15
    let n = 15
    // 结果
    let result = ""
    // 进位
    let carry = 0
    // 最大长度
    let maxLen = Math.max(num1.length, num2.length)
    // 通过补0，让两个数长度一致
    num1 = createZero(maxLen - num1.length) + num1
    num2 = createZero(maxLen - num2.length) + num2
    // 如果长度不为0就继续
    while (num1.length) {
        // 取后n位
        let partNum1 = num1.slice(-n)
        let partNum2 = num2.slice(-n)
        // 截断num
        num1 = num1.slice(0, -n)
        num2 = num2.slice(0, -n)
        // 转换为数值，与进位一同相加
        let partSum = partNum1 * 1 + partNum2 * 1 + carry
        partSum = partSum + ""
        // 更新进位
        carry = partSum.slice(0, -n) * 1
        partResult = partSum.slice(-n)
        // 将结果拼接，partResult一定是n位，不够用0补齐
        result = createZero(n - partResult.length) + partResult + result
    }

    // 如果carry不是0，则将carry加到前面
    if (carry)
    {
        result = carry + result
    }
    // 清除掉前导的0
    return clearZero(result)
};
```
## ES5
> 网道JavaScript，阅读第六章
> - 面向对象编程
> - 简单易懂-原型与原型链的关系
> - 原型与原型链

## 相关问题
### 1. 模拟实现new命令
```js
function myNew(fn, ...params){
    let obj = {}
    let r = fn.call(obj, ...params)
    if (typeof r === 'object' && r !== null) {
        return r
    }
    Object.setPrototypeOf(obj, fn.prototype)
    return obj
}

// 下面是测试用例
function fn(name){
    this.name = name
}

function fn2(){
    return 1
}

function fn3(){
    return {
        key:'value'
    }
}

console.log(myNew(fn,'xm'))
console.log(myNew(fn2,'xm'))
console.log(myNew(fn3,'xm'))
// fn { name: 'xm' }
// fn2 {}
// { key: 'value' }
```
### 2.更改this的指向有哪些方案
<pre>
答：通过call/apply/bind/可以将this绑定到指定的对象上。
    通过new可以将this绑定到新生成的空对象上。
    将一个函数赋值给要绑定的对象的属性，然后在对象上调用此函数。
</pre>
### 3.bind,call,apply区别是什么
<pre>
答：bind()方法会创建一个新函数，称为绑定函数，当调用这个绑定函数时，绑定函数会以创建它时传入 bind()方法的第一个参数作为 this。
call()：第一个参数表示要把this指向的新目标，第二个之后的参数其实相当于传参，参数以，隔开。
apply(): 第一个参数同上，第二个参数接受一个数组，里面也是传参。
</pre>
### 4.模拟实现一下bind,call,apply,
```js
Function.prototype.myCall = function (obj, ...params) {
    // 如果是null，默认为window
    obj = obj || window
    // 正常情况下,this一定是函数
    if (typeof this !== 'function') {
        throw 'error'
    }
    // obj需要是对象才可以绑定
    if (typeof obj !== 'object') {
        obj = new Object(obj)
    }

    obj.fn = this
    let res = obj.fn(...params)
    delete obj.fn
    return res

}
Function.prototype.myApply = function (obj) {
    obj = obj || window
    
    if (typeof this !== 'function') {
        throw 'error'
    }

    if (typeof obj !== 'object') {
        obj = new Object(obj)
    }

    obj.fn = this
    let res = null
    if (arguments[1]) {
        res = obj.fn(...arguments[1])
    }
    else {
        res = obj.fn()
    }
    
    delete obj.fn
    return res
}
Function.prototype.myBind = function (obj, ...params) {
    if (typeof this !== 'function') {
        throw 'error'
    }
    
    obj = obj || window
    
    if (typeof obj !== 'object') {
        obj = new Object(obj)
    }
    
    let that = this
    return function () {
        return that.call(obj, ...params)
    }
    
}
```
### 5.什么是原型
<pre>
答：每一个js对象在创建的时候就会自动关联另一个对象，这个对象就是原型，每一个对象都会从原型"继承"属性
</pre>
### 6.什么是原型链
<pre>
答：所有对象都有自己的原型对象。一方面，任何一个对象，都可以充当其他对象的原型；另一方面，由于原型对象也是对象，所以它也有自己的原型。因此，就会形成一个“原型链”
</pre>
### 7.instanceof判断变量类型的原理是什么
<pre>
答：instanceof运算符的左边是实例对象，右边是构造函数。它会检查右边构建函数的原型对象，是否在左边对象的原型链上。
</pre>
### 8.如何实现对象(构造函数)的继承
```js
//要继承的对象
function Super(name="") {
    this.name = name
}
// 原型链上扩展方法
Super.prototype.sayName = function() {
    console.log(name)
}

function X(name, age) {
    // 继承实例的属性
    Super.call(this, name)
    this.age = age
}

// 将要继承的构造函数的实例作为原型对象，以继承该对象原型链上的方法
// 用构造函数的一个实例而不直接用原型对象，是为了方便添加方法而不影响原对象
X.prototype = new Super()
// 将constructor回指X
X.prototype.constructor = X

```


# 算法与数据结构/JS

## 大数相加
leetcode题链：[415. 字符串相加](https://leetcode-cn.com/problems/add-strings/)

>给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和

```js
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {

};
```

## ES5
[网道JavaScript](https://wangdoc.com/javascript/index.html)，阅读第六章
* [面向对象编程](https://wangdoc.com/javascript/oop/index.html)
* [简单易懂-原型与原型链的关系](https://juejin.im/pin/6844910475042357261)
* [原型与原型链](https://sugarat.top/bigWeb/js/prototype.html)
### 相关问题
1. 模拟实现new命令
```js
function myNew(){

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
2. 更改this的指向有哪些方案
3. bind,call,apply区别是什么
4. 模拟实现一下bind,call,apply,
```js
Function.prototype.myCall = function (){

}
Function.prototype.myApply = function (){
    
}
Function.prototype.myBind = function (){
    
}
```
5. 什么是原型
6. 什么是原型链
7. instanceof判断变量类型的原理是什么
8. 如何实现对象(构造函数)的继承
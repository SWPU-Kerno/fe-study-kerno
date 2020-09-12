##大数相加

```javascript
let getKthFromEnd = function (head,k) {
    let temp = head;//保存头结点
    let length = 0;//定义一个length
    while(temp){
        length++;
        temp = temp.next;
    }
    let index = length - k; //抓住倒数第k个的坐标等于长度减去k
    while(index--){
        head = head.next;
    }
    return head;
}
```

## IIFE是什么

JS自执行函数又称IIFE，在我们开发过程中会使用到大量的自执行函数。

使用：

方法1：

```
(function(){
    
}());
```
方法2：
```
(function(){

})();
```
应用：

1.避免作用域命名污染

2.提升性能（减少了对作用域的查找）

3.避免全局命名冲突

4.保存闭包状态

## 闭包

闭包是指有权访问另一个函数作用域中的变量的函数。

## 闭包的优点

可以重复使用变量，并且不会造成变量污染

可以用来定义私有属性和私有方法

## 提升

在js执行前，所有的带有var和function声明的变量会进行提前的声明和定义，var会直接提升，
function会在函数调用前的那一刻进行提升

##提升规则

全局作用域中声明的变量会提升至全局最顶层，函数内声明的变量只会提升至函数作用域最顶层。

函数声明的优先级高于变量声明

函数提升只会提升函数声明，不会提升函数表达式。

##delete

1.对象属性删除

```javascript
function fun(){
    this.name = 'mm';
}
var obj = new fun();
console.log(obj.name);
delete obj.name;
console.log(obj.name);
```

2.变量删除

```javascript
var name = 'lily';
delete name;
console.log(name)//lily
```
直接用delete删除不了变量

3.删除不了原型链中的变量

```javascript
fun.prototype.age = 18;
delete obj.age;
console.log(obj.age);//18
```
##获取函数预期传入的参数个数

可以直接通过arguments获取所有参数对象

通过Array.prototype.slice.call(...arguments)转为真数组，调用length属性

## eval命令的作用是什么

把对应的字符串解析成js代码并运行

```javascript
function sayhello() {
  
}
var f = 'sayhello';
eval(f+'()');//运行sayhello();
```
##遍历数组的方式

1.forEach

```javascript
var arr = ['张三','李四','王五'];
arr.forEach(function(v,k) {
  console.log(v);//打印所有元素，k是下标
})
```
1.map

map是表示映射，也就是一一对应，遍历完成之后会返回一个新的数组，但是不会修改原来的数组
```javascript
var a1 = ['a','b','c'];
var a2 = a1.map(function(item,key,arr){
    return item.toUpperCase();
})
console.log(a1);['a','b','c']
console.log(a2);['A','B','C']
```
2.filer

filter是遍历每一个元素，用每一个元素去匹配，如果返回true，就会返回一个次数，最后将所有符合添加的全部选出
```javascript
var a1 = [1,2,3,4,5,6];
var a2 = a1.filter(function(item){
    return item <= 3;
})

console.log(a2);//[1,2,3];
```
4.reduce

reduce就是return first + second其实相当于return first += second;也就是说每次的first是上一次的和

注意function()后面的参数，如果有值，那么第一次加载的时候first = 0; second = 1; 

```javascript
var a1 = [1,2,3];
var total = a1.reduce(function(first,second){
    return first + second;
},0);
console.log(total)//打印6
```
##逗号运算符

先计算左边的参数，在计算右边的参数，然后返回最右边参数的值

##将字符串转为数字的方法有哪些

1.转换函数

parseInt()和parseFloat()两个转换函数.

2.强制类型转换

Number()函数

3.隐世转换

```javascript
var str = '012.234';
var x = str - 0;
x = x * 1;
```

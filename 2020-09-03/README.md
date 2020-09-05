# 算法数据结构/js
## 1. 排序算法

### 学习资料
* [坐在马桶刷看算法系列-快速排序](https://blog.csdn.net/afjaklsdflka/article/details/52829030)
* [菜鸟教程-归并排序](https://www.runoob.com/w3cnote/merge-sort.html)
* [百度百科-归并排序](https://baike.baidu.com/item/%E5%BD%92%E5%B9%B6%E6%8E%92%E5%BA%8F/1639015)

leetcode题链：[912. 排序数组](https://leetcode-cn.com/problems/sort-an-array/)

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {

};
```
**使用以下排序算法实现，并回答后续问题**:
* ‌快排
* 归并排序

### 相关问题
1. 分别说说这两种方式在`最好`和`最坏`的情况下时间复杂度是多少？最坏的情况是什么？
2. 哪些排序算法是稳定的?哪些是不稳定的?如何区分的?

## ES5
### 学习资料

[网道JavaScript](https://wangdoc.com/javascript/index.html)，阅读第四,五章

* [语法专题](https://wangdoc.com/javascript/features/index.html)
* [标准库](https://wangdoc.com/javascript/stdlib/index.html)
* [js类型转换规则](https://sugarat.top/bigWeb/js/typeConvert.html)
* [正则常用关键字](https://sugarat.top/bigWeb/regexp)

**标准库的内容较多，可细品，对于某些对象的API目前不用去死记，可以自己找demo练练或者知道它能完成哪些操作就行**
### 相关问题
1. 下面输出结果是什么,并说明转换的过程
```js
if ([]) console.log(1);
if ({}) console.log(2);
if ([] == false) console.log(3);
if ({} == false) console.log(4);
if ([] == ![]) console.log(5);
if ({} == !{}) console.log(6);
if ('' == false) console.log(7);
if (false == 0) console.log(8);
if (1 == true) console.log(9);
if ('' == 0) console.log(10);
if (NaN == NaN) console.log(11);
if ([] == !true) console.log(12);
if ([] == false) console.log(13);
if ([] == 0) console.log(14);
if (+0 == -0) console.log(15);
if (NaN == false) console.log(16);
```

2. 下面计算结果（包含结果的类型）是什么，并说明理由
```js
{ } +1
1 + {}
[] + 1
1 + []
[1, 2, 3] + 0
[1, 2, 3] + '0'
1 + '0'
1 + 0
1 + true
1 + false
'1' + true
'1' + false
![] + []

1 - true
'0' - 0
0 - '1'
false - true
{ } -[]
[] - {}
false - []
```

3. 如何判断一个变量是否为对象,有哪几种方案
4. Object.keys()与Object.getOwnPropertyNames()有什么区别
5. 下面如何定义`a`才能打印`yes`
```js
if (a == 1 && a == 2) {
    console.log('yes')
}
```
6. 如何判断一个对象是数组
7. 数组哪些方法会改变自己
8. 将any（任意值）转换为布尔值的方法有哪些
9. 写一个方法将传入的Date对象转换为 `yyyy-MM-dd hh:mm:ss`的格式
```js
/**
 * 日期格式化
 * @param {Date} date 
 */
function convertDate(date) {

}
```
10. 写个匹配手机号,邮箱的正则
```js
const rMobile = // 1开头的11位数组
const rMail = // 中间包含@和.的字符串,@与.不能相邻
```
11. 写一个提取url中params的函数
```js
/**
 * 提取url中的参数
 * @param {String} url 
 */
function getUrlParams(url){

}

console.log(getUrlParams('https://a.b.com/path#title')); // {}
console.log(getUrlParams('https://a.b.com/path?id=2')); // {id:2}
console.log(getUrlParams('https://a.b.com/path?id=2&name=abc')); // {id:'2',name='abc'}
console.log(getUrlParams('https://a.b.com/path?')); // {}
console.log(getUrlParams('https://a.b.com/path?id=2&name=abc&word=dsds')); // {id:'2',name='abc',word:'dsds'}
```
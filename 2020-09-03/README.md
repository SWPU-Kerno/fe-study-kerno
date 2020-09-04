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
6. 更多。。持续更新中
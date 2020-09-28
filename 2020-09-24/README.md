# 算法与数据结构/ES6/拓展深广度

## 算法与数据结构
### 学习资料

### 题目
1. leetcode题链：[剑指 Offer 56 - I. 数组中数字出现的次数](https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof/)

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function(nums) {

};
```

2. leetcode题链：[剑指 Offer 48. 最长不含重复字符的子字符串](https://leetcode-cn.com/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof/)

```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

};
```
## 2. ES6 
### 学习资料
[ECMAScript 6 教程](https://wangdoc.com/es6/index.html)

阅读6,7章内容：
>对于一些新的方法/API 无需刻意去记住，主要了解新增了些什么，哪些地方能用上
1. [正则的扩展](https://wangdoc.com/es6/regex.html)
2. [数值的扩展](https://wangdoc.com/es6/number.html)
  
其他内容:
* [复习-String.prototype.replace](https://wangdoc.com/javascript/stdlib/regexp.html#stringprototypereplace),关注一下第二个参数中使用`$`符号或传一个函数的作用

### 问题
1. 性能优化-图片
   * 首屏图片的加载策略有哪些
   * 大量图片，列表式
2. 正则都有哪些修饰符，分别有什么意义
3. let,const的区别是什么
4. 实现一个方法，传入一个n，1s后打印1，又经过2s 打印2,..又n-1s 打印 n-1
```js
function fn(n){

}
fn(3)
// 依次输出
// 1  -- 1s 后
// 2  -- 1s + 2s 后
// 3  -- 1s + 2s + 3s 后
```
5. 如何实现add函数才能满足以下条件
```js
function add(a,b){

}
add(2,3) // 5
add(2)(3) // 5
add(5)(4) // 9
```
6. 什么是柯里化？它有什么作用

## 3.拓展深广度
中台：
* [掘金-前端能力中台化之路———— Fusion Design 成长史](https://juejin.im/post/6844903848444706829)
* [知乎-互联网公司中所谓中台是怎么定义的？](https://www.zhihu.com/question/57717433)
* [ThoughtWorks-白话中台战略系列文章](https://insights.thoughtworks.cn/tag/what-is-zhongtai/)
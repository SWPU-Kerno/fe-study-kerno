# 算法与数据结构/ES6/拓展深广度

## 1. 算法与数据结构
leetcode题链：[剑指 Offer 04. 二维数组中的查找](https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/)

时间复杂度越低越好

## 2. ES6 
### 学习资料
[ECMAScript 6 教程](https://wangdoc.com/es6/index.html)

阅读第9章：
* [数组的扩展](https://wangdoc.com/es6/array.html)

其它：
* 洗牌算法
  * [力扣题解](https://leetcode-cn.com/problems/shuffle-an-array/solution/xi-pai-suan-fa-shen-du-xiang-jie-by-labuladong/)
  * [洗牌算法和它的应用场景](https://www.cxyxiaowu.com/11492.html)
### 问题
1. 如何删除数组中指定位置的值
2. 如何把多维数组转换成一维数组
3. 如何判断排序算法是否稳定
4. 写一个乱序数组的方法，在原型上拓展,返回乱序后的新数组
```js
Array.prototype.shuffle = function(){
    // ...code
}
[1,2,3,4].shuffle() // 每次执行乱序结果大概率不一致
[1,2,3,4].shuffle() // 每次执行乱序结果大概率不一致
```
5. 把一个一维数组(数据只包含Number)[2,3,4]转为234你有哪些方式
6. 给定一个大小为n的数组，找到其中的多数元素
```js
多数元素是指在数组中出现次数大于n/2的元素
如输入[3,2,3]输出3，输入[2,2,1,1,1,2,2]输出2
```


## 3.拓展深广度
互联网常用词汇：
* [词汇](http://www.woshipm.com/zhichang/1743064.html)
* [一些职能缩写](https://blog.csdn.net/sinat_34439107/article/details/70214235)
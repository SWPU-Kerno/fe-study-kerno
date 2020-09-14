# Kerno 22/23届前端星任务提交

## 提交格式

将每天的任务提交至对应到日期文件夹中即可，文件夹名称统一使用 “学号-姓名拼音”，例如“201731061422-xiaozou“

**举例**
```sh
├── 2020-08-31
│   ├── 201731061422-xiaozou
│   │   └── README.md                 我的目录介绍/学习结果
│   │   └── 其它任意资源                自由发挥
│   └── README.md                     2020-08-31这一天的任务要求
└── README.md
```
## 如何提交

戳->[第一天的任务](2020-08-31/README.md)<-

## 任务规划
<details>
<summary>
    点击展开
</summary> 

* 2020-08-31
  * Git 提PR
* 2020-09-01
  * Git:同步fork仓库
  * 算法与数据结构:单链表转置
  * ES5基础
* 2020-09-03
  * 算法与数据结构：快排，归并
  * ES5基础：语法，标准库
* 2020-09-05
  * 算法与数据结构：大数相加
  * ES5基础：面向对象
* 2020-09-06
  * 算法与数据结构：链表中倒数第k个节点
  * ES5：复习前面的知识
* 2020-09-10
  * 算法与数据结构：堆排序，二叉树层序遍历
  * ES5：异步操作，event loop，作用域，执行上下文...
</details>

## 问题答案整理
按问题的类别进行整理，相关问题可以到对应的日期中去查询
<details>
<summary>
    算法与数据结构
</summary> 

* 2020-09-01 
  * [单链表转置](https://sugarat.top/coding/algorithm/linkReserve.html)
* 2020-09-03
  * [快速排序](https://sugarat.top/coding/algorithm/quickSort.html)
  * [归并排序](https://sugarat.top/coding/algorithm/mergeSort.html)
* 2020-09-05
  * [大数相加](https://sugarat.top/coding/algorithm/addString.html)
</details>

<details>
<summary>
    javascript
</summary> 

* 2020-09-01 
  * [javascript原始值类型有哪些](https://sugarat.top/interview/js/primitiveType.html)
  * [为什么 0.1 + 0.2 !== 0.3](https://sugarat.top/interview/js/numNotEqual.html)
  * [判断数据类型的方法有哪几种](https://sugarat.top/bigWeb/js/p4.html)
  * [null是对象吗，为什么typeof null === 'object'](https://sugarat.top/interview/js/nullobj.html)
  * [== 与 === 有什么区别](https://sugarat.top/interview/js/equal.html)
  * [什么是类数组,如何将类数组转换为数组](https://sugarat.top/bigWeb/js/likearray.html)
* 2020-09-03
  * [数据类型转换习题](https://sugarat.top/bigWeb/js/typeConvert.html#%E8%87%AA%E6%B5%8B)
  * [判断一个变量是对对象的方案](https://sugarat.top/interview/js/judgeObj.html#_1-instanceof)
  * [判断变量是数组的方案](https://sugarat.top/interview/js/judgeArr.html)
  * [Object.keys()与Object.getOwnPropertyNames()有什么区别](https://sugarat.top/coding/js/deepClone.html#_4-%E6%8B%B7%E8%B4%9Dsymbol)
  * [下面如何定义`a`才能打印`yes`](https://sugarat.top/coding/js/equalA.html#%E5%AE%9A%E4%B9%89-toprimitive)
  ```js
  if (a == 1 && a == 2) {
    console.log('yes')
  }
  ```
  * [数组哪些方法会改变自己](https://sugarat.top/interview/js/changeArr.html)
  * 将any（任意值）转换为布尔值的方法有哪些
  ```js
  // 1 Boolean
  Boolean('') // false
  // 2 取反两次
  !!''  // false
  ```
  * 下面问题看看[2020-09-03](./2020-09-03/README.md)其它同学的杰作
  * 写个匹配手机号,邮箱的正则
  * 写一个提取url中params的函数
* 2020-09-05
  * [模拟实现new命令](https://sugarat.top/coding/js/myNew.html)
  * [模拟实现call](https://sugarat.top/coding/js/myCall.html)
  * [模拟实现apply](https://sugarat.top/coding/js/myApply.html)
  * [模拟实现bind](https://sugarat.top/coding/js/myBind.html)
  * 更改this的指向有哪些方案
    * new/bind/call/apply
  * [bind,call,apply区别是什么](https://sugarat.top/bigWeb/js/apply.html)
  * [原型/原型链](https://sugarat.top/bigWeb/js/prototype.html)
  * [instanceof判断变量类型的原理是什么](https://sugarat.top/interview/js/instanceof.html)
  * [继承实现](https://sugarat.top/coding/js/inherit.html)
</details>

## 推荐阅读
放一些大佬的博客/文章

**具备一定基础后，差不多品完09-01--09-10中的内容**
1. [冴羽的博客](https://github.com/mqyqingfeng/Blog)

## 相关资料
### 程序员基本功
* markdown
  * [在线编辑器](https://www.zybuluo.com/mdeditor)
  * [语法手册](https://www.zybuluo.com/mdeditor?url=https://www.zybuluo.com/static/editor/md-help.markdown)
* Git
  * [通俗易懂的Git入门教程](https://www.liaoxuefeng.com/wiki/896043488029600)
  * [Git 基本操作整理](https://sugarat.top/technology/learn/git-base.html)

### CS
* 算法与数据结构
  * [坐在马桶刷看算法系列-快速排序](https://blog.csdn.net/afjaklsdflka/article/details/52829030)
  * [菜鸟教程-归并排序](https://www.runoob.com/w3cnote/merge-sort.html)
  * [百度百科-归并排序](https://baike.baidu.com/item/%E5%BD%92%E5%B9%B6%E6%8E%92%E5%BA%8F/1639015)
  * [TopK问题](https://juejin.im/entry/6844903774004183047#comment)
  * [菜鸟教程:堆排序](https://www.runoob.com/w3cnote/heap-sort.html)
  * [掘金：堆排讲解](https://juejin.im/post/6844903826923716616)
* 计算机网络
  * [掘金：用 4.5 万字，谈一谈网络协议的微缩宇宙](https://juejin.im/post/6854573219509338119)
  * [掘金：前端备战21秋招之计算机网络，我觉得这一篇应该就够了](https://juejin.im/post/6846687590268010509)
### JavaScript
* [网道JavaScript](https://wangdoc.com/javascript/index.html)
* [ES6标准入门](https://wangdoc.com/es6/)
* [冴羽的博客](https://github.com/mqyqingfeng/Blog)
* [简单易懂-原型与原型链的关系](https://juejin.im/pin/6844910475042357261)
* [原型与原型链](https://sugarat.top/bigWeb/js/prototype.html)
* [js类型转换规则](https://sugarat.top/bigWeb/js/typeConvert.html)
* [正则常用关键字](https://sugarat.top/bigWeb/regexp)
* [简单易懂-原型与原型链的关系](https://juejin.im/pin/6844910475042357261)
* [原型与原型链](https://sugarat.top/bigWeb/js/prototype.html)
* [event loop](https://sugarat.top/bigWeb/js/eventloop.html)
* [作用域](https://sugarat.top/bigWeb/js/scope.html)
* [执行上下文栈](https://sugarat.top/bigWeb/js/runStack.html)
* [变量对象](https://sugarat.top/bigWeb/js/variableObject.html)
* [作用域链](https://sugarat.top/bigWeb/js/scopeLink.html)
* [执行上下文](https://sugarat.top/bigWeb/js/runcontext.html)
* [参数按值传递](https://sugarat.top/bigWeb/js/valuePass.html)
* [Node JS](https://nodejs.org/zh-cn/)

### 其它
* [VS Code](https://code.visualstudio.com)
* [正则测试 - regex101](https://regex101.com/)
* [正则可视化 - Regexper](https://regexper.com/)
# 算法与数据结构/ES6/拓展深广度
列出的学习资料，不一定与做的题目有关，没有头绪的题目建议自己查查相关资料进行学习（自我探索的过程学到的东西会更多）：
* 掘金
* 思否
* 谷歌搜索

## 算法与数据结构
### 学习资料
* [百度百科-尾递归 ](https://baike.baidu.com/item/%E5%B0%BE%E9%80%92%E5%BD%92)
* [尾调用优化](http://www.ruanyifeng.com/blog/2015/04/tail-call.html)

### 题目
1. 统计一篇英文文章中出现次数最多的N个单词(假设单词与单词之间的分隔符都为空格)
```js
function solve(article,n){

}
```
举例解释
```js
solve('abc ab abc abc ab a b aa',2) // [abc,ab] 
// abc 3次
// ab  2次
// a   1次
// b   1次
// aa  1次
// 所以次数 最多的2个单词 是 abc ab   
```
###
## 2. ES6 
### 学习资料
[ECMAScript 6 教程](https://wangdoc.com/es6/index.html)

阅读4,5章内容：
1. [字符串的扩展](https://wangdoc.com/es6/string.html)
2. [字符串的新增方法](https://wangdoc.com/es6/string-methods.html)

其余文章：

### 相关问题
1. 说一下闭包有什么缺点？如何避免
2. 什么是内存泄露，有什么危害
3. 简单说一下浏览器中的js垃圾回收机制是怎么样的
4. 模板字符串有哪些特(优)点
5. 实现一个函数,实现模板字符串的填充，期望
   * 对象中不含有的属性不处理
   * ${ xxx } 括号中可能有多个空格隔开属性名
```js
function templateStr(str,obj){

}
```
期望结果
```js
const a = {name:'xiaoming'}
const b = {name:'xm',age:18}
templateStr('abcd${name}dsds${age}',a) // abcdxiaomingdsds${age}
templateStr('abcd${  name   }dsds',a) // abcdxiaomingdsds
templateStr('abcd${name}dsds${age}',b) // abcdxmdsds18
```

## 3.拓展深广度
* 图片格式
  * [常见图片格式](https://sugarat.top/bigWeb/performance/image.html#%E5%9B%BE%E7%89%87%E6%A0%BC%E5%BC%8F)
  * [[译] 你用对图片格式了吗？](https://juejin.im/post/6844903687890927630)
  * [聊一聊几种常用web图片格式：gif、jpg、png、webp](https://juejin.im/post/6844903953172267022)
  * [一文读懂 Web 开发中常见的图片格式](https://juejin.im/post/6844903985015422983)
* Chrome 开发者工具
  * [官方文档](https://developers.google.cn/web/tools/chrome-devtools/)
  * [Chrome DevTools手册中文版 ](https://www.bookstack.cn/read/chrome_devtool_book/README.md)
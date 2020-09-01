# 问答题答案

**1.javascript原始值类型有哪些(ES5)**

一共有五种基本类型：

1.number
2.string
3.boolean
4.function
5.object

**2.为什么0.1 + 0.2 !== 0.3**

因为js再进行某些浮点数运算时会造成精度不准确！

**3.判断数据类型的方法有哪几种**

1.typeof

2.instanceof

3.constructor

**4.null是对象吗，为什么typeof null === 'object'**

typeof null === 'object'  这是true
null instanceof Object    这是false
null instanceof Object    这是false
这是一个历史遗留下来的 feature(or bug?)，The history of “typeof null”
然后可以参考一下[博客园：在javaScript中为什么typeof null 的结果是object](https://www.cnblogs.com/chargeworld/p/10387195.html)

**5.== 与 === 有什么区别**

==：运算符称作相等，用来检测两个操作数是否相等，这里的相等定义的非常宽松，可以允许进行类型转换

===：用来检测两个操作数是否严格相等

1、对于string,number等基础类型，==和===是有区别的
不同类型间比较，==之比较“转化成同一类型后的值”看“值”是否相等，===如果类型不同，其结果就是不等
同类型比较，直接进行“值”比较，两者结果一样

2、对于Array,Object等高级类型，==和===是没有区别的

3、基础类型与高级类型，==和===是有区别的
对于==，将高级转化为基础类型，进行“值”比较，因为类型不同，===结果为false
== 仅仅表示前后的布尔值是否一致 而 === 则需要是同一个变量

**6.什么是类数组，如何将类数组转换为数组**

类数组：如果一个非数组对象有length属性值，则它就是类数组

转换方法：加一个slice方法就可以了

ES6中有现成的Array.from()

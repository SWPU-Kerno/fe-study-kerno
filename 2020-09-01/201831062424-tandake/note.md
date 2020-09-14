#####1. javascript原始值类型有哪些（ES5）

>原始值类型：number、string、boolean、null、undefined

#####2. 为什么 0.1 + 0.2 !== 0.3

>首先，js是弱类型语言，没有定义不同的数据类型，遵循国际 IEEE 754 标准，将数字存储为双精度浮点数。这种格式以 64 位存储数字，其中数字（分数）存储在位 0 到 51 中，指数存储在位 52 到 62 中，符号存储在位 63 中。所以计算机内部在用科学计数法表示二进制的0.1时只保留52位，0.2同理，所以相加之后会造成一定的精度丢失

#####3. 判断数据类型的方法有哪几种

>* typeof 只能判断基本的 对于对象，数组和null都返回Object
>* Object.prototype.toString.call() 借用Object的原型链，改变执行上下文判断
>* instanceof 一般用来判断数组
>* Array.isArray() 判断是否是数组
>* constructor 返回构造函数

#####4. null是对象吗，为什么typeof null === 'object'

>不是 
>>历史遗留问题 已经成为了js的一个feature而不是一个bug，修改这个规范可能会造成难以预计的后果，但是在新规范中可以对null加以鉴别

#####5. == 与 === 有什么区别

>使用 == 会遵守javascript的隐式类型转换的规则，而 === 代表严格相等，不会进行类型转换

#####6. 什么是类数组,如何将类数组转换为数组
类数组是对象，所有的属性名都是自然数，有length属性记录属性的个数
######转换方法
>```Array.from(arrayLike)``` ```Array.prototype.slice.call(arrayLike)```

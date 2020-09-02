## 回答
1. javascript原始值类型有哪些（ES5）
	<p>答：五种原始类型`number、string、boolean、null、undefined`，对象是引用类型，包括三种子类型：狭义的Object类型，Array类型、Function类型`</p>
2. 为什么 `0.1 + 0.2 !== 0.3`
	<p>答：因为浮点数的表示精度有误差，比较浮点数是否相等时，应该作差，当差值小于某个极小值的时候表示相等</p>
3. 判断数据类型的方法有哪几种
	<p>答：判断`undefined`和`null`类型可以直接用 `===` 操作符，其余的可以通过`typeof`运算符、`instanceof`运算符、`Object.prototype.toString`方法来判断</p>
4. `null`是对象吗，为什么`typeof null === 'object'`
	<p>答：null不是对象，null是一种特殊的数据类型。typeof null之所以为'object' 是因为最初只把它当作object的一种特殊值。后来null独立出来，作为一种单独的数据类型，为了兼容以前的代码，typeof null返回object就没法改变了。</p>
5. `==` 与 `===` 有什么区别
	<p>答：用`==` 比较两个值是否相等时会自动作类型转换，比如`123  == "123"` 为`true`, 而用`===`则不会做类型转换</p>
6. 什么是类数组,如何将类数组转换为数组
	<p>答：类数组是对象，所有键名都是正整数或零，并且有`length`属性, 可以通过`Array.from(arrayLike)` 或`Array.prototype.slice.call(arrayLike)`转换为数组</p>
## 回答
1. javascript原始值类型有哪些（ES5）
	答：字符串，数值，布尔值。对象是合成类型，`null`和`undefined`是特殊值
2. 为什么 `0.1 + 0.2 !== 0.3`
	答：因为浮点数的表示精度有误差，比较浮点数是否相等时，应该作差，当差值小于某个极小值的时候表示相等
3. 判断数据类型的方法有哪几种
	答：判断`undefined`和`null`类型可以直接用 `===` 操作符，其余的可以通过`typeof`运算符、`instanceof`运算符、`Object.prototype.toString`方法来判断
4. `null`是对象吗，为什么`typeof null === 'object'`
	答：`null`是对象，表示空引用，`typeof null === 'object'`是因为null被当作是`object`的一个特殊值
5. `==` 与 `===` 有什么区别
	答：用`==` 比较两个值是否相等时会自动作类型转换，比如`123  == "123"` 为`true`, 而用`===`则不会做类型转换
6. 什么是类数组,如何将类数组转换为数组
	答：类数组是对象，所有键名都是正整数或零，并且有`length`属性, 可以通过`Array.from(arrayLike)` 或`Array.prototype.slice.call(arrayLike)`转换为数组
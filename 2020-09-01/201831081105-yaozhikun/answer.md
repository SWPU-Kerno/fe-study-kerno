## 回答
1. javascript原始值类型有哪些（ES5）
	<p>答：五种原始类型`number、string、boolean、null、undefined`，对象是引用类型，包括三种子类型：狭义的Object类型，Array类型、Function类型`</p>
2. 为什么 `0.1 + 0.2 !== 0.3`
	<p>答：因为浮点数的表示精度有误差，比较浮点数是否相等时，应该作差，当差值小于某个极小值的时候表示相等</p>
3. 判断数据类型的方法有哪几种
	<p>答：判断`undefined`和`null`类型可以直接用 `===` 操作符，
	其余的可以通过运算符、`instanceof`运算符、`Object.prototype.toString`方法来判断，
	对于`typeof`：其不能用于判断null和array，因为其判定结果也是Object，无法明了的知道他到底是哪一个。
	对于`instanceof`:其判定的原理是通过原型链的关系来判定的；
		即 表达式  `A instanceof B`；如果B的显式原型对象在A的原型链上，则返回true，否则返回false。
	</p>
4. `null`是对象吗，为什么`typeof null === 'object'`
	<p>答：null是一个表示“空”的对象，转为数值时为0。
	typeof null之所以为'object' 是因为最初只把它当作object的一种特殊值。后来null独立出来，作为一种单独的数据类型，为了兼容以前的代码，typeof null返回object就没法改变了。</p>
5. `==` 与 `===` 有什么区别
	<p>答：用`==` 比较两个值是否相等时会自动作类型转换，比如`123  == "123"` 为`true`, 而用`===`则不会做类型转换</p>
6. 什么是类数组,如何将类数组转换为数组
	<p>答：
	类数组就是像数组的对象，
		ex:函数中的arguments
	其有数组的length的属性，并通过索引来进行访问，但是没有数组的部分方法。
	类数组和数组的判断方法：
		使用Array.isArray：
			Array.isArray(fakeArray) === false;
			Array.isArray(arr) === true;
	
	将类数组转为数组的方法有三种：
	（1）[].slice.call(obj) 这个等于Array.protype.slice.call(obj)
			slice会把通过索引位置获取新的数组，该方法不会修改原数组，只是返回一个新的子数组.call会把this的指向改为传进去的obj。
			ex:var newArr=[].slice.call(obj)
	（2）Array.form(obj),ES6的新语法
			ex:var newArr=Array.from(obj)
	（3）使用扩展运算符,也是ES6的语法
			ex:var newArr= [...obj]
	</p>
## 链表中倒数第k个节点
```js
### 第一种方法
var getKthFromEnd = function(head, k) {
    let arr = []
	// 把链表中的结点保存在数组里面
    while (head) {
        arr.push(head)
        head = head.next
		// 为了减少使用的空间，只保存k个
        if (arr.length > k)
        {
            arr.shift()
        }
    }
	// 将倒数k个返回
    return arr[0]
};
### 第二种方法
function reverseLink(head) {
    let pre = null
    let cur = head
    while (cur){
        let next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    return pre
}
var getKthFromEnd = function(head, k) {
	// 先逆转链表
    head = reverseLink(head)
    let tmpHead = head
    k = k - 1
	// 找到第前k个
    while (k){
        tmpHead = tmpHead.next
        k -= 1
    }
	// 再逆转回来
    reverseLink(head)
    return tmpHead
};
```
## 相关问题
### 1. 什么是IIFE？如何使用？
<pre>
答：IIFE: Immediately Invoked Function Expression，立即调用的函数表达式，也就是说，声明函数后立即调用这个函数。
</pre>
```js
// IIFE形式的函数调用：

(function() {
    ...
})();
```
### 2. 什么是闭包?闭包有什么优点
<pre>
答：闭包就是能够读取其他函数内部变量的函数。所以闭包可以理解成“定义在一个函数内部的函数”。
优点：1. 避免污染全局作用域，对模块封装有好处
2. 延长了变量的生命周期
</pre>
### 3. 什么是提升(变量提升/函数提升)？提升规则是什么
<pre>
答：提升：var声明的变量和声明的函数，声明的位置会提升到当前作用域的首部
规则：1.变量提升只会提升变量名的声明，而不会提升变量的赋值初始化。
2.函数提升的优先级大于变量提升的优先级，即函数提升在变量提升之上。
</pre>
### 4. delete命令的作用是什么？其局限性是什么
<pre>
答：delete用于删除变量及属性。
局限性：1. 不能删除属性描述符对象[[configurable]]被设置成为false的属性。
2. 不能删除被Object.freeze冻结的对象的属性
3. 不能删除arguments对象
4. 不能删除使用var声明的变量
5. 不能删除声明的函数
6. 不能删除内置构造器的prototype，如Object.prototype
</pre>
### 5. 如何获取函数预期传入的参数个数
<pre>
答：通过函数的length属性
</pre>
### 6. eval命令的作用是什么
<pre>
答：用来解释字符串作为js代码执行
</pre>
### 7. 遍历数组有哪些方式
<pre>
答：1. 通过for循环遍历
2. .forEach（）
3. .map（）
4. for....in
5. for.......of
</pre>
### 8. forin遍历数组有什么缺点
<pre>
答：使用forin遍历数组，期望得到的是数组中的索引，但是如果为数组的原型添加了方法，也会将该方法遍历出来，容易出现意料之外的结果
</pre>
### 9. 逗号(",")运算符的作用是什么
<pre>
答：逗号运算符的作用是将若干表达式连接起来。它的优先级别在所有运算符中是最低的，结合方向是"自左至右"的
</pre>
### 10. 将字符串转为数字的方法有哪些
<pre>
答：1. Number()
2. Number.parseFloat()
3. Number.parseInt()
4. "1" * 1
</pre>
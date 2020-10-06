# 918
## 算法与数据结构/ES6/拓展深广度
### 1. 判断二叉树是否对称
> leetcode题链：剑指 Offer 28. 对称的二叉树
请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。

#### 我的思路
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def isSymmetric(self, root: TreeNode) -> bool:
        # direction == 0
        l2r = []
        # direction == 1
        r2l = []
        # 用模式区分遍历的方向
        def traverse(root, arr, direction):
        
            if not root:
                # 不能忽略空结点，否则无法辨认对称树
                arr.append(None)
            else:
                arr.append(root.val)
                if not direction:
                    traverse(root.left, arr, direction)
                    traverse(root.right, arr, direction)
                else:
                    traverse(root.right, arr, direction)
                    traverse(root.left, arr, direction)
        
        # 用前序遍历的方式，遍历两次，分别是
        # 中左右
        traverse(root, l2r, 0)
        # 中右左
        traverse(root, r2l, 1)
        # 转换成字符串再比较是否相等
        l2rs = "".join(list(map(str, l2r)))
        r2ls = "".join(list(map(str, r2l)))

        return l2rs == r2ls
```
#### 时间复杂度、空间复杂度分析
```python
设时间复杂度的n为结点个数，则总共调用的函数次数为n（结点个数） + （n + 1）(空指针个数)，共2n+1次，而每个函数内部执行的操作时间复杂度为常数阶O(1)
因此总的时间复杂度为O(n)

设空间复杂度的n为结点个数，每调用一次traverse函数，申请四个空间，分别是头指针、数组引用、方向，以及append进数组所占用的空间，也为常数阶O(1), 而traverse函数共执行2n+1次
因此总的空间复杂度为O(n)
```

#### 题解的思路
```python
class Solution:
    def isSymmetric(self, root: TreeNode) -> bool:
        def recur(L, R):
            # 如果都为空，则相等
            if not L and not R: return True
            # 如果仅有一个为空，则不相等
            # 如果两个都不空，值不相等则不相等
            if not L or not R or L.val != R.val: return False
            # 继续向底层递归，两个子结点都对称才对称
            return recur(L.left, R.right) and recur(L.right, R.left)
            # 如果root 为空则返回ture，否则返回recur(...)
        return recur(root.left, root.right) if root else True
```

### 相关问题
#### 1. es与js的关系
<pre>
答：ES全称ECMAScript, 是一个制定浏览器脚本(实际就是JavaScript)规范的组织，而JavaScript是ECMAScirpt规范的一种实现
</pre>
#### 2. 知道polyfill吗，其有什么作用
<pre>
答：polyfill译为垫片，实际作用是给一些不支持某些API的浏览器提供一种API的实现，旨在填平浏览器之间的差异
</pre>
#### 3. 常用的浏览器内核有哪几种
<pre>
答：
IE: Trident
Firefox: Gecko
Safari: Webkit
Chrome: Chromium/Blink(Blink属于webkit分支)
Opera: Blink
Android: 主要是Webkit
IOS: 一般是Webkit或者Trident
</pre>
#### 4. let/const/var声明的变量有什么区别
<pre>
答：
var声明的变量没有块级作用域，并且存在变量提升
let 存在块级作用域、暂时性死区
const除了定义的变量为常量外，其余性质与let一致
</pre>
#### 5. 什么是暂时性死区
<pre>
答：暂时性死区的本质就是，只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量。
</pre>
#### 6. 什么是块级作用域
<pre>
答：对于let 和 const 定义的变量，使用范围会被限制在一对大块号内，这个范围就是块级作用域
</pre>
#### 7. js中作用域分为哪几种
<pre>
答：全局作用域、函数级作用域、块级作用域
</pre>
#### 8. globalThis是什么，有什么作用
<pre>
答：globalThis是一个提供全局环境的顶层对象，通过垫片库global-this，可以在所有环境拿到globalThis。
</pre>
#### 9. 解构赋值可以有哪些用途
<pre>
答：
1. 交换变量的值: 
    [x, y] = [y, x]
2. 从函数返回多个值:
    function example() {
      return {
        foo: 1,
        bar: 2
      };
    }
    let { foo, bar } = example();
3. 函数参数的定义:
    // 参数是一组有次序的值
    function f([x, y, z]) { ... }
    f([1, 2, 3]);

    // 参数是一组无次序的值
    function f({x, y, z}) { ... }
    f({z: 3, y: 2, x: 1});
4. 提取JSON数据:
    let { id, status, data: number } = jsonData;
5. 函数参数的默认值:
    jQuery.ajax = function (url, {
      async = true,
      beforeSend = function () {},
      cache = true,
      complete = function () {},
      crossDomain = false,
      global = true,
      // ... more config
    } = {}) {
      // ... do stuff
    };
6. 遍历map结构:
    for (let [key, value] of map) {
      console.log(key + " is " + value);
    }
7. 输入模块的指定方法:
    const { SourceMapConsumer, SourceNode } = require("source-map");
</pre>

### 一点笔记
#### for循环作用域

> for循环还有一个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。
```js
for (let i = 0; i < 3; i++) {
  let i = 'abc';
  console.log(i);
}
// abc
// abc
// abc
```
<pre>
上面代码正确运行，输出了 3 次abc。这表明函数内部的变量i与循环变量i不在同一个作用域，有各自单独的作用域。
</pre>

#### 暂时性死区


> 只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。
暂时性死区的本质就是，只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量。

```js
var tmp = 123;

if (true) {
  tmp = 'abc'; // ReferenceError
  let tmp;
}
```

<pre>
上面代码中，存在全局变量tmp，但是块级作用域内let又声明了一个局部变量tmp，导致后者绑定这个块级作用域，所以在let声明变量前，对tmp赋值会报错。

ES6 明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。

总之，在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）。
暂时性死区的本质就是，只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量。
</pre>

#### 块级作用域与函数声明
> ES5不允许在块级作用域中声明函数，但浏览器未遵循。ES6允许在块级作用域中声明函数，但ES5和ES6之中，存在差异

```js
function f() { console.log('I am outside!'); }

(function () {
  if (false) {
    // 重复声明一次函数f
    function f() { console.log('I am inside!'); }
  }

  f();
}());

// ES5 环境
function f() { console.log('I am outside!'); }

(function () {
  // 提升到了函数作用域首部
  function f() { console.log('I am inside!'); }
  if (false) {
  }
  f();
}());
// I am inside!

// 浏览器的 ES6 环境
function f() { console.log('I am outside!'); }
(function () {
  // 类似于 var
  var f = undefined;
  if (false) {
    function f() { console.log('I am inside!'); }
  }

  f();
}());
// Uncaught TypeError: f is not a function
```
<pre>
由于浏览器版本的差异性，应尽量避免在块级作用域中声明函数，即使需要定义函数，也应该写成匿名函数的形式
</pre>

#### 顶层对象的属性
> var 命令和 function 命令声明的全局变量，依旧是顶层对象的属性；
let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性。
也就是说，从 ES6 开始，全局变量将逐步与顶层对象的属性脱钩。

#### 解析赋值不得使用圆括号的情况
> 以下三种解构赋值不得使用圆括号。

```js
（1）变量声明语句

// 全部报错
let [(a)] = [1];

let {x: (c)} = {};
let ({x: c}) = {};
let {(x: c)} = {};
let {(x): c} = {};

let { o: ({ p: p }) } = { o: { p: 2 } };
上面 6 个语句都会报错，因为它们都是变量声明语句，模式不能使用圆括号。

（2）函数参数

函数参数也属于变量声明，因此不能带有圆括号。

// 报错
function f([(z)]) { return z; }
// 报错
function f([z,(x)]) { return x; }
（3）赋值语句的模式

// 全部报错
({ p: a }) = { p: 42 };
([a]) = [5];
上面代码将整个模式放在圆括号之中，导致报错。

// 报错
[({ p: a }), { x: c }] = [{}, {}];
上面代码将一部分模式放在圆括号之中，导致报错。
```

> 可以使用圆括号的情况
可以使用圆括号的情况只有一种：赋值语句的非模式部分，可以使用圆括号。

```js
[(b)] = [3]; // 正确
({ p: (d) } = {}); // 正确
[(parseInt.prop)] = [3]; // 正确
```
<pre>
上面三行语句都可以正确执行，因为首先它们都是赋值语句，而不是声明语句；其次它们的圆括号都不属于模式的一部分。第一行语句中，模式是取数组的第一个成员，跟圆括号无关；第二行语句中，模式是p，而不是d；第三行语句与第一行语句的性质一致。
</pre>

#### 函数传参中使用解析赋值
```js
jQuery.ajax = function (url, {
  async = true,
  beforeSend = function () {},
  cache = true,
  complete = function () {},
  crossDomain = false,
  global = true,
  // ... more config
} = {}) {
  // ... do stuff
};
```
<pre>
指定参数的默认值，就避免了在函数体内部再写var foo = config.foo || 'default 
foo';这样的语句。
</pre>
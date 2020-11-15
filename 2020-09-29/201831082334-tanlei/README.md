#929


## 算法与数据结构/ES6/拓展深广度
### 1. 算法与数据结构
    leetcode题链：剑指 Offer 55 - I. 二叉树的深度
    
    
```js
var maxDepth = function(root) {
    // 记录最大值
    let max = 0;
    function dfs(root, depth=1) {
        if (root) {
            if (depth>max){
                max = depth;
            }
            dfs(root.left, depth+1);
            dfs(root.right, depth+1);
            
        }
        if (depth===1){
            return max;
        }
    }
    return dfs(root);
};  
```
### 时间复杂度/空间复杂度分析
<pre>
时间复杂度：设输入规模为结点个数n，则dfs会前往所有n个结点及为undefined的结点，共2n+1个，共调用dfs 2n+1次，每次执行的语句为基本语句，因此时间复杂度为O(n)
空间复杂度：设输入规模为结点个数n，dfs执行2n+1将，所需要开辟的栈空间与n无关，为常数量，因此空间复杂度为O(n)
</pre>

### 2. ES6
    学习资料
    ECMAScript 6 教程

    阅读第8章：
    
    函数的扩展
    其它：
    
    如何判断this的指向
    掘金-尾调用和尾递归
### 问题
1. 下面代码的输出是什么,说明理由
```js
// demo1
for (var i = 0; i < 10; i++) {
    setTimeout(()=>{
        console.log(i);
    },i*100)
}

// demo2
function fn(b) {
    if (b) {
        var a = 10;
    }
    console.log(a);
}
fn(true);
fn(false);
```
<pre>
答：
    demo1输出10次10，因为在循环里面使用var声明的变量i, 因此在外部作用域，箭头函数中使用的i指向外部作用域，而当定时器执行时，循环变量已经被迭代到10
    如果使用let变量声明变量i，会触发循环作用域，每一次循环变量i都是单独的，匿名函数中又引用了循环作用域中的变量使得每次循环前一次的变量i被保留，当定时器触发时，会依次输出0到9
    demo2输出10和undefined，当参数为true的时候，进行赋值语句赋值，输出10，当参数为false时，由于var变量的声明提升，使得变量a被定义，但是得不到赋值，因此输出undefined，如果使用let 声明变量b，则会因为没有定义而报错
</pre>
2. 函数的length属性有什么作用
<pre>
答：
    length属性的含义是，该函数预期传入的参数个数
</pre>
3. 箭头函数有什么特点，与普通函数有什么区别
<pre>
答：
    1. 箭头函数内部没有this。使用定义时外部作用域的this。
    2. 不可以当作构造函数，因为内部没有自己的this
    3. 不可以使用arguments对象，可以用rest参数代替
    4. 不可以使用yield命令，因此箭头函数不能用途Generator函数
</pre>
4. 如何判断this的指向
<pre>
1. 箭头函数的this由上下文决定，即包裹箭头函数的第一个普通函数的this
2. 普通函数直接调用this为window
3. 普通函数通过对象调用this为调用它的对象
4. 普通函数被new的方式使用, this为new出来的新对象
5. 普通函数被bind/call/apply，this为传入的第一个参数，如果第一个参数为空，this为window
6. 全局作用域下this为window
</pre>
5. 什么是尾调用
<pre>
答：
    就是指某个函数的最后一步是调用另一个函数。
    尾调用优化：尾调用由于是函数的最后一步操作，所以不需要保留外层函数的调用帧，因为调用位置、内部变量等信息都不会再用到了，只要直接用内层函数的调用帧，取代外层函数的调用帧就可以了。
    ES6 的尾调用优化只在严格模式下开启，正常模式是无效的。
    这是因为在正常模式下，函数内部有两个变量，可以跟踪函数的调用栈。
        func.arguments：返回调用时函数的参数。
        func.caller：返回调用当前函数的那个函数。
    尾调用优化发生时，函数的调用栈会改写，因此上面两个变量就会失真。严格模式禁用这两个变量，所以尾调用模式仅在严格模式下生效。
</pre>
6. 什么是尾递归
<pre>
答：
    尾调用自身，就称为尾递归。
</pre>
### 3.拓展深广度
serverless:

    Serverless的本质是什么？
    掘金-分享狼叔关于《大前端工程化的实践与思考》

### 4.笔记
<hr>
#### 函数参数默认值惰性求值：
一个容易忽略的地方是，参数默认值不是传值的，而是每次都重新计算默认值表达式的值。也就是说，参数默认值是惰性求值的。
```js
let x = 99;
function foo(p = x + 1) {
  console.log(p);
}

foo() // 100

x = 100;
foo() // 101
```
上面代码中，参数p的默认值是x + 1。这时，每次调用函数foo，都会重新计算x + 1，而不是默认p等于 100。

<hr>
#### 双重默认值：
下面是另一个解构赋值默认值的例子。
```js
function fetch(url, { body = '', method = 'GET', headers = {} }) {
  console.log(method);
}

fetch('http://example.com', {})
// "GET"

fetch('http://example.com')
// 报错
// 相当于 let { body = '', method = 'GET', headers = {} } = undefined
```
这种写法不能省略第二个参数，如果结合函数参数的默认值，就可以省略第二个参数。这时，就出现了双重默认值。一重是函数参数默认值，另一重是对象解构默认值。
```js
function fetch(url, { body = '', method = 'GET', headers = {} } = {}) {
  console.log(method);
}

fetch('http://example.com')
// "GET"
```
上面代码中，函数fetch没有第二个参数时，函数参数的默认值就会生效，然后才是解构赋值的默认值生效，变量method才会取到默认值GET。

作为练习，请问下面两种写法有什么差别？
```js
// 写法一
function m1({x = 0, y = 0} = {}) {
  return [x, y];
}

// 写法二
function m2({x, y} = { x: 0, y: 0 }) {
  return [x, y];
}
```
上面两种写法都对函数的参数设定了默认值，区别是写法一函数参数的默认值是空对象，但是设置了对象解构赋值的默认值；写法二函数参数的默认值是一个有具体属性的对象，但是没有设置对象解构赋值的默认值。
```js
// 函数没有参数的情况
m1() // [0, 0]
m2() // [0, 0]

// x 和 y 都有值的情况
m1({x: 3, y: 8}) // [3, 8]
m2({x: 3, y: 8}) // [3, 8]

// x 有值，y 无值的情况
m1({x: 3}) // [3, 0]
m2({x: 3}) // [3, undefined]

// x 和 y 都无值的情况
m1({}) // [0, 0];
m2({}) // [undefined, undefined]

m1({z: 3}) // [0, 0]
m2({z: 3}) // [undefined, undefined]

```
<hr>

#### 函数的 length 属性:
length属性的含义是，该函数预期传入的参数个数。某个参数指定默认值以后，预期传入的参数个数就不包括这个参数了。
```js
(function (a) {}).length // 1
(function (a = 5) {}).length // 0
(function (a, b, c = 5) {}).length // 2
```
如果设置了默认值的参数不是尾参数，那么length属性也不再计入后面的参数了。
```js
(function (a = 0, b, c) {}).length // 0
(function (a, b = 1, c) {}).length // 1
```

<hr>

#### 函数参数作用域
一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域（context）。等到初始化结束，这个作用域就会消失。这种语法行为，在不设置参数默认值时，是不会出现的。
```js
var x = 1;

function f(x, y = x) {
  console.log(y);
}

f(2) // 2
====分割线====
let foo = 'outer';

function bar(func = () => foo) {
  let foo = 'inner';
  console.log(func());
}

bar(); // outer
```
下面是一个更复杂的例子。
```js
var x = 1;
function foo(x, y = function() { x = 2; }) {
  var x = 3;
  y();
  console.log(x);
}

foo() // 3
x // 1
```
上面代码中，函数foo的参数形成一个单独作用域。这个作用域里面，首先声明了变量x，然后声明了变量y，y的默认值是一个匿名函数。这个匿名函数内部的变量x，指向同一个作用域的第一个参数x。函数foo内部又声明了一个内部变量x，该变量与第一个参数x由于不是同一个作用域，所以不是同一个变量，因此执行y后，内部变量x和外部全局变量x的值都没变。

<hr>

#### 匿名函数
函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
```js
function foo() {
  setTimeout(() => {
    console.log('id:', this.id);
  }, 100);
}

var id = 21;

foo.call({ id: 42 });
// id: 42
```
this指向的固定化，实际原因是箭头函数根本没有自己的this，导致内部的this就是外层代码块的this。正是因为它没有this，所以也就不能用作构造函数。
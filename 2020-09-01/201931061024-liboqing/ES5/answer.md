1. ### javascript原始值类型有哪些（ES5）
>* 数值：`number`
>* 字符串： `string`
>* 布尔值：`boolean`
>* 未定义：`undefined`
>* 空值：`null`
2. ### 为什么 0.1 + 0.2 !== 0.3
>!== 只在两个操作数未经转换就相等的情况下返回true，JavaScript 语言的底层根本没有整数，所有数字都是小数（64位浮点数）。容易造成混淆的是，某些运算只有整数才能完成，此时 JavaScript 会自动把64位浮点数，转成32位整数，然后再进行运算，最后导致结果不精确。
3. ### 判断数据类型的方法有哪几种
>3种：
>* `typeof` 运算符
>* `instanceof` 运算符
>* `Object.prototype.toString` 方法
4. ### null是对象吗，为什么typeof null === 'object'
>* null不是对象。  
>* (1) 从逻辑角度看，null值表示一个空对象指针，所以typeof检测时返回"object"；
>* (2) 不同的对象在底层都表示为二进制，在javascript中要是二进制前三位都是0的话就表示对象，而null的二进制都是0，那么前三位自然也是0，就被认为是object，所以typeof null 返回的是object.
5. ### == 与 === 有什么区别
>* == 表示相等，比较时先转换操作数，然后再比较相等性（只比较值，不比较类型）
>* === 表示全等，比较时不转换操作数，直接比较相等性（既比较值，又比较类型）
6. ### 什么是类数组,如何将类数组转换为数组
>* 是具有length属性，长得像数组，但是不具有数组特有的方法（如push方法）   

转换方法：
1. Array.prototype.slice.call(类数组对象)
```
function foo(a, b) {
             let res = Array.prototype.slice.call(arguments);
             console.log(res);
          }

         foo('aaa', 'bbb');    //(2) ["aaa", "bbb"]
```
2. Array.from(类数组对象)
```
function foo(a, b) {
            let res = Array.from(arguments);
            console.log(res);
        }
        foo('aaa', 'bbb');    //(2) ["aaa", "bbb"]
```

# 算法与数据结构/ES6/拓展深广度

## 1. 算法与数据结构
leetcode题链：[剑指 Offer 55 - I. 二叉树的深度](https://leetcode-cn.com/problems/er-cha-shu-de-shen-du-lcof/)

## 2. ES6 
### 学习资料
[ECMAScript 6 教程](https://wangdoc.com/es6/index.html)

阅读第8章：
* [函数的扩展](https://wangdoc.com/es6/function.html)

其它：
* [如何判断this的指向](https://sugarat.top/interview/js/this.html)
* [掘金-尾调用和尾递归](https://juejin.im/post/6844903590033621006)

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
2. 函数的length属性有什么作用
3. 箭头函数有什么特点，与普通函数有什么区别
4. 如何判断this的指向
5. 什么是尾调用
6. 什么是尾递归
7. 下面输出结果是什么,试着分析一下别直接运行粘贴答案
```js
let obj2 = {
    name: 'obj2'
}

const obj = {
    name: 'obj',
    say1() {
        console.log(this.name)
    },
    obj1: {
        name: 'obj1',
        say2() {
            console.log(this.name);
        }
    },
    say3() {
        const fn = () => {
            console.log(this.name);
        }
        fn()
    },
    say4() {
        const fn = function () {
            console.log(this.name);
        }
        fn()
    },
    say5() {
        const fn = () => {
            console.log(this.name);
        }
        fn.call(obj2)
    },
    say6() {
        const fn = function () {
            console.log(this.name);
        }
        fn.call(obj2)
    }
}

let a = obj.say1
let b = obj.obj1.say2
a() 
b()
obj.say1()
obj.obj1.say2()
obj.say3()
obj.say4()
obj.say5()
obj.say6()
```
## 3.拓展深广度
serverless:
* [Serverless的本质是什么？](http://dockone.io/article/5999)
* [掘金-分享狼叔关于《大前端工程化的实践与思考》](https://juejin.im/post/6844903887091023885)
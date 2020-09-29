# 判断this指向

[学习资料--如何判断this的指向](https://sugarat.top/interview/js/this.html)
## 问题描述
阅读下面代码，给出自己的解答与**思路**

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

## 题解
1. 
```js
let a = obj.say1
a()
// 等价于
let a = function () {
    console.log(this.name)
}

// 这里的是普通的function
// 所以这里的this是window
// this.name --> window.name
// 结果为
undefined
```
2. 
```js
let b = obj.obj1.say2
b()
// 等价于
let b = function () {
    console.log(this.name);
}
// 后续步骤与上面一致
// 结果为
undefined
```
3. 
```js
obj.say1()
// 对于对象来说,谁调用函数谁就是this
// 所以这里this指的是obj
// 所以say1内的this.name --> obj.name
// 结果为
'obj'
```
4. 
```js
obj.obj1.say2()
// 与上一个同理
// 对于对象来说,谁调用函数谁就是this
// say2内的 this.name --> obj.obj1.name
// 结果为
'obj1'
```
5. 
```js
obj.say3()
// 函数内部有个箭头函数
// 箭头函数的this由其上下文决定
// 所以这里的上下文为say3 的function
// 等价于
obj = {
    // ...precode
    say3(){
        console.log(this.name);
    }
    // ...behcode
}
// 对于对象来说,谁调用函数谁就是this
// 所以这里的 this.name -> obj.name
// 结果为
'obj'
```
6. 
```js
obj.say4()
// 函数内部为普通函数
// 普通函数的this为window
// 所以其this指向window
// this.name --> window.name
// 结果为
undefined
```
7. 
```js
obj.say5()
// 其内部为箭头函数
// 箭头函数使用call无效
// 箭头函数的this由其上下文决定
// 所以这里的this指向由包裹其的function决定
// 又因为 对于对象来说,谁调用function谁就是this
// 所以这里this 指向 obj
// this.name --> obj.name
// 结果为
'obj'
```
8.
```js
obj.say6()
// 函数内部为普通函数
// 使用call改变了其this指向
// 所以此时this 指向 obj2
// this.name --> obj2.name
// 结果为
'obj2'
```
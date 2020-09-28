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
TODO:wait a day
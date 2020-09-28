let obj2 = {
    name: 'obj2'
}

const obj = {
    name: 'obj',
    say1() {
        console.log(this.name)//obj.say1()中的this指向obj;
    },
    obj1: {
        name: 'obj1',
        say2() {
            console.log(this.name);//obj.obj1.say2()中的this指向obj1;
        }
    },
    say3() {
        const fn = () => {
            console.log(this.name);//obj  箭头函数this无效，单独执行fn，this为fn的上一级包裹（obj）
        }
        fn()
    },
    say4() {
        const fn = function () {
            console.log(this.name);//预计是全局  单独执行fn,this为全局
        }
        fn()
    },
    say5() {
        const fn = () => {
            console.log(this.name);
        }
        fn.call(obj2)//预计是obj
    },
    say6() {
        const fn = function () {
            console.log(this.name);
        }
        fn.call(obj2)//预计是obj2
    }
}

let a = obj.say1
let b = obj.obj1.say2
a()  //全局对象  ---------------------------- 答案：undefined
b() //全局对象  ---------------------------------- undefined
obj.say1() //obj;--------------------------------obj
obj.obj1.say2() //obj1;---------------------------obj1
obj.say3() //全局对象------------------------------obj
obj.say4() //预计是obj-----------------------------undefined
obj.say5() // 预计是obj2---------------------------obj
obj.say6() //预计是obj2----------------------------obj2


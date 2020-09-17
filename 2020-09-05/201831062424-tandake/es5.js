function myNew(constructor,data) {
   let params = [].slice.call(arguments)
   let cons = params.shift() // 把构造函数取到 并且压出数组
   let returnObj = Object.create(cons.prototype) //继承构造函数的prototype属性
   let result = cons.apply(returnObj,params) // 执行构造函数
   return (typeof result === 'object' && result != null) ? result : returnObj;
   
}
// new函数的原理
/* 1. 新建一个空对象，作为要返回的对象实例
   2. 让新建的空对象，指向构造函数的原型对象
   3. 通过apply执行构造函数，同时让函数的this指向当前的空对象，并且返回对应的参数
   4. 判断构造函数的返回值是不是对象，如果是对象返回该对象，不是的话返回上面创建的空对象 
*/

// 下面是测试用例
function fn(name){
    this.name = name
}

function fn2(){
    return 1
}

function fn3(){
    return {
        key:'value'
    }
}

console.log(myNew(fn,'xm'))
console.log(myNew(fn2,'xm'))
console.log(myNew(fn3,'xm'))
// fn { name: 'xm' }
// fn2 {}
// { key: 'value' }
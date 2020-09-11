// new命令的实现步骤
// 使用new命令时，它后面的函数依次执行下面的步骤。

// 创建一个空对象，作为将要返回的对象实例。
// 将这个空对象的原型，指向构造函数的prototype属性。
// 将这个空对象赋值给函数内部的this关键字。
// 开始执行构造函数内部的代码。

function myNew(constructor,params){


    // 将arguments(这个类数组对象)转换真正的数组
    // 这里的写法还可以写成[].prototype.slice.call(arguments);

    let args = Array.prototype.slice.call(arguments);
    console.log(args);
    // 取出构造函数
    var constructor = args.shift();

    // 创建一个空对象并且继承constructor
    console.log(constructor);
    console.log(typeof constructor);

    var context = Object.create(constructor.prototype);
    console.log(context);
    console.log(typeof context);
    // 执行构造函数
    var result = constructor.apply(context,args);

    return (typeof result === 'object' && result != null) ? result:context;


}

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



console.log(myNew(fn,'xm'));
console.log(myNew(fn2,'xm'));
console.log(myNew(fn3,'xm'));
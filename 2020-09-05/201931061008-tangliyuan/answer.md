# 相关问题

### 1.模拟实现new命令

```js
function myNew(fn, ...parameters) {
            var result = {};                           //先初始化一个空对象，作为将要返回的对象实例
            Object.setPrototypeOf(result, fn.prototype); //不符合就把这个对象指向构造函数的prototype属性
            var r = fn.call(result, ...parameters);    //执行构造函数内部代码
            if (typeof r === 'object' && r !== null){  //符合返回的对象
                return r;
            }
            return result;
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

console.log(myNew(fn,'xm'))
console.log(myNew(fn2,'xm'))
console.log(myNew(fn3,'xm'))
// fn { name: 'xm' }
// fn2 {}
// { key: 'value' }
```

### 2.更改this的指向有哪些方案

 （1）JavaScript 提供了`call`、`apply`、`bind`这三个方法，来切换/固定`this`的指向。 

（2）通过new可以把this绑定到新生成的空对象上。

（3） 函数被赋给另一个变量，`this`的指向就会变。 



### 3.bind,call,apply区别是什么

 **`call`方法，**可以指定函数内部`this`的指向（即函数执行时所在的作用域），然后在所指定的作用域中，调用该函数。 

 **`apply`方法**的作用与`call`方法类似，也是改变`this`指向，然后再调用该函数。  唯一的区别就是，它接收一个数组作为函数执行时的参数 。

 **`bind()`方法**用于将函数体内的`this`绑定到某个对象，然后返回一个新函数。 



### 4.模拟实现一下bind,call,apply,

```js
Function.prototype.myCall = function (obj, ...params) {
            //如果是null，默认为window
            obj = obj || window

            //obj必须是对象
            if (typeof obj !== 'object') {
                obj = new Object(obj);
            }

            obj.fn = this;               //this指向当前这个函数，然后赋值给obj.fn属性
            let res = obj.fn(...params);  //用这个函数来处理这些参数
            delete obj.fn;              //删除这个属性，避免影响
            return res;
        }
        Function.prototype.myApply = function (obj) {
            //如果是null，默认为window
            obj = obj || window

            //obj必须是对象
            if (typeof obj !== 'object') {
                obj = new Object(obj);
            }

            obj.fn = this;
            var res = null;
            if (arguments[1]) {                 //判断是否传入数组参数,如果传入就要展开数组
                res = obj.fn(...arguments[1]);
            }
            else {
                res = obj.fn();
            }

            delete obj.fn;
            return res;

        }
        Function.prototype.myBind = function (obj, ...params) {

            if (typeof this !== 'function') {
                throw 'error'
            }
            //如果是null，默认为window
            obj = obj || window

            //obj必须是对象
            if (typeof obj !== 'object') {
                obj = new Object(obj);
            }

            var that = this; //绑定this
            return function () {
                that.call(obj, ...params)
            }
        }
```

### 5.什么是原型

在js创建的时候，自动关联另一个对象，这个对象就是原型，而且每个对象都会从原型中“继承”属性。

 函数的prototype 属性指向了一个对象，这个对象正是调用该构造函数而创建的实例的**原型** 

原型也是一个对象,可以通过`new Object()`的方式创建



### 6.什么是原型链

js中所有的对象都有自己的原型对象，原型对象也是对象，所以有自己的原型。因此，会形成一个原型链，对象到原型，原型到原型……最终所有的对象都可以上溯到`Object.prototype`,这个的原型就是null，原型链的尽头是null。



### 7.instanceof判断变量类型的原理是什么

 `instanceof`的原理是检查右边构造函数的`prototype`属性，是否在左边对象的原型链上。有一种特殊情况，就是左边对象的原型链上，只有`null`对象。这时，`instanceof`判断会失真。 



### 8.如何实现对象（构造函数）的继承

构造函数的继承：

1.在子类的构造函数中调用父类的构造函数（call）

2.让子类的原型指向父类的原型，这样子子类就可以继承父类原型。（create）
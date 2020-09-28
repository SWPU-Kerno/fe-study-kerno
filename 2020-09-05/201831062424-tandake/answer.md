* #### 更改this的指向有哪些方案
>Function.call() Function.apply() Function.bind() 

* #### bind,call,apply区别是什么
> 首先bind与call改变this指向之后都会立即执行该函数 而bind()方法会创建一个新的函数，不会立即执行 ；bind和call采用传统参数序列的方法接受参数，而apply接受了一个数组作为参数
* #### 什么是原型
>在JavaScript中，每个函数都有一个prototype属性，这个属性指向函数的原型对象，此外每个对象都会有的属性，叫做__proto__，这个属性会指向该对象的原型。

* #### 什么是原型链
> 简单的回顾一下构造函数、原型和实例的关系：每个构造函数都有一个原型对象，原型对象都包含一个指向构造函数的指针，而实例都包含一个指向原型对象的内部指针。那么假如我们让原型对象等于另一个类型的实例，结果会怎样？显然，此时的原型对象将包含一个指向另一个原型的指针，相应地，另一个原型中也包含着一个指向另一个构造函数的指针。假如另一个原型又是另一个类型的实例，那么上述关系依然成立。如此层层递进，就构成了实例与原型的链条。这就是所谓的原型链的基本概念

* #### instanceof判断变量类型的原理是什么
>instanceof的原理是检查右边构造函数的prototype属性，是否在左边对象的原型链上

* #### 如何实现对象(构造函数)的继承
>
```java
//1.继承实例方法
function Sub(value) {
  Super.call(this); // 代表父类的构造函数
  this.prop = value;
}

//2.继承原型
Sub.prototype = Object.create(Super.prototype); // 让原型指向父类的原型
Sub.prototype.constructor = Sub; // 让构造函数指向自己
```

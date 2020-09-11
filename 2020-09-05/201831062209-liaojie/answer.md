## 更改this的指向有哪些方案

1.bind

2.call

3.apply

## bind，call，apply的区别是什么

bind改变this指向，不会调用函数，返回一个新的函数

call改变this指向并调用函数

apply改变this指向并调用函数，后面的参数是以数组展示的


## 什么是原型

每一个js对象在创建的时候就会自动关联另一个对象，这个对象就是原型，每一个对象都会从原型“继承”属性

每一个构造函数的prototype指向的就是它的原型
每一个js对象的__proto__指向的就是它的原型

## 什么是原型链

相互关联的原型组成的链状结构就是原型链

[原型链](https://sugarat.top/bigWeb/js/prototype.html#%E5%8E%9F%E5%9E%8B%E7%9A%84%E5%8E%9F%E5%9E%8B)

## instanceof实现原理

instanceof主要的实现原理就是只要右边变量的prototype在左边变量的原型链上即可。
因此instanceof在查找的过程中会遍历左边变量的原型链，直到找到右边变量的prototype，
如果查找失败，则会返回false

## 实现构造函数的继承

1.在子类构造函数中调用父类的构造函数

2.让子类的原型对象复制父类的原型对象

3.让子类的原型对象的constructor重新指向子类

```
function Father(name){
       this.name = name;
   }
   
   function Son(name, age){
       Father.call(this, name);
       this.age = age;
   }
   Son.prototype = Object.create(Father.prototype);
   Son.prototype.constructor = Son;
   
   var lilei = new Son("Lilei", 23);
   lilei.name; // "Lilei"
   lilei.age; // 23
   lilei.constructor === Son; // true
```


# 面向对象编程

## 实例对象与new命令

 **对象是单个实物的抽象。** 

 **对象是一个容器，封装了属性（property）和方法** 

 属性是对象的状态，方法是对象的行为（完成某种任务） 

 JavaScript 语言的对象体系，不是基于“类”的，而是基于**构造函数**（constructor）和**原型链**（prototype）。 

 构造函数就是一个普通的函数，但是有自己的特征和用法。  构造函数名字的第一个字母通常大写。 

构造函数的特点有两个。

- 函数体内部使用了`this`关键字，代表了所要生成的对象实例。
- 生成对象的时候，必须使用`new`命令。

 `new`命令的作用，就是**执行构造函数**，返回一个**实例对象**。 

使用`new`命令时，它后面的函数依次执行下面的**步骤**。

1. 创建一个空对象，作为将要返回的对象实例。
2. 将这个空对象的原型，指向构造函数的`prototype`属性。
3. 将这个空对象赋值给函数内部的`this`关键字。
4. 开始执行构造函数内部的代码。

 函数内部可以使用`new.target`属性。如果当前函数是`new`命令调用，`new.target`指向当前函数，否则为`undefined`。 

 现有的对象作为**模板**，**生成新的实例对象**，这时就可以使用`Object.create()`方法。 

## this关键字

 `this`都有一个共同点：它总是返回一个对象。 

`this`就是属性或方法“当前”**所在的对象**。

 由于对象的属性可以赋给另一个对象，所以属性所在的当前对象是可变的，即`this`的**指向是可变的。** 

 由于函数可以在不同的运行环境执行，所以需要有一种机制，能够在函数体内部获得当前的运行环境（context）。所以，`this`就出现了，它的设计目的就是在函数体内部，指代函数**当前的运行环境**。 

 **`this`主要有以下几个使用场合：**

 **（1）全局环境** 

 全局环境使用`this`，它指的就是**顶层对象`window`。** 

**（2）构造函数**

构造函数中的`this`，指的是**实例对象。**

 JavaScript 提供了`call`、`apply`、`bind`这三个方法，来切换/固定`this`的指向。 

 `call`方法的参数，应该是一个对象。 如果`call`方法的参数是一个**原始值**，那么这个原始值会自动转成对应的**包装对象**，然后传入`call`方法。 如果参数为空、`null`和`undefined`，则默认传入**全局对象。** 

 `call`方法还可以接受多个参数。  `call`的第一个参数就是`this`所要**指向的那个对象**，后面的参数则是函数调用时**所需的参数**。 (就是调用那个函数，把传到call里面的第一个参数包装成对应的对象)

 **`apply`方法**的作用与`call`方法类似，也是改变`this`指向，然后再调用该函数。  唯一的区别就是，它接收一个数组作为函数执行时的参数 。

 **`bind()`方法**用于将函数体内的`this`绑定到某个对象，然后返回一个新函数。 

## 对象的继承

 JavaScript 规定，每个函数都有一个`prototype`属性，指向一个对象。  对于构造函数来说，生成实例的时候，该属性会**自动成为实例对象的原型。** 

 当实例对象本身没有某个属性或方法的时候，它会到**原型对象**去寻找该属性或方法。 

 如果实例对象自身就有某个属性或方法，它就**不会再去原型对象**寻找这个属性或方法。 

 `Object.prototype`的原型是`null`。`null`没有任何属性和方法，也没有自己的原型。因此，原型链的尽头就是`null`。  

如果对象自身和它的原型，都定义了一个同名属性，那么**优先读取对象自身的属性**，这叫做“**覆盖”**（overriding）。 

 `prototype`对象有一个`constructor`属性，默认指向`prototype`对象所在的**构造函数。** 

 `constructor`属性的作用是，可以得知某个实例对象，到底是哪一个构造函数产生的。 

 `instanceof`运算符返回一个布尔值，表示对象**是否为某个构造函数的实例。** 

 `instanceof`运算符的左边是实例对象，右边是构造函数。它会检查右边构建函数的原型对象（prototype），是否在左边对象的原型链上。 

 `instanceof`运算符的一个用处，是判断值的类型。  注意，`instanceof`运算符只能用于对象，**不适用原始类型**的值。  对于`undefined`和`null`，`instanceof`运算符总是返回`false`。 

 模块是实现特定功能的一组属性和方法的封装。  简单的做法是把模块写成一个对象，所有的模块成员都放到这个对象里面。 

 另一种做法是使用“立即执行函数”（Immediately-Invoked Function Expression，IIFE），将相关的属性和方法封装在一个函数作用域里面，可以达到**不暴露私有成员的目的。** 

## Object 对象的相关方法

 `Object.getPrototypeOf`方法返回参数**对象的原型**。这是获取原型对象的标准方法。 

 `Object.setPrototypeOf`方法为**参数对象设置原型**，返回该参数对象。它接受两个参数，第一个是现有对象，第二个是原型对象。 

 `Object.create`  该方法接受一个对象作为参数，然后以它为原型，返回一个实例对象。该实例完全继承原型对象的属性。 从一个实例生成另一个实例对象。

 使用`Object.create`方法的时候，必须提供对象原型，即参数不能为空，或者不是对象，否则会报错。 如果修改原来的实例，即对象原型，就会影响新实例对象。

 实例对象的`isPrototypeOf`方法，用来判断该**对象是否为参数对象的原型。** 

`Object.prototype.__proto__` 属性（前后各两个下划线），返回该对象的原型。该属性可读写。 

因此，获取实例对象`obj`的原型对象，有三种方法。

- `obj.__proto__`
- `obj.constructor.prototype`
- `Object.getPrototypeOf(obj)`

 `Object.getOwnPropertyNames`方法返回一个数组，成员是参数**对象本身的所有属性的键名**，不包含继承的属性键名。 

 对象实例的`hasOwnProperty`方法返回一个布尔值，用于判断某个属性定义在对象自身，还是定义在原型链上。 继承属性返回false。

 **另外，`hasOwnProperty`方法是 JavaScript 之中唯一一个处理对象属性时，不会遍历原型链的方法。** 

 `in`运算符返回一个布尔值，表示一个对象是否具有某个属性。 

如果要拷贝一个对象，需要做到下面两件事情。

- 确保拷贝后的对象，与原对象具有**同样的原型**。
- 确保拷贝后的对象，与原对象具有**同样的实例属性。**

```
function copyObject(orig) {
  var copy = Object.create(Object.getPrototypeOf(orig));
  copyOwnPropertiesFrom(copy, orig);
  return copy;
}

function copyOwnPropertiesFrom(target, source) {
  Object
    .getOwnPropertyNames(source)
    .forEach(function (propKey) {
      var desc = Object.getOwnPropertyDescriptor(source, propKey);
      Object.defineProperty(target, propKey, desc);
    });
  return target;
}
```

 另一种更简单的写法，是利用 ES2017 才引入标准的`Object.getOwnPropertyDescriptors`方法。 

```
function copyObject(orig) {
  return Object.create(
    Object.getPrototypeOf(orig),
    Object.getOwnPropertyDescriptors(orig)
  );
}
```

## 严格模式

严格模式是从 ES5 进入标准的，主要目的有以下几个。

- 明确禁止一些不合理、不严谨的语法，减少 JavaScript 语言的一些怪异行为。
- 增加更多报错的场合，消除代码运行的一些不安全之处，保证代码运行的安全。
- 提高编译器效率，增加运行速度。
- 为未来新版本的 JavaScript 语法做好铺垫。

总之，严格模式体现了 JavaScript 更合理、更安全、更严谨的发展方向。

 **（1） 整个脚本文件** 

 **进入严格模式的标志**，是一行字符串`use strict`。  `use strict`放在脚本文件的第一行，整个脚本都将以严格模式运行。如果这行语句不在第一行就无效，整个脚本会以正常模式运行。 

 **（2）单个函数** 

 `use strict`放在函数体的第一行，则整个函数以严格模式运行。 

 把不同的脚本合并在一个文件里面 ， 考虑把整个脚本文件放在一个立即执行的匿名函数之中。 

**1.只读属性不可写**

 严格模式下，设置字符串的`length`属性，会报错。 

**2.只设置了取值器的属性不可写**

 严格模式下，对一个只有取值器（getter）、没有存值器（setter）的属性赋值，会报错。 

**3.禁止扩展的对象不可扩展**

**4.严格模式下，使用`eval`或者`arguments`作为标识名，将会报错。** 

**5.函数不能有重名的参数**

**6.禁止八进制的前缀0表示法**



 严格模式下，变量都必须先声明，然后再使用。 

 正常模式下，函数内部的`this`可能会指向全局对象，严格模式禁止这种用法，避免无意间创造全局变量。  严格模式下，函数直接调用时（不使用`new`调用），函数内部的`this`表示`undefined`（未定义），因此可以用`call`、`apply`和`bind`方法，将任意值绑定在`this`上面。 

 函数内部不得使用`fn.caller`、`fn.arguments`，否则会报错。这意味着不能在函数内部得到调用栈了。 

 严格模式明确规定，函数内部使用`arguments.callee`、`arguments.caller`将会报错。 

 严格模式下无法删除变量，如果使用`delete`命令删除一个变量，会报错。只有对象的属性，且属性的描述对象的`configurable`属性设置为`true`，才能被`delete`命令删除。 

 严格模式下，使用`with`语句将报错。 

 全局作用域和函数作用域。严格模式创设了第三种作用域：`eval`作用域。  `eval`所生成的变量只能用于`eval`内部。 

 变量`arguments`代表函数的参数。严格模式下，函数内部改变参数与`arguments`的联系被切断了，两者不再存在联动关系。 

非函数代码块不得声明函数

 为了向将来 JavaScript 的新版本过渡，严格模式新增了一些保留字（implements、interface、let、package、private、protected、public、static、yield等）。使用这些词作为变量名将会报错。 
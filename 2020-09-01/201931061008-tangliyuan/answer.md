1. 数值、字符串、布尔值这三种类型。
2. 因为浮点数的计算不精确，后面可能会有跟着的数。
3. JavaScript 有三种方法，可以确定一个值到底是什么类型。
   - `typeof`运算符
   - `instanceof`运算符
   - `Object.prototype.toString`方法
4. 不是，null是特殊值。 在 JavaScript 中二进制前三位都为 0 的话会被判断为 object 类型，null 的二进制表示是全 0，自然前三位也是 0，所以执行 typeof 时会返回“object”。 
5. 区别就是要判断类型。如果类型不相同，===就会返回false，然而==会转换成类型相同的进行比较值。
6. 如果一个对象有length属性，就是类数组。比如函数中的arguments，就是类数组。可以用`slice`方法和循环的方式逐一填入新数组，把类数组转换成数组。
#### 1.下面输出结果是什么,并说明转换的过程

```
if ([]) console.log(1);
```

输出1，[]被转换成布尔值true

```
if ({}) console.log(2);
```

输出2，{}也被转换成布尔值true

```
if ([] == false) console.log(3);
```

输出3，先转换成[] == 0,把fals额的布尔类型转换成了0，然后对象和字符串或数字相比较，就会把对象转换成原始值，"" == 0,最后数字和字符串相比较，字符串会变成数字类型的值，0 == 0，结果就是true。

```
if ({} == false) console.log(4);
```

没有输出，{}是对象，是true

```
if ([] == ![]) console.log(5);
```

输出5，在进行==运算之前，要把两边的运算计算出来，![]转换成false，所以转换成了[] == false

```
if ({} == !{}) console.log(6);
```

没有输出，!{}被转换成flase,所以变成了{} == false

```
if ('' == false) console.log(7);
```

输出7，把‘ ’转换成false

```
if (false == 0) console.log(8);
```

输出8，把0转换成false

```
if (1 == true) console.log(9);
```

输出9，把1转换成true

```
if ('' == 0) console.log(10);
```

输出10，把‘ ’转换成0

```
if (NaN == NaN) console.log(11);
```

没有输出，NAN不等于NAN，它和谁都不等

```
if ([] == !true) console.log(12);
```

输出12，把 !true 转换成false，然后就变成了[] == false

```
if ([] == false) console.log(13);
```

输出13,和上面一样

```
if ([] == 0) console.log(14);
```

输出14，对象和字符串或者数字比较，就会被转换成初始值，[]被转换成“ ”，然后字符串和数字比较，字符串被转换成0.

```
if (+0 == -0) console.log(15);
```

输出12，+0，-0被转换成数值，都为0

```
if (NaN == false) console.log(16);
```

不输出，NAN不与任何值相等

#### 2.下面计算结果（包含结果的类型）是什么，并说明理由

```
{ } +1
```

返回1，{}别当成空代码块，被舍弃，所以就是1

```
1 + {}
```

返回“1[object Object]”,因为是+，所以1和{}都被转换成字符串

```
[] + 1
```

返回“1”，[]被转换成空字符串“”，1被转换成“1”

```
1 + []
```

返回“1”，[]被转换成空字符串“”，1被转换成“1”

```
[1, 2, 3] + 0
```

返回“1，2，30”，因为是+符号，且不全是数值，所以数组被转换成字符串“1，2，3”，0被转换成“0”

```
[1, 2, 3] + '0'
```

返回“1，2，30”，数组被转换成“1，2，3”

```
1 + '0'
```

返回“10”，1被转换成‘1’

```
1 + 0
```

返回1，就是普通加法运算

```
1 + true
```

返回2，因为true能够被转换成1，除开字符串，会被转换成数值

```
1 + false
```

返回1，false被转成0

```
'1' + true
```

返回“1true“，true被转换成”true”

```
'1' + false
```

返回“1false”，false被转成”false“

```
![] + []
```

返回”false“，![]被转换成false，[]被转换成”“

```
1 - true
```

返回0，true被转换成1

```
'0' - 0
```

返回0，除了加法转换成字符串，其他都是转换成数值，所以”0”转换成0

```
0 - '1'
```

返回-1，‘1’被转换成1

```
false - true
```

返回-1，false被转换成0，true被转换成1

```
{ } -[]
```

返回-0，{}被当成空代码块被舍弃，[]被转换成0

```
[] - {}
```

返回NAN，{}是对象，无法转化成数值

```
false - []
```

返回0，false被转换成0，[]被转换成0

#### 3.如何判断一个变量是否为对象,有哪几种方案

第一种，用typeof进行判断。

第二种，用obj instanceof Object 来判断。instanceof运算符用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性，意思就是该变量通过原型链上能否找到构造函数的prototype 属性 。

```
obj instanceof Object
```

第三种，用constructor来判断，

```
obj.constructor === Object
```

第四种，用 Object.prototype.toString.call()方法可以精准判断变量类型，它返回[object constructorName]的字符串格式 。

```
Object.prototype.toString.call(obj)
```

#### 4.Object.keys()与Object.getOwnPropertyNames()有什么区别

 `Object.keys`方法和`Object.getOwnPropertyNames`方法都用来遍历对象的属性。 

 `Object.keys`方法只返回可枚举的属性 ， `Object.getOwnPropertyNames`方法还返回不可枚举的属性名。 

#### 5.下面如何定义`a`才能打印 yes

```
if (a == 1 && a == 2) {
    console.log('yes')
}
```

```
a = {
       n:0,
       toString:function(){
               rerturn this.n += 1;
       }
}
//在判断的时候会把a转换成数字类型，就会调用valueOf()的方法来判断，不行的话就用toString方法，这里把toString方法重写了，调用一次就把a的值加一次。这样子就能使判断结果为true。
```

#### 6.如何让判断一个对象是数组

第一种，可以从原型入手， `Array.prototype.isPrototypeOf(obj);`  利用isPrototypeOf()方法，判定Array是不是在obj的原型链中，如果是，则返回true,否则false。 

第二种，从构造函数入手， `obj instanceof Array` 或者  `obj.constructor === Array` 

第三种，根据对象的class属性，用toString()方法。`Object.prototype.toString.call(obj)`

第四种，用Array.isArray()方法。

#### 7.数组哪些方法会改变自己

-  `push`方法用于在数组的末端添加一个或多个元素，并返回添加新元素后的数组长度。
-  `pop`方法用于删除数组的最后一个元素，并返回该元素。 
-  `shift()`方法用于删除数组的第一个元素，并返回该元素。
-  `unshift()`方法用于在数组的第一个位置添加元素，并返回添加新元素后的数组长度。
- `reverse`方法用于颠倒排列数组元素，返回改变后的数组。
- `splice()`方法用于删除原数组的一部分成员，并可以在删除的位置添加新的数组成员，返回值是被删除的元素。

#### 8.将any（任意值）转换为布尔值的方法有哪些

第一种，用Boolean()可以将任意类型的值转换为布尔值。

第二种，!!any 第一个！把该值转换成布尔值的非值，第二个值再把这个值的布尔值还原。

#### 9.写一个方法将传入的Date对象转换为 yyyy-MM-dd hh:mm:ss的格式

```
/**
 * 日期格式化
 * @param {Date} date 
 */
function convertDate(date) {

}
```


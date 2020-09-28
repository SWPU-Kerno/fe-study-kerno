# 2020-09-03 haungxuemei


---

排序算法：
===

一、算法实现
---

1、快排

```javascript
var sortArray = function(nums) {
    //如果长度小于2说明这个序列不需要排序了
    if (nums.length < 2) return nums;
    //反之则需要排序
    return  quickSort(nums, 0, nums.length - 1);
};

function quickSort(nums, left, right) {
    //表示这个序列已经不需要排序了，直接返回空
    if (left >= right) return;
    //findcent是对这个大队列进行排序，并且返回中间值
    let pivotIndex = findcent(nums, left, right)

    //中间值把序列分成两部分，我们对两部分在分别排序，知道两部分都不需要排序的时候说明，这个序列已经排序完毕
    quickSort(nums, left, pivotIndex - 1)
    quickSort(nums, pivotIndex + 1, right)

    //排序完成，返回这个排好的序列
    return nums;
}

function findcent (nums,right,left)
{
    var pivot=nums[right],temp=0;//这里把第一个值当做中间值，所以是后面先向前移动

    while(right<left)//已经排序完成
    {
        //我们默认设置的中间值是第一个，也就是left指向的值，所以从后往前找，小于中间值的值，两个进行交换，则此时的right指向的是中间值，所以后面从前往后找到比中间值大的，与right交换就行
        while(right<left && pivot<=nums[left])
        {
            left--;
        }
        temp=nums[left];
        nums[left]=nums[right];
        nums[right]=temp;
        while(right<left && nums[right]<pivot)
        {
            right++;
        }
        temp=nums[left];
        nums[left]=nums[right];
        nums[right]=temp;
    }
    //其实返回，left和right都是一样的，因为left=right；
    return right;
}
```

2、归并
```javascript
var sortArray = function(nums) {
    return splitlist(nums)
};

//分割序列知道序列中只有一个元素了之后再自下而上排序
function splitlist(nums){

    //如果序列长度小于说明不需要排序
    if(nums.length<2) return nums
    //右移一位相当于除以2的一次方
    let mid=nums.length >> 1

    //slice函数是返回一个数组的其中一部分，left是序列的前半，right是序列的后半
    let left=nums.slice(0,mid)
    let right=nums.slice(mid)

    //由于是要将序列分成若干个小序列，最小是只有两个的时候，再一次从小序列排序之后再合成序列再排序
    return merge(splitlist(left),splitlist(right))
}

//排序函数，参数是两个数组
function merge(left,right){

    //一个空数组来存放排好的序列
    let result=[]
    let i=0,j=0,iend=left.length,jend=right.length,k=0

    //从两个序列的第一个元素开始比较，知道其中一个数组已经被遍历完成，剩下的一个没有遍历完的数组的元素直接放入result数组即可
    while(i<iend && j<jend){
        if(left[i]<right[j])
        {
            result[k++]=left[i++]
        }
        else
        {
            result[k++]=right[j++]
        }
    }

    while(i<iend){
        result[k++]=left[i++]
    }
    while(j<jend){
        result[k++]=right[j++]
    }

    //最终返回这个排好序的数组
    return result
}
```

二、相关问题
---
1、（1）快排：最好情况下是O（1），最坏情况下是O（n的二次方）
（2）归并：最好是O（1），最坏是O（n*lgn）

2、稳定：冒泡排序，直接插入排序，归并排序，
不稳定：选择排序，快排，堆排序，希尔排序

区分方法：原序列中值相等的元素的先后顺序，在排序过后，顺序依然不变。

二、JavaScript学习
======

一、学习笔记
----
**第四章 语法专题**

**1.强制转换**
    主要是Number（）、String（）、BOOlean（）这三个函数。
**（1）Number（）**
转换规则：
1.转换内容是原始数据类型：
    数值：直接就返回数值；
    字符串：如果是可以转换成数值的字符串比如“123456”，则直接去掉双引号变成数值；如果是字符串中有无法转化为数值的内容，则返回NaN，如“123abc”；
    null:返回0；
    false：返回0；
    true：返回1；
    undefined：返回NaN；
    空字符串（“ ”）：返回0；
    
    
    1.与parseInt（）函数的区别：
    Number（）函数只要字符串中有一个无法转化成数值的内容，则就返回NaN；而parseInt（）函数是从左到右翻译，如果遇到无法翻译的内容就将前面翻译的数值返回。
    2.这两个函数都会过滤掉字符串中的前导和后缀的空格。
    
    
2.转换内容是对象：
 一般情况，返回NaN；除非对象里面只有一个数值。如Number（[5]）；
 
 
 *原理了解：如果内容是对象的话，会先调用对象的valueOf（）返回原始数据类型，如果返回的不是原始数据类型，则会调用对象的toString（）方法，如果返回的是原始数据类型就如上所示规则，如果返回的不是原始数据类型，则编译器会报错。*

**（2）String（）**
1.内容是原始数据类型：
数值：直接变成相应的字符串，如123--“123”；
字符串：不变；
布尔值：true-"true",false-"false";
undefined："undefined";
null:"null";

2.内容不是原始数据类型
对象：返回一个类型字符串
数值：返回数值对应的字符串，如[1,2,3]--"1,2,3"

*原理了解：先调用对象的toString（）方法，如果返回的是原始类型的值，则调用函数，如果不是则调用valueOf（）方法，如果返回的是原始类型的值，则调用函数，如果不是则编译器报错。*

**（3）Boolean（）**
除了undefined,null," ",0,NaN被转换成false其余都被转换为true。

**2.自动转换**

自动转换规则：预期什么类型的数值，就对他自动调用相应的上面的函数。

*一般在这种自动转换的时候，最好自己手动设置调用函数，因为自动转换不可预期。*

**2.错误处理机制**

1.Error错误对象：一般错误对象，会有message，name，stack三个属性，分别提供错误信息，错误的名字，错误的堆栈的信息。

2.SyntaxError对象：解析代码时候发生错误。

3.ReferenceError对象：引用一个不存在的变量；将值赋值给不能赋值的时候。

4.RangeError对象：数组的长度是负数；Number（）的内容超出数值的范围；堆栈超过最大值。

5.TypeError对象：变量或者参数不是预期的类型的时候。

6.URIError对象：URI相关的函数参数不正常的时候。

7.EvalError对象：函数没有被正确执行的时候。

**throw语句：**

作用：手动抛出一个错误，并且程序终止。

用法：
```throw new Errow("这是一个错误")；```

*抛出的可以是错误也可以是其他的值*

**try...catch:**

try用来包括可能会发生错误的语句，如果发生错误，错误会被catch截取到，catch里面的语句是对错误的处理。

用法：

```javascript
try{
foo.bar();//可能会发生错误的语句
}catch(e){
//处理错误的函数
}
```

e用来接收try中抛出的错误，在catch中处理错误，虽然语句发生了错误但是程序并不会终止而是接着向下运行。在catch中还可以判断错误的类型，然后对错误进行更精确的处理。

**finally**

finally可以加在try...catch后面，是无论两个中的语句怎么样，最终都会执行finally语句。

*如果catch语句中有throw或者return语句的话会跳入finally语句执行再跳回。*

**console对象**

**1.console对象的静态方法**
（1）console.log();用于控制台输出信息。
```console.log('hello world');```
```//hello world```
输出的内容放在单引号里面；


```console.log('a','b','c');```
```a b c```
可以接受多个参数一起输出，中间用逗号隔开，但是输出的时候是用空格隔开。

输出时候会默认在句尾加上回车键。

```console.log('%i+%i=%i',1,1,2);```
支持类似于c语言的输出方法，
占位符分类：
%s：字符串
%d:整数
%i:整数
%f:浮点数
%o:对象的链接
%c:css格式字符串，也就是css代码，用于对输出内容进行渲染修饰。

如果参数是一个对象，那么会显示该对象的值。

**console.warn()和console.error()**

warn前面会显示一个黄色的三角表示警告；error前面会出现一个红色的叉叉表示错误。

**console.table**

对于复合类型的数据，console.table()可以转为表格输出。

**console.count()**

用于计算函数被调用的总共次数，每调用一次该函数，就输出一次调用总次数。

可以传参数，表示这个函数以这个参数为参数的调用次数。

**console.dir()和console.dirxml()**

dir用于对一个对象进行检查，并以易于阅读和打印的方式显示。

*dir对DOM对象非常有用，因为会显示DOM对象的所有属性。*

dirxml主要用于以目录树的形式显示DOM节点。

*如果不是DOM对象的话二者相等*

**console.assert()**

该函数有两个参数，第一个是表达式，第二个是字符串。

```console.assert(a<100,'操作错误');```
如果表达式返回false则提示一个错误，并且输出后面的字符串。但是程序并不会中断，则当a大于等于100的时候就会提示错误并且输出操作错误。

**console.time()和console.timeEnd()**
用于计时的函数：
第一个是计时开始的函数：
```console.time('time');```
第二个是计时结束的函数：
```console.timeEnd('time');```

参数是计时器的名称。

**console.group()和console.groupEnd()**

当信息量比较大时候，可以用这个函数将信息分组折叠起来，
```javascript
console.group('一级分组');
console.log('一级分组的内容');

console.group('二级分组');
console.log('二级分组的内容');

console.groupEnd();//二级分组结束
console.groupEnd();//一级分组结束
```
这样，二级分组的内容会显示在一级分组的内部。

console.groupCollapsed()和console.group()功能差不多，只是前者的第一次显示是收起的。

**console.trace()**

显示当前代码在堆栈中的调用路径

**console.clear()**

清除控制台的所有输出

3.控制台命令行
----
**$_**：返回上一个表达式的值；

**$0-$4**:控制台保存了最近五个在Elements面板中选中的DOM元素，则$0表示最近的一个，也就是选中的最后一个，然后以此类推。

**$(selector)**:返回第一个匹配的元素；

**$$(selector)**:返回选中的DOM对象；

**x(path)**:返回一个数组，包含匹配特定Xpath表达式的所有DOM元素。

**inspect(object);**:打开相关面板，并选中相应的元素，显示他的细节。

**getEventListeners(object)**:返回一个对象，该对象的成员为登记了回调函数的各种事件，每个事件对应一个数组，数组的成员为该事情的回调函数。

**key(object)**:返回一个数组，包含所有键名。

**values(object)**:返回一个数组，包含所有键值。

**monitorEvents(object[, events]) ，unmonitorEvents(object[, events])**:monitorEvents(object[, events])方法监听特定对象上发生的特定事件。事件发生时，会返回一个Event对象，包含该事件的相关信息。unmonitorEvents方法用于停止监听。

**其他方法**:
clear()清楚控制台历史；
copy(object):复制特定的DOM元素到剪切板。

4.debugger语句
----

当运行到这个语句时，程序会停止运行然后自动打开脚本源码界面。

标准库：
====

1.Object()
----

其他对象都是继承于Object对象，其他对象都是Object对象的实例；

方法分为：
Object本身的方法：定义在Object对象上的方法；
Object实例的方法：定义在Object.prototype对象上的方法，可以直接被Object实例调用。

**Object()方法：**用于将任意值转换为对象，如果参数是空，或者undefined或者null，则返回一个空对象。

*可以用instanceof来判断是否为一个对象的实例。
```obj instanceof Object//判断obj是不是Object对象的实例，如果是则返回true否则返回false```

**参数**
如果参数是原始数据类型则将其转为对应的原始类型对象的实例，
例：
```javascript
var obj=Object(1);
obj instanceof Object;//true,是Object的实例
obj instanceof Number;//true,是Number的实例
```

如果参数是对象的话，不用转换，直接返回该对象。

*利用该思想可以判断一个变量是否为对象，如果在Object前后变量相等的话，就是变量，否则的话就不是变量*

**Object()构造函数**
可以作为构造函数用来生成新的对象，如果没有参数则是一个空对象，如果有参数的话就返回参数对应的类型的对象，

```javascript
var obj=new Object();//obj是一个新的对象

var obj=Object(123);//参数是一个数值
obj instanceof Number;//返回的是一个数值的对象
```

Object的静态方法
----
**Object.keys()和Object.getOwnPropertyNames()**

同：都是用于遍历对象的属性，参数都是对象，返回值是一个数组，其中包含了对象的所有键名。

异：前者不能返回不能枚举的属性，而后者可以，

*可以通过这两个函数来计算对象的属性的个数，因为他们的返回值是一个数组，用数组的length方法就可以知道对象的属性的个数。*

Object的实例方法
----

**Object.prototype.valueOf()**
方法是返回一个对象的值，默认情况下返回对象本身。

**Object.prototype.toString()**

返回一个对象的字符串形式，默认情况下返回类型字符串（[object Object]）

*该方法还可以用来判断一个变量的数据类型。

由于调用该方法会返回一个对象的字符串类型，默认情况下返回类型字符串也就是[object Object],而第二个参数其实是一个构造函数，利用这一点我们得到一个判断变量数据类型的方法：

```javascript
Object.prototype.toString.call(value);
//call方法可以对任意值调用该方法，该方法返回的值可以让我们知道该变量的数据类型
```

**Object.prototype.toLocaleString()**
返回一个对象的本地的字符串。主要是三个对象，
Array.prototype.toLocaleString()
Number.prototype.toLocaleString()
Date.prototype.toLocaleString()

**Object.prototype.hasOwnProperty()**

参数是一个字符串，用来判断该实例对象中自身是否有该属性。

属性描述对象
----

概念：一个内容数据结构，用于描述对象的属性（是否可写，可遍历...），每个属性都有对应的属性描述对象，保存着属性的一些元信息。

```javascript
{
value：123；//属性的属性值，默认为undefined；
writable:true;//属性是否可写，默认为true
enumerable:true;//属性是否可遍历，默认为true
configurable:false;//描述属性对象的可写性，默认为true，如果为false，将无法修改属性描述对象。
get:undefined;//属性的取值函数
set:undefined;//属性的存值函数
}
```
*存取器
在存取的时候，会调用对应的存值函数和取值函数

写法
```javascript
var obj={
get p(){return 'getter'},//取值函数，没有参数
set p(value){return 'setter'};//存值函数，只能有一个参数
}
```

**Object.getOwnPropertyDescriptor()**
用于获取对象的某个属性的属性描述对象，继承来的属性读不到

```Object.getOwnPropertyDescriptor(obj,'p');//第一个参数是目标对象名，第二个参数是字符串，是要获取的目标对象的属性```

**Object.getOwnPropertyNames()**
返回一个数组，数组中包含该对象的所有属性名，不管属性是否能够被遍历，都会被获取到。

```Object.getOwnPropertyNames(obj);//参数是要获取的对象的名称**```

**Object,defineProperty()**
这个方法可以允许通过属性描述对象来修改对象自身的属性，并且返回修改后的对象。

```Object.defineProperty(obj,'p',{value:123,writable:true});//第一个参数是目标对象名称，第二个参数是目标属性，第三个参数是该属性的属性描述对象```
Object.defineProperties()可以同时对目标函数的多个属性进行修改

**可以用于复制属性到另外一个对象**
```javascript
var extend = function(to,from){
for(var property in from){
//for循环遍历from对象中的属性
if(!form.hasOwnProperty(property)) continue;
//将from中继承来的属性过滤掉，因为获取不到继承属性的属性描述对象，如果为true那么这个属性就为继承属性，则直接跳过这一属性。
Object.defineProperty(
to,//目标对象
property,//复制的属性
Object.getOwnPropertyDescriptor(from,property)//取的是被复制函数的属性的属性描述对象，来描述目标函数的属性，使得目标对象的属性和被赋值属性一样
);
}
return to;
}
```
```javascript
Object.defineProperties(obj,{
p:{value:123},
q:{value:456}
});
```
**Object.prototype.propertyIsEnumerable()**
用于判断对象自身的属性能否遍历，如果这个属性是继承的用这个方法不能判断。
```Object.prototype.propertyIsEnumerable('p');```

**控制对象状态**

防止对象被改变，有三种冻结方式：

**1.Object.preventExtensions()**
使得一个对象无法添加新的属性
```Object.preventExtensions(obj);//之后obj对象不能添加新的属性```

*Object.isExtensible()用于判断这个对象能否添加新的属性，如果为true就能添加，如果为false就不能添加*

**Object.seal()**
使得一个对象无法添加新属性，也无法删除旧属性，实质是把属性的configurable属性变成了false，这样属性描述对象就不能修改了。

*但是value属性是由writable控制的所以虽然其他属性不能修改了，但是如果writable是true的话，那么value属性就能更改也就是属性的值可以更改*

**Object.isSealed()**

用于判断一个对象是否被seal，也就是能否添加和删除新的属性，因为isExtensible()是用于能否添加新的元素，因为被seal的对象是不能添加的所以，此时如果isSeal()是返回true，则isExtensible()是返回的false

**Object.freeze()**

使得一个对象无法添加属性，也无法删除属性，也不能修改属性的值，就相当于无法改变这个对象的属性。

**Object.isFrozen()**

用于判断这个对象是否被freeze

*如果被freeze则isExtensible()是false，isSeal()是true*

Array对象
----

**1.作为构造函数**

可以使用Array()来构造数组，参数是数组的长度；

```var ary=new Array(3);//长度为3的数组，每个成员都是空的，是没有值的，都是undefined，但是length是可以获取到的```

**作为方法**

1.静态方法

**Array.isArray()**

判断参数是不是数组；

```Array.isArray(ary);//参数是一个变量，也就是你要判断的那个变量```

2.实例方法

**valueOf()**

*这是所有对象都具有的方法，表示对对象求值，但是不同的对象返回的值不同*

**对于数组来说，返回数组本身**

**toString()**

返回对象的类型字符串，对于数组来说，就是返回数组的字符串形式。

**push()和pop()**

前者用于在一个数组的尾部添加一个或者多个元素，后者用于删除数组尾部的元素，并且返回被删除元素的值，如果里面没有元素，pop()并不会报错，而是返回undefined。

*这两种方法都会改变数组本身*

**shift()和unshift()**

前者用于在数组的头部删除元素，并且返回删除的元素，后者用于在数组的头部添加一个或者多个元素

*这两种方法都会改变数组本身*

**join()**

以输入的符号作为分隔符，将数组的元素连成一串字符串输出。

*如果数组内容是undefined或者null，或者是空的，则返回空字符串
如果没有给定参数则默认是逗号*

**concat()**

用于将多个数组合并，将新数组的成员添加旧数组尾部，然后返回一个新数组，原数组不变，也就是将原数组的前面内容给返回数组的前面部分，然后新数组添加到返回数组的后面，然后返回返回数组，而原数组不改变。

```['hello'].concat(['world']);```

**reserve()**

将数组的顺序颠倒，返回被颠倒的数组，原数组会被改变

**slice()**

从数组中取出一部分元素，返回一个新的数组，原数组不变

```ary,slice(1,2);//第一个参数是开始的位置，第二个参数是终止位置，但是终止位置不包括他本身也就是起始位置到终止位置的前一个元素```

*重要作用将一个类数组变成数组：
```javascript
Array.prototype.slice.call({0:'a',1:'b',length:2})//参数是对象，借用call()方法;
```

**splice()**

用于删除数组中的某部分内容，并且还可以在被删除的位置添加新的元素，方法返回值是被删除的那一段数组

```javascript
arr.splice(start, count, addElement1, addElement2, ...);//第一个参数是起始位置，第二个参数是删除元素的个数，而后面的则是要插入的元素，
//如果第一个参数是正数则是从数组头开始，如果是负数则是从数组倒数的方向开始，
//如果指向插入元素可以将第二个参数设置为0
//如果只有一个参数在括号里，则参数是起始位置，终止位置为数组的尾部，这样可以将数组分成两个部分，splice方法返回的是从参数到数组结尾的那一段数组，而原来的数组因为被删去了后半部分，如今是被删掉后半部分的数组
```

**sort()**

对数组排序的方法，是按照字典的顺序从小到大排序，如果数组是其他的类型不是字符或者字符串类型的，会将其先转换成字符串类型，然后再比较。

**map()**
参数是一个函数，将目标数组的值依次传给参数函数，然后参数函数的返回值，组成一个新的数组输出。

```javascript
var numbers = [1, 2, 3];

numbers.map(function (n) {
  return n + 1;
});//将numbers数组中的元素一个个带入function函数中，将计算到的结果组成对应的新数组输出
```

**forEach()**
功能和map一致但是他是对数组的元素都执行参数函数，改变原来的数组，但是不返回数组。

**filter()**
用于筛选数组中满足条件的元素，并把它们组成一个新的数组返回。、

**some()，every()**

参数是一个返回值为布尔类型的函数，将目标数组的元素依次传入参数函数：

如果其中有一个元素带入函数返回值为true，则some()返回true，否则为false；

如果全部否返回true，则every()函数返回true，反之为fals。

**reduce()，reduceRight()**

参数也是函数，将数组中的元素依次带入，将得到的值都加起来，最终返回这个加起来的额和。第一个是从左到右，第二个是从右到左

**indexOf()，lastIndexOf()**

indexOf()方法返回第一次出现指定元素的位置，如果没有出现指定元素则返回-1；
该方法可以有两个参数，第一个参数是查找的目标元素，第二个是开始查找的位置，如果没有第二个参数则是默认从数组的0号位开始查找。

lastIndexOf()方法返回最后一次出现指定元素的位置，如果没有出现指定元素则返回-1；

**Number()**

实例方法：

**Number.prototype.toString()**

1.将一个数值变成字符串，
2.可以接受一个参数表示返回值的进制。

```(10).toString(2);//将10以二进制返回，10要括起来不然会被识别为小数点而不是调用对象属性```

**Number.prototype.toFixed()**

用于把一个数值转换为指定位数的小数

```(10).toFixed(2);```

**Number.prototype.toExponential()**

将一个数转为科学计数法形式

**String()**

1.	静态方法

**String.fromCharCode()**
参数是一个或者多个值，是Unicode码，这个方法会返回这些码对应的字符，然后把它们连起来作为一个字符串来输出。

```String.fromCharCode(104,101,108,108,111);//输出“hello”,如果没有参数就返回一个空字符串```

2.	实例方法

**String.prototype.charAt()**

参数是字符串的下标，该方法会返回这个下标所对应的字符串中的字符。

```javascript
var str=new String(‘hello’);
str.char(1);//返回‘e’
```

**String.prototype.charCodeAt()**

参数也是字符串的下标，该方法返回这个下标所对应的字符串中的字符的Unicode码。

**String.prototype.concat()**

该方法用于链接连个字符串，返回一个新的字符串，不改变原来的字符串。

```s1.concat(s2);```

**String.prototype.slice()**

用于从目标字符串中取出字符串的一部分，返回的是被取出的那一部分，不改变原字符串，

```s1.slice(0,4);//一般有两个参数，第一个是开始的位置，第二个是结束的位置（不包含结束位置的字符），如果只有一个参数表示从第一个参数所在的位置开始直到这个字符串结束```

**String.prototype.indexOf()和String.prototype.lastIndexOf()**

第一个方法是从前向后找，在目标字符串中匹配要找的字符串或者字符，返回这个字符串或者字符第一次出现的位置的下标，参数可以有两个第一个是要找的字符串或者字符，第二个是开始找的位置。

第二个方法类似，只是他是从后往前找，第二个参数也是开始的位置，只不过是往前加。

**String.prototype.trim()**

去除字符串头部和尾部的空格，返回一个新的字符串，原字符串不改变。

**String.prototype.toLowerCase()和String.prototype.toUpperCase()**

第一个方法把字符串的字符变成小写，第二个是把字符串变成大写。

**String.prototype.match()**

用于查找指定字符串中是否有某个子串，返回一个数组，数组内容是匹配的第一个字符串。

返回的数组有两个属性：
1.	index:表示子串在字符串中的位置
2.	input:表示原始字符串

**String.prototype.search()和String.prototype.replace()**

第一个方法和match方法作用一致，只是返回的是匹配的第一个位置。

replace可以替换掉第一个匹配的内容。

**String.prototype.split()**

按照输入的参数作为标志来分割字符串，如果没有参数则把字符串分成一个一个字符，返回这些分出来的字符串或者字符组成的数组。

**String.prototype.localeCompare()**

用于比较两个字符串，如果返回值小于0则说明第一个小于第二个，大于0第一个大于第二个，等于0，第一个与第二个相等。

**Math对象**

只有静态方法没有实例方法。

1.静态属性：已经设置好不可以修改的值

Math.E：常数e。
Math.LN2：2 的自然对数。
Math.LN10：10 的自然对数。
Math.LOG2E：以 2 为底的e的对数。
Math.LOG10E：以 10 为底的e的对数。
Math.PI：常数π。
Math.SQRT1_2：0.5 的平方根。
Math.SQRT2：2 的平方根。


2.静态方法：

Math.abs()：绝对值
Math.ceil()：向上取整
Math.floor()：向下取整
Math.max()：最大值
Math.min()：最小值
Math.pow()：幂运算
Math.sqrt()：平方根
Math.log()：自然对数
Math.exp()：e的指数
Math.round()：四舍五入
Math.random()：随机数

**Data对象**

是原生的时间库，

1.直接调用Data()，无论有没有参数返回的都是代表现在时间的一个字符串

2.作为构造函数：
如果没有参数：则将当前的时间以字符串的形式赋值给变量。

如果有参数：将参数所代表的时间以字符串的形式赋值给变量

*1.参数可以是负数，表示时间零点之前的时间
2.只要是能被Data.parse()解析的字符串都能当参数
3.当使用年月日这种形式的参数时候，年和月一定不能省略，一定要有。*

**日期的运算：相减的话是两个时间相差的毫秒数；相加的话是返回两个字符串连起来。**

2.静态方法：

**Data.now()**
返回现在的时间距离时间零点的毫秒数。

**Date.parse()**

用来解析年月日这种形式参数，并且返回现在这个时间距离时间零点的毫秒数。

3.实例方法

**Date.prototype.valueOf()**

返回实例对象距离时间零点的毫秒数。

**to类：从Data中返回一个字符串，得到指定的时间**

1.Data.prototype.toString()

返回一个完整的日期字符串，

2.Date.prototype.toUTCString()

也是返回一个完整的日期字符串，但是这个时间会比北京时间晚八个小时。

3.Date.prototype.toISOString()

返回对应的时间的ISO写法。

```javascript
var d=Data(2013,0,1);

d.toISOString();
//"2012-12-31T16:00:00.000Z"
```

4.Date.prototype.toJSON()

也是返回一个日期字符串，但是日期是
JSON格式的；

```javascript
var d=Data(2013,0,1);

d.toJSON();
//"2012-12-31T16:00:00.000Z"
```

6.Date.prototype.toDateString()

返回一个日期字符串，但是没有小时分和秒。

7.Date.prototype.toTimeString()

返回一个日期字符串，但是没有年月日。

**本地时间的获取**

1.Date.prototype.toLocaleString()

返回本地的完整的时间

2.Date.prototype.toLocaleDataString()

返回本地的时间，但是没有小时分秒

3.Date.prototype.toLocaleTimeString()

返回本地的时间，但是没有年月日。

2.get类

获取时间。

getTime()：返回实例距离1970年1月1日00:00:00的毫秒数，等同于valueOf方法。
getDate()：返回实例对象对应每个月的几号（从1开始）。
getDay()：返回星期几，星期日为0，星期一为1，以此类推。
getFullYear()：返回四位的年份。
getMonth()：返回月份（0表示1月，11表示12月）。
getHours()：返回小时（0-23）。
getMilliseconds()：返回毫秒（0-999）。
getMinutes()：返回分钟（0-59）。
getSeconds()：返回秒（0-59）。
getTimezoneOffset()：返回当前时间与 UTC 的时区差异，以分钟表示，返回结果考虑到了夏令时因素。

3.set类

设置时间
setDate(date)：设置实例对象对应的每个月的几号（1-31），返回改变后毫秒时间戳。
setFullYear(year [, month, date])：设置四位年份。
setHours(hour [, min, sec, ms])：设置小时（0-23）。
setMilliseconds()：设置毫秒（0-999）。
setMinutes(min [, sec, ms])：设置分钟（0-59）。
setMonth(month [, date])：设置月份（0-11）。
setSeconds(sec [, ms])：设置秒（0-59）。
setTime(milliseconds)：设置毫秒时间戳。

**RegExp对象**

是一种表达文本模式的方法，

**新建正则表达式**的方法有两种。

```javascript
var regex=/xyz/;//以斜杠作为开始标志和结束标志。

var regex= new RegExp('xyz');//regexp够构造方法，可以有两个参数，第一个是字符串，第二是修饰符。
```

**实例属性**

**RegExp.prototype.ignoreCase**：返回一个布尔值，表示是否设置了i修饰符。
**RegExp.prototype.global：**返回一个布尔值，表示是否设置了g修饰符。
**RegExp.prototype.multiline：**返回一个布尔值，表示是否设置了m修饰符。
**RegExp.prototype.flags：**返回一个字符串，包含了已经设置的所有修饰符，按字母排序。

**RegExp.prototype.lastIndex**：返回一个整数，表示下一次开始搜索的位置。

**RegExp.prototype.source**：返回正则表达式的字符串形式。

**实例方法**

1.RegExp.prototype.test()：

返回一个布尔值，表示当前模式是否能匹配参数字符串。

```/cat/.test('dogs and dogs');//'/cat/'就是当前的实例对象，就是这个实例对象能不能匹配参数字符串。

**g修饰符**

如果实例对象带了g修饰符，则每次搜索位置都从上次搜索匹配的最后一个位置开始。而开始的搜索位置可以通过lastIndex()方法来设定。

2.RegExp.prototype.exec() 

实例对象与参数字符串匹配，如果匹配成功就返回匹配的字符串，如果没有就返回null
*实例对象还可以用括号，如果有括号的话，方法会返回多个字符串，第一个是实例对象整体的匹配，第二个是括号里面内容的匹配*

返回的字符串有两个属性：
1.input：返回原字符串；
2.index：匹配到的起始位置；

**字符串的实例方法**
1.String.prototype.match()

对字符串进行正则匹配，返回所有匹配到的字符串组成的数组。

2.String.prototype.search()

返回匹配到的第一个的位置。

3.String.prototype.replace()

可以替换匹配的值，有两个参数，第一个是正则表达式，表示搜索模式，第二个是替换的内容。

匹配规则：

1.字面量字符：

某个字符只表示它字面上的含义，

2元字符：

**.(点字符)**:匹配除了回车，换行，行分隔符，段分隔符以外的所有字符。

**位置字符：**
^表示字符串的开始位置；
$表示字符串的结束位置；

**选择符：**表示或者关系

转义符：需要转义的字符，^ . [ $ ( ) | * + ? { \

*注意如果用RexExp方法生成正则对象，转义需要两个\\*

**特殊字符**

\cX 表示Ctrl-[X]，其中的X是A-Z之中任一个英文字母，用来匹配控制字符。
[\b] 匹配退格键(U+0008)，不要与\b混淆。
\n 匹配换行键。
\r 匹配回车键。
\t 匹配制表符 tab（U+0009）。
\v 匹配垂直制表符（U+000B）。
\f 匹配换页符（U+000C）。
\0 匹配null字符（U+0000）。
\xhh 匹配一个以两位十六进制数（\x00-\xFF）表示的字符。
\uhhhh 匹配一个以四位十六进制数（\u0000-\uFFFF）表示的 Unicode 字符。

字符类：
表示一系列字符可供选择，只用匹配其中一个就行，所有可以选择的字符都放在[]里面。

1.脱字符：如果[]中有^表示除了[]里面的字符其他的都可以。

*如果是[^]表示一切字符都不行，包括换行符。而[.]也表示一切字符，但是不包括换行符*

2.连字符：
用于提供简写形式的一个范围内的字符。

预定义模式：

\d 匹配0-9之间的任一数字，相当于[0-9]。
\D 匹配所有0-9以外的字符，相当于[^0-9]。
\w 匹配任意的字母、数字和下划线，相当于[A-Za-z0-9_]。
\W 除所有字母、数字和下划线以外的字符，相当于[^A-Za-z0-9_]。
\s 匹配空格（包括换行符、制表符、空格符等），相等于[ \t\r\n\v\f]。
\S 匹配非空格的字符，相当于[^ \t\r\n\v\f]。
\b 匹配词的边界。
\B 匹配非词边界，即在词的内部。

重复类：模式的精确匹配次数，使用大括号表示，
{n}:表示重复n次；
{n,}:至少重复n次；
{n,m}:教室不少于n次不多于m次；

量词符：

? 问号表示某个模式出现0次或1次，等同于{0, 1}。
* 星号表示某个模式出现0次或多次，等同于{0,}。
+ 加号表示某个模式出现1次或多次，等同于{1,}。

贪婪模式：一直匹配，直到匹配不出为止，
非贪婪模式：只要匹配到了一个就不再匹配。

贪婪模式转换为非贪婪模式，只需要在模式结尾加一个问号。

**修饰符**

表示模式的附加规则，一般在正则模式的结尾。

g：全局搜索，把所有的都搜索一遍。

i：忽略大小写。

m：加上之后，^和$会识别换行符。

**JSON**

是一种用于数据交换的文本格式。

每个JSON对象就是一个值，可能是一个数组或者对象，也可以是一个原始类型的值，主要是只能是一个值，不能多个。

**严格规定**
1.复合类型的值只能是数组或者对象，其他不行。

2.原始类型的值只有四种：字符串，数值，布尔值，和null。

3.字符串必须双引号。

4.对象的键名必须双引号。

5.数组或者对象最后一个成员时候不能加逗号，

*null、空数组、空对象都是合法的*

**JSON静态方法**

1.JSON.stringify() ：将一个字符串转为JSON字符串。

*如果转换的对象的属性是undefined，函数，或者XML对象，属性会被JSON.stringify过滤*

*如果转换的数组的属性是undefined，函数，或者XML对象，属性会被JSON.stringify转换成null*

*正则对象会被转成空对象*

*会忽略对象的不可遍历的属性*

**该方法的第二个参数**

1.可以指定要转的字符串的属性。

2.更改方法的返回值。

**JSON.parse()**
用于将JSON转为对应的值。



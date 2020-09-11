## 目录

- [类型转换例题](#%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2%E4%BE%8B%E9%A2%98)
- [if条件语句](#if%E6%9D%A1%E4%BB%B6%E8%AF%AD%E5%8F%A5)
- [加减运算](#%E5%8A%A0%E5%87%8F%E8%BF%90%E7%AE%97)
- [判断变量是否为对象的方案](#%E5%88%A4%E6%96%AD%E5%8F%98%E9%87%8F%E6%98%AF%E5%90%A6%E4%B8%BA%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%96%B9%E6%A1%88)
- [Object\.keys()与Object\.getOwnPropertyNames()有什么区别](#objectkeys%E4%B8%8Eobjectgetownpropertynames%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB)
- [打印yes](#%E6%89%93%E5%8D%B0yes)
- [如何判断一个对象是数组](#%E5%A6%82%E4%BD%95%E5%88%A4%E6%96%AD%E4%B8%80%E4%B8%AA%E5%AF%B9%E8%B1%A1%E6%98%AF%E6%95%B0%E7%BB%84)
- [数组哪些方法会改变自己](#%E6%95%B0%E7%BB%84%E5%93%AA%E4%BA%9B%E6%96%B9%E6%B3%95%E4%BC%9A%E6%94%B9%E5%8F%98%E8%87%AA%E5%B7%B1)
- [将任意值转换为布尔值的方法有哪些](#%E5%B0%86%E4%BB%BB%E6%84%8F%E5%80%BC%E8%BD%AC%E6%8D%A2%E4%B8%BA%E5%B8%83%E5%B0%94%E5%80%BC%E7%9A%84%E6%96%B9%E6%B3%95%E6%9C%89%E5%93%AA%E4%BA%9B)
- [Data对象转换格式](#data%E5%AF%B9%E8%B1%A1%E8%BD%AC%E6%8D%A2%E6%A0%BC%E5%BC%8F)
- [匹配手机号邮箱的正则](#%E5%8C%B9%E9%85%8D%E6%89%8B%E6%9C%BA%E5%8F%B7%E9%82%AE%E7%AE%B1%E7%9A%84%E6%AD%A3%E5%88%99)
- [写一个提取url中params的函数](#%E5%86%99%E4%B8%80%E4%B8%AA%E6%8F%90%E5%8F%96url%E4%B8%ADparams%E7%9A%84%E5%87%BD%E6%95%B0)



## 类型转换例题

### if条件语句

-  **[] == ! []  ->  [] == false -> [] == 0 ->  '' == 0  -> 0 == 0  -> true** 

- `if ([]) console.log(1);`    **输出1**,  if条件语句需要布尔值，除了5个false，其余为true

- `if ({}) console.log(2);`    **2**,  理由同上

- `if ([] == false) console.log(3);`   **3**，false先转换为数值 0 ，之后[]转换为数值0， 0==0，为true，输出3。

- `if ({} == false) console.log(4);`   **没有输出**，false转换为true，{}转换为数值NaN，相等判断中有NaN，结果为false。

- `if ([] == ![]) console.log(5);`  **5**，！的优先级大于 == ，！将[]转换为布尔类型并取反，得false，false再转为0，空对象没有valueOf方法，调用toString方法，转换为 ' '，再转换为数值0，最终结果为true。

- `if ({} == !{}) console.log(6);`  **没有输出**，后者 0，前者转换为NaN，最终false

- `if ('' == false) console.log(7);` 7，0 == 0 

- `if (false == 0) console.log(8);` 8， 0 == 0

- `if (1 == true) console.log(9);`  9， 1 == 1

- `if ('' == 0) console.log(10);`  10， 0 == 0

- `if (NaN == NaN) console.log(11);`  没有输出， NaN与任何值都不相等

- `if ([] == !true) console.log(12);` 12，等同5，

- `if ([] == false) console.log(13);` 13，等同5，

- `if ([] == 0) console.log(14);` 14， 等同5，

- `if (+0 == -0) console.log(15);` 15，0 == 0

- `if (NaN == false) console.log(16);` 没有输出，NaN不等于任何值。

  

### 加减运算

- `{} +1`    1     第一个是空代码块被忽略，实际上就是+1
- `1 + {}`   ‘1[object Object]’ ,    按照解析的顺序，变成 数字+对象，对象调用toString方法返回 ‘[object Object]’， 前者转换为‘1’，最后字符串拼接。
- `[] + 1`  ‘1’， 空数组转换为‘空字符串，再与‘1’拼接
- `1 + []` ‘ 1’，同上
- `[1, 2, 3] + 0`  ，‘1，2，30 ’  前者转换为'1,2,3' 后者 '0'  再拼接
- `[1, 2, 3] + '0'` ‘1，2，30’  同上
- `1 + '0'`   ‘10’
- `1 + 0`  1  数字间的加法
- `1 + true`  2   1+1 = 2 
- `1 + false`  1   1+0 = 1 
- `'1' + true`  拼接，‘1true ’ 
- `'1' + false`   拼接， ’1false ‘
- `![] + []` ‘ false ’ 先运算！，转换为false+[]， 后者转换为空字符串，拼接位

- `1 - true`  0   减法运算，1-1
- `'0' - 0`   0，  0-0
- `0 - '1'`  -1，
- `false - true`  -1
- `{ } -[]`   前者忽略，-0
- `[] - {}`  NaN 都转换为数值，  0 - NaN
- `false - []`  0    0- 0 



***

### 判断变量是否为对象的方案

1. typeof方法。

2. instanceof方法。

3. 使用Object对象的实例方法之一：`Object.prototype.toString()`：返回当前对象对应的字符串形式。

   未防止实例对象已经自定义toString方法，覆盖掉了Object.prototype.toString方法，所以最好使用这种方式判断：

```
Object.prototype.toString.call(value)
```

***

###  Object.keys()与Object.getOwnPropertyNames()有什么区别 

`Object.getOwnPropertyNames()` 该方法返回一个数组，成员是参数对象自身的**全部属性**的属性名，不管该属性是否可以遍历。

`Object.keys` 只返回对象自身的**可遍历属性**的全部属性名。

***



### 打印yes

下面如何定义`a`才能打印`yes`

```
if (a == 1 && a == 2) {
    console.log('yes')
}
```

 **利用 == 判断前先转换的方法。**

创建一个带有自定义toString( 或者 valueOf)函数的对象，在每一次使用它时候改变它所的返回值，使其满足所有条件。 

```
var a = {
	i: 1,
	toString: function(){
		return a.i++;
	}
}
 
var a = {
  i: 1,
	valueOf: function(){
		return a.i++;
	}
}

```



### 如何判断一个对象是数组

1.  **typeof操作符**  

2.  **instanceof操作符 和 对象的constructor 属性**

   ```
   var arr = [1,2,3,1];
   console.log(arr instanceof Array); // true
    
   var fun = function(){};
   console.log(fun instanceof Function); // true
   　　
   ————————————————————————————————————————————————
   var arr = [1,2,3,1];
   console.log(arr.constructor === Array); // true
    
   var fun = function(){};
   console.log(arr.constructor === Function); // true
   ```

3.  **Object.prototype.toString方法**

   ```
   Object.prototype.toString.call( [] ) === '[object Array]'  // true
    
   Object.prototype.toString.call( function(){} ) === '[object Function]'  // true
   ```

4.  **Array.isArray()**



***

### 数组哪些方法会改变自己 

-  var arr = [] 
- arr.splice() 添加，删除项目
- arr.reverse()  逆排序数组
-  array.fill(value, start, end)  数组填充
- arr.sort() 排序数组
- arr.push()  向数组末尾添加一个或多个元素 
- arr.pop()  删除并返回数组的最后一个元素
- arr.unshift()  向数组的开头添加一个或更多元素，并返回新的长度
- arr.shift()  删除数组第一个元素



***

###  将任意值转换为布尔值的方法有哪些 

1. 利用 !!  

2. 利用 Boolean() 



***

###  Data对象转换格式

```
/**
 * 日期格式化
 * @param {Date} date 
 */
function convertDate(date) {

  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var theDate = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();

  if ( month < 10 )     month = '0' + month;
  if ( theDate < 10 )   theDate = '0' + theDate;
  if ( hour < 10 )      hour = '0' + hour;
  if ( minute < 10 )    minute = '0' + minute;
  if ( second < 10 )    second = '0' + second;

return year +"-"+ month +"-" + theDate + " "+ hour +":"+ minute +":"+ second;
             
}
```

//  函数调用

```
var strDate = convertDate( new Date() );
console.log(strDate);
```





***

### 匹配手机号邮箱的正则

1. **const rMobile = /1\d{10}/;**     // 1开头的11位数组

举例

```
//匹配手机号
function isMobilePhone(phone) {
  var reg = /1\d{10}/;
  return reg.test(phone);
}
console.log(isMobilePhone(123456789))  // false
console.log(isMobilePhone(12345678900)) // true
```

2. **const rMail =**  **/(^\w+([-+.]\w+)*)@(\w+([-+.]\w+)*).(\w+$)/;**     // 中间包含@和.的字符串,@与.不能相邻

> 解释：匹配开头：（匹配数字字母下划线 + 【-+.】任意一个）
>
> ​           @ 后面的与开头格式一样
>
> ​            匹配末尾： 数字字母下划线

举例

```
//匹配邮箱
function isEmail(emailStr) {
  var reg = /(^\w+([-+.]\w+)*)@(\w+([-+.]\w+)*).(\w+$)/;
  return reg.test(emailStr);
}
console.log(isEmail('1796460693@qq.com')); //true
console.log(isEmail('li-bo_qing@163.com'));  //true
console.log(isEmail('you.are@super_vip.cn'));  //true
```





***

### 写一个提取url中params的函数 

```
// url 切割法
function getUrlParams(url){
  if(!url) return null;  // 遍历ul的时候，第一次会得到一个空值，不检测就会报错
  var str = url.split('?')[1];
  var result = {};
  if(!str) return null;  // 检测是否为空
  var temp = str.split('&');
  temp.forEach(function(item){ 
    var temp2 = item.split('=');
    result[temp2[0]] = temp2[1];
  })
  return result;
}

  
  console.log(getUrlParams('https://a.b.com/path#title')); // {}
  console.log(getUrlParams('https://a.b.com/path?id=2')); // {id:2}
  console.log(getUrlParams('https://a.b.com/path?id=2&name=abc')); // {id:'2',name='abc'}
  console.log(getUrlParams('https://a.b.com/path?')); // {}
```

split切割法，注意要先检测是否为空，否则就会报错。
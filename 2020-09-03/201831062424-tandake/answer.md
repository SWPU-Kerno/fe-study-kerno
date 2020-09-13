1.下面输出结果是什么,并说明转换的过程

```javascript
if ([]) console.log(1); // 1  []转换为布尔值true
if ({}) console.log(2); // 2  {}转换为布尔值true
if ([] == false) console.log(3);//3 []转换为字符串'' ''再转换为0 false转换为0
if ({} == false) console.log(4);//不输出  false转换为0 {}转换为字符串 [object Object]
if ([] == ![]) console.log(5);//[]转换为布尔值true 取反后为false false再转换为0 []调用toString转换为'' 再转换为0 所以最后 0==0
if ({} == !{}) console.log(6);// {}.toString返回'[object Object]' Number([object Object]) = NaN !{}=0 所以NaN != 0 
if ('' == false) console.log(7);//7 都转换为0
if (false == 0) console.log(8);//8 都转换为0
if (1 == true) console.log(9);//9 布尔值和其他的数据比较时 布尔值先被Number转换 Number(true) = 1
if ('' == 0) console.log(10);//10 都转换为0
if (NaN == NaN) console.log(11); // NaN和其他任何类型比较永远返回false（包括和他自己）
if ([] == !true) console.log(12);//12 []转换为0 !true取反false后转换为0
if ([] == false) console.log(13);//13 []转换为0 false转换为0
if ([] == 0) console.log(14);//14 []转换为0
if (+0 == -0) console.log(15);//15  显而易见
if (NaN == false) console.log(16) // NaN不等于任何
```
2.下面计算结果（包含结果的类型）是什么，并说明理由
```javascript
{ } +1 // '[object Object]1' 双方都转为了String
1 + {} // '1[object Object]' 双方都转为了String
[] + 1 // []被toString转换为'' Number('') = 0 1+0=0
1 + [] // []被toString转换为'' Number('') = 0 1+0=0
[1, 2, 3] + 0 // '1,2,30' [1, 2, 3]先被tostring转换 然后字符串相加 
[1, 2, 3] + '0' // '1,2,30' [1, 2, 3]先被tostring转换 然后字符串相加 
1 + '0' // '10' 有一侧为字符串就会被视为字符串拼接
1 + 0 //1 正常的加法
1 + true //2 1 + Number(true)
1 + false// 1 1 + Number(false)
'1' + true // '11'
'1' + false // '10'
![] + [] // 'false'
1 - true // 0
'0' - 0 // 0
0 - '1' // 1
false - true// -1
{ } -[] //NaN
[] - {}// NaN
false - [] //0 [].toString() =0 Number(false)=0
```
3.如何判断一个变量是否为对象,有哪几种方案
>1.使用typeof（null，对象，数组都会返回对象） 2.使用Object.prototype.toString.call(obj) 3.使用obj.constructor === Object 4.使用instanceof（各种类型变量都是基于对象的，不推荐使用） 

4.Object.keys()与Object.getOwnPropertyNames()有什么区别
>Object.keys()返回一个数组，成员是参数对象自身的不含继承的）所有可遍历（enumerable）属性的键名
 Object.getOwnPropertyNames()返回一个数组，成员是参数对象自身的包含继承的）所有可遍历（enumerable）属性的键名

5.下面如何定义a才能打印yes
```javascript
var a = {
    n:0,
    toString:function(){
        return this.n+=1
    }
}

if(a == 1 && a == 2 ){
    console.log(1)
}
```
>对象数据类型会先调用toString，数组数据类型会先调用valueof再调用toString

6.如何判断一个对象是数组

>1.使用instanceof 2.使用Array.isArray() 3.使用Object.prototype.toString.call(Array) 4.使用constructor

7.数组哪些方法会改变自己

>pop(),shift(),unshift(),push(),reverse(),sort(),splice()

8.将any（任意值）转换为布尔值的方法有哪些
>!!any Boolean(any)


9.写一个方法将传入的Date对象转换为 yyyy-MM-dd hh:mm:ss的格式

```javascript
/**
 * 日期格式化
 * @param {Date} date 
 */

function convertDate(date =  new Date()) {
    let day =  new Date(date.getTime()).toISOString().split('T')
    return `${day[0]} ${day[1].split('.').shift()}`
}
let date = new Date()
console.log(convertDate(date))
```
10.写个匹配手机号,邮箱的正则

>rMobile.match(/^1\d{10}$/)

>rMail.match(/^\w+@\w+\.\w+$/)

附上一个教程：[正则表达式总结](https://www.jianshu.com/p/488d60349325)
11.写一个提取url中params的函数
```javascript
/**
 * 提取url中的参数
 * @param {String} url 
 */
function getUrlParams(url){
  let reg = /(\w+)=(\w+)/g
  let arr = url.match(reg)
  let result = {}
  if(arr) arr.forEach((value,i) => {
      let param = value.split('=')
      result[param[0]] = param[1]
  })
  return result 
}
```

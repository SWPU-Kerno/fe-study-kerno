1.下面输出结果是什么,并说明转换的过程
/**
 * 除了 undefined， null， false， NaN， ''， 0， -0转换为false
 *  其他所有值都转为 true，包括所有对象。
 */
if ([]) console.log(1); // 1 数组[]转换为true
if ({}) console.log(2); // 2 对象{}转换为true
if ([] == false) console.log(3); // 3 因为出现了false，则将false转为0,数组为空则数组[]转为0
if ({} == false) console.log(4); //   同上，但对象为引用类型，所以{}转为了NaN,0!=NaN,所以是false
if ([] == ![]) console.log(5); // 5 ![]为false即转换为0，[]为空数组也转换为0
if ({} == !{}) console.log(6); //   {}转换为NaN，!{}为false转换为0
if ('' == false) console.log(7); // 7 ''转换为false
if (false == 0) console.log(8); // 8 false转为0
if (1 == true) console.log(9); // 9 true转为1
if ('' == 0) console.log(10); // 10 ''为空字符串转换为0
if (NaN == NaN) console.log(11);// NaN值非常特殊，任何值都不相等，同样的也不等于自己
if ([] == !true) console.log(12); // 12 !true转为false false转为0，数组为空则转为0
if ([] == false) console.log(13); // 13 同上
if ([] == 0) console.log(14); // 14 同上
if (+0 == -0) console.log(15); // 15 0和-0都转换成false
if (NaN == false) console.log(16); // false转为0，但NaN不等于任何值

2.下面计算结果（包含结果的类型）是什么，并说明理由
{} +1 // [object Object]1 使用+将调用toString()方法，将{}变成了[Object,Object]，最后再字符串拼接
1 + {} // 1[object Object] 同上
[] + 1 // 1 空数组转换为0，所以0+1=0
1 + [] // 1 同上
[1, 2, 3] + 0 // 1,2,30
[1, 2, 3] + '0'// 1,2,30
1 + '0'// 10 '0'是字符串，1+'0'就是字符串拼接 所以就是10
1 + 0// 1 两数字相加 1+0=1
1 + true// 2 true转换为数值为1 所以1+1=2
1 + false// 1 false转换为数值为0，所以1+0=1
'1' + true //1true '1'是字符串所以这里是字符串拼接，1true 
'1' + false //1false 同上
![] + []// false 
1 - true // 0 true转换为数值为1，1-1=0
'0' - 0 // 0 字符串减了个0相当于没减所以还是0
0 - '1' // -1 字符串拼接 所以是-1
false - true // -1 false转换为0，true转换为1，所以0-1=-1
{} -[] // NaN {}转换为NaN,所以怎么运算都是NaN
[] - {} // NaN 同
false - []// 0 false转换为0，空数组也转换0，所以0-0=0

3.如何判断一个变量是否为对象,有哪几种方案
答： typeof,Object.prototype.toString.call(),instanceof,constructor

4.Object.keys()与Object.getOwnPropertyNames()有什么区别
答：Object.getOwnPropertyNames方法与Object.keys类似。对于一般的对象来说，
Object.keys()和Object.getOwnPropertyNames()返回的结果是一样的。只有涉及不可枚举属性时，才会有不一样的结果。
Object.keys方法只返回可枚举的属性，Object.getOwnPropertyNames方法还返回不可枚举的属性名。

5.下面如何定义a才能打印yes
if (a == 1 && a == 2) {
    console.log('yes')
}
答：将a设置成对象，设置属性i为1并重写方法toString,每调用一次方法就使得i++
var a = {
    i:1,
    toString(){
        return this.i++;
    }
}


6.如何判断一个对象是数组
答：Array.isArray()、Object.prototype.constructor.call()

7.数组哪些方法会改变自己
答：push()、pop()、shift()、unshift()、reverse()、splice()、sort()

8.将any（任意值）转换为布尔值的方法有哪些
答：Boolean()、 利用两个'!'运算符，第一个'!'将值转换成布尔值并取其值的非值，第二个'!'将其布尔值还原

9.写一个方法将传入的Date对象转换为 yyyy-MM-dd hh:mm:ss的格式
/**
 * 日期格式化
 * @param {Date} date 
 */
function convertDate(date) {
    var string1 = date.toJSON().slice(0,10);
    var string2 = date.toTimeString().slice(0,8);
    return string1.concat(' ',string2);
}

10.写个匹配手机号,邮箱的正则
const rMobile = /^1\d{10}$/ // 1开头的11位数组
const rMail = /\w+@\w+\.\w+/ // 中间包含@和.的字符串,@与.不能相邻

11.写一个提取url中params的函数
/**
 * 提取url中的参数
 * @param {String} url 
 */
function getUrlParams(url){
    var reg = /^https:\/\/\D+\.\D+\/path/;
    var str = url.replace(reg,'');
    if(str[0]=="?"){
        str = str.substr(1);
        str = str.split("&");
    }
    else{
        str =  "";
    }
    return str; 
}

console.log(getUrlParams('https://a.b.com/path#title')); // {}
console.log(getUrlParams('https://a.b.com/path?id=2')); // {id:2}
console.log(getUrlParams('https://a.b.com/path?id=2&name=abc')); // {id:'2',name='abc'}
console.log(getUrlParams('https://a.b.com/path?')); // {}
console.log(getUrlParams('https://a.b.com/path?id=2&name=abc&word=dsds')); // {id:'2',name='abc',word:'dsds'}
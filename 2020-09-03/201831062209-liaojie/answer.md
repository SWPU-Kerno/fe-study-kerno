##1.下面输出结果是什么，并说明转换的过程

if ([]) console.log(1);输出1，空对象预期转换为bool值为真

if ({}) console.log(2);输出2，空对象预期转换为bool值为真

if ([] == false) console.log(3); 输出，==符号两边会通过Number()进行转换[]为0 false为0 俩相等

if ({} == false) console.log(4); 不输出,Number({})转为NaN,Number(false)转为0,俩不等

if ([] == ![]) console.log(5); 输出5，前面通过Number进行转换为0，后面直接bool转换为false再通过Number转为0，俩相等

if ({} == !{}) console.log(6);不输出，前面Number进行转为NaN ，NaN不等于任何东西，所以不输出

if ('' == false) console.log(7);输出7，俩都通过Number转为0

if (false == 0) console.log(8);输出8，false自动转换（Number）为0

if (1 == true) console.log(9); 输出9

if ('' == 0) console.log(10); 输出10

if (NaN == NaN) console.log(11); 不输出,NaN不等于任何东西

if ([] == !true) console.log(12); 输出12

if ([] == false) console.log(13);  输出13

if ([] == 0) console.log(14); 输出14同样是Number转换

if (+0 == -0) console.log(15);输出15

if (NaN == false) console.log(16); 不输出，NaN不等于任何东西

##  2.计算下面结果（包含结果的类型）是什么，并说明理由

{ } +1  输出结果是 string类型的 [object object]1, {}先调用valueOf返回对象本身，再调用toString方法转为字符串
 
1 + {}  输出结果是 string类型的 1[object object],同上的

[] + 1  输出结果是 string类型的 1 []调用valueOf返回[],[]再调用toString方法转为空字符串

1 + []  输出结果是 string类型的 1 同上

[1, 2, 3] + 0 输出结果是 string类型的 1,2,30 [1,2,3]同上进行转换到最后是string类型的1,2,3

[1, 2, 3] + '0' 同上没有变化

1 + '0'  输出结果是 string类型的10  表达式中包含了string类型的参数

1 + 0    输出结果是 Number类型的1 这是number之间的加减法

1 + true 输出结果是 Number类型的2 , true被Number(true)转换为1

1 + false 输出结果是 Number类型的1,false被Number(false)转换为0

'1' + true 输出结果是 string类型的 1true 表达式包含了 string类型的参数

'1' + false 输出结果是 string类型的 1false

![] + [] 输出结果是 string类型的 false

1 - true 输出结果是 Number类型的 0 true被Number(true)转为数值1

'0' - 0 输出结果是Number类型的 0 减法做单纯的数学运算，所以'0'被Number()转换为 数值0

0 - '1' 输出结果是 Number类型的 -1，同上

false - true 输出结果是 Number类型的-1

{ } -[] 输出结果是 NaN 因为{}被Number()转换为NaN 但是[]被Number转换为0

[] - {} 输出结果是NaN 同上

false - [] 输出结果是 Number类型的 0 他俩都被 Number转为 0

##3.判断一个变量是否为对象

1.使用instanceof Object方法
2.通过 Object()函数进行判断 

function isObject(value){

return value === Object(value)

}

##4.Object.keys()与Object.getOwnPropertyNames()有什么区别

Object.keys()只返回该对象自身的属性(而不是继承的)的所有属性名

object.getOwnPropertyNames()会返回包含了该对象自身的所有属性名

例如数组的length属性是不可枚举属性，所以只出现在了
Object.getOwnPropertyNames()

但是一般情况下还是使用Object.keys()遍历对象的属性

## 5.下面如何定义a才能打印yes

因为 == 运算符两边会进行隐式的Number转换 然后将a定义为一个对象的话那么

就会按照Number()转换对象的规则来执行，会调用valueOf(),自己重写valueOf()可以达到修改返回值的目的

let a = {

    i: 1,
    
    valueOf:function(){
    
        return a.i++;
    }
    
}

if( a == 1 && a == 2 ){

    console.log('yes');
    
}

## 6.如何判断一个对象是数组

Array.IsArray()方法返回一个布尔值，表示参数是否为数组。它可以弥补typeof运算符的不足

valueOf()方法会返回数组本身

## 7.数组的哪些方法会改变自己

push(),pop(),shift(),unshift(),reverse(),splice(),sort()

## 8.将任意值转变为布尔值的方法

Boolean()函数

双重的否运算符: !!

## 9.写一个方法将传入的Data对象转换为yyyy-MM-dd hh:mm:ss的格式
/**

 * 日期格式化
 
 * @param {Date} date 
 
 */
 
function convertDate(date) {

}

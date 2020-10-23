# 924

## 算法与数据结构/ES6/拓展深广度
### 1. 算法与数据结构

>题目
leetcode题链：剑指 Offer 56 - I. 数组中数字出现的次数

#### 题解的思路
```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */

var singleNumbers = function(nums) {
    // 取得全部异或的结果
    let xorVal = 0
    for (let i=0; i<nums.length; i++) {
        xorVal ^= nums[i]
    }
    // 得到与测试用的数字
    let andNum = xorVal & -xorVal
    let result = [0, 0]
    // 通过与测试，将两个不同的数分成两个组进行异或
    for (let i=0; i<nums.length; i++) {
        if (nums[i] & andNum) {
            result[0] ^= nums[i]
        }
        else {
            result[1] ^= nums[i]
        }
    }
    return result
};
```
#### 时间/空间复杂度分析
<pre>
时间复杂度：两次循环时间复杂度都是n，最终时间复杂度为O(n)
空间复杂度：使用的额外空间与n无关，空间复杂度为O(1)
</pre>
>leetcode题链：剑指 Offer 48. 最长不含重复字符的子字符串

#### 我的思路
```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0
    // 感觉字符串每次操作都是创建一个新的串比较浪费时间，所以用数组0.0
    // 而且力扣算使用空间的时候好像是按申请了多少个，而不是最大使用多少个
    // 比如申请一个空间，释放了，再申请，重复n次，力扣算n个空间
    // 所以字符串，从0拼接到n，力扣算是使用了1+2+3+4+...+n个空间
    // 如果是数组，只算用了n个空间
    // 该算法采用数组使用空间40M，采用字符串使用空间44M
    let sPart = []
    let sPartL = 0
    let index = 0
    let left = 0
    for (let i=0; i<s.length; i++) {
        // 让索引从left指向的位置开始计数
        index = sPart.indexOf(s[i], left) - left
        // 如果没找到则说明是新的字符，直接加入
        if (index <= -1) {
            sPart.push(s[i])
            sPartL++
            if (sPartL > max) {
                max = sPartL
            }
        } // 否则需要将前面的去掉，更新计数
        else {
            // 从逻辑上去掉，减少操作次数
            left += index+1
            sPart.push(s[i])
            sPartL -= index
        }
    }
    return max
};
```
#### 时间/空间复杂度分析
<pre>
时间复杂度：外层for循环次数为n，内层indexOf查询最坏情况下依次查询长度为(1, 2, 3, 4, ..., n)的串， 共查询n(n+1)/2次，时间复杂度为O(n**2)
空间复杂度：使用的额外空间与n有关，最大为n, 空间复杂度为O(n)
</pre>
###2. ES6


#### 首屏图片的加载策略有哪些
<pre>
答：1.图片懒加载
2.使用CDN加速
3.缓存文件
4.使用link标签的rel属性设置 prefetch、preload

</pre>
####大量图片，列表式
<pre>
todo: 这个和上面的问题都不太懂啊0.0
</pre>

####正则都有哪些修饰符，分别有什么意义
<pre>
i: 表示忽略大小写
g: 表示全局匹配
y: 表示粘连模式，每次匹配需要在lastIndex的位置开始
m: 表示多行匹配
s: 表示dotALL模式，逗号匹配所有字符
u: 表示可匹配unicode 字符
</pre>
#### let,const的区别是什么
<pre>
答：let 声明变量，const 声明常量。其他都一样
</pre>
#### 实现一个方法，传入一个n，1s后打印1，又经过2s 打印2,..又n-1s 打印 n-1
```js
function fn(n){
    let count = 1
    function x(gap) {
        if (count <= n) {
            setTimeout(()=>{
                console.log(count)
                count++
                x(gap+count)
            }, gap*1000)
        }
    }
    x(count)
}
fn(3)
// 依次输出
// 1  -- 1s 后
// 2  -- 1s + 2s 后
// 3  -- 1s + 2s + 3s 后
```
#### 如何实现add函数才能满足以下条件
```js
function add(a,b){
    if (arguments.length === 2) return a+b;
    else return function(b){return a + b}
}

add(2,3) // 5
add(2)(3) // 5
add(5)(4) // 9
```
什么是柯里化？它有什么作用
<pre>
答：把一个接收多个参数的函数转换成只接收一个参数(最初函数的第一个参数)的函数，并且返回(接收剩余参数并返回结果的)新函数的技术
作用：惰性求值、提前传递部分参数、参数复用
</pre>


### 笔记

> 原来的正则表达式不可以处理四字节的Unicode字符，现在可以通过添加u修饰符来解决这个问题
```js
// 返回正确的字符串长度

function codePointLength(text) {
  var result = text.match(/[\s\S]/gu);
  return result ? result.length : 0;
}

var s = '𠮷𠮷';

s.length // 4
codePointLength(s) // 2
```

> 对普通字符进行转义，如转义逗号(/\\,/)，在没有u修饰符时无效，在有u修饰符时会报错

```js
/\,/ // /\,/
/\,/u // 报错
```

> 点号'.'可以代表除开行终止符的任意一个字符，为了让点号'.'代表所有字符，可以启用s修饰符, 这被称为dotAll模式

```js
/foo.bar/.test('foo\nbar')  // false
/foo.bar/s.test('foo\nbar') // true
```

>“先行断言”指的是，x只有在y前面才匹配，必须写成/x(?=y)/。比如，只匹配百分号之前的数字，要写成/\d+(?=%)/。“先行否定断言”指的是，x只有不在y前面才匹配，必须写成/x(?!y)/。比如，只匹配不在百分号之前的数字，要写成/\d+(?!%)/。

```js
/\d+(?=%)/.exec('100% of US presidents have been male')  // ["100"]
/\d+(?!%)/.exec('that’s all 44 of them')                 // ["44"]
```

>“后行断言”正好与“先行断言”相反，x只有在y后面才匹配，必须写成/(?<=y)x/。比如，只匹配美元符号之后的数字，要写成/(?<=\$)\d+/。“后行否定断言”则与“先行否定断言”相反，x只有不在y后面才匹配，必须写成/(?<!y)x/。比如，只匹配不在美元符号后面的数字，要写成/(?<!\$)\d+/。

```js
/(?<=\$)\d+/.exec('Benjamin Franklin is on the $100 bill')  // ["100"]
/(?<!\$)\d+/.exec('it’s is worth about €90')                // ["90"]
```

> “后行断言”的实现，需要先匹配/(?<=y)x/的x，然后再回到左边，匹配y的部分。这种“先右后左”的执行顺序，与所有其他正则操作相反，导致了一些不符合预期的行为。

```js
// 首先，后行断言的组匹配，与正常情况下结果是不一样的。

/(?<=(\d+)(\d+))$/.exec('1053') // ["", "1", "053"]
/^(\d+)(\d+)$/.exec('1053') // ["1053", "105", "3"]
/*上面代码中，需要捕捉两个组匹配。没有“后行断言”时，第一个括号是贪婪模式，第二个括号只能捕获一个字符，所以结果是105和3。而“后行断言”时，由于执行顺序是从右到左，第二个括号是贪婪模式，第一个括号只能捕获一个字符，所以结果是1和053。
/*

//  其次，“后行断言”的反斜杠引用，也与通常的顺序相反，必须放在对应的那个括号之前。

/(?<=(o)d\1)r/.exec('hodor')  // null
/(?<=\1d(o))r/.exec('hodor')  // ["r", "o"]

/*
上面代码中，如果后行断言的反斜杠引用（\1）放在括号的后面，就不会得到匹配结果，必须放在前面才可以。因为后行断言是先从左到右扫描，发现匹配以后再回过头，从右到左完成反斜杠引用。
*/
```

>ES2020 引入了一种新的数据类型BigInt（大整数）。BigInt只用来表示整数，没有位数的限制，任何位数的整数都可以精确表示。

```js
// 为了与 Number 类型区别，BigInt 类型的数据必须添加后缀n。

1234 // 普通整数
1234n // BigInt

// BigInt 的运算
1n + 2n // 3n
```
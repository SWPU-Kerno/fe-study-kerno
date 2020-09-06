##  排序算法
<pre>
学习资料
坐在马桶刷看算法系列-快速排序
菜鸟教程-归并排序
百度百科-归并排序
leetcode题链：912. 排序数组

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {

};
使用以下排序算法实现，并回答后续问题:
</pre>

### 快排
```javascript
function swap(arr, idx1, idx2) {
    arr[idx1] = arr[idx1] ^ arr[idx2]
    arr[idx2] = arr[idx1] ^ arr[idx2]
    arr[idx1] = arr[idx1] ^ arr[idx2]
}
function quickSort(arr, left, right){
    let i = left,
        j = right,
        // 随便取一个值
        pivot = arr[Math.floor((left + right) / 2)]
    
    while(i <= j) {
        // 从左边找到大于等于pivot的值
        while (arr[i] < pivot) {
            i++;
        }
        // 从右边找到小于等于pivot的值
        while (arr[j] > pivot) {
            j--;
        }
        // 将小的数放在左边，大的数放在右边
        // i在j的左边才交换
        if (i <= j)
        {
            // 因为用的异或实现交换，所以如果是同一个空间就被清零了
            if (i !== j)
            {
                swap(arr, i, j);
            }

            i++;
            j--;
        }
    }
    // 上面的循环执行完，可以保证是这个顺序 left j i right
    // 如果i不小于right，实则是i=right，只有一个元素不需要再递归
    if (i < right) {
        quickSort(arr, i, right)
    }
    // 如果j不小于left，实则是j=left，只有一个元素不需要再递归
    if (left < j) {
        quickSort(arr, left, j)
    }
}
var sortArray = function(nums) {
    quickSort(nums, 0, nums.length - 1)
    return nums
};
```
### 归并排序
```javascript
function merge(left, right) {
    let result = []
    while (left.length && right.length)
    {
        // 把小的元素依次push到result中
        if (left[0] <= right[0]) {
            result.push(left.shift())
        }
        else {
            result.push(right.shift())
        }
    }
    // 多出来的元素，直接连接到result后面
    while (left.length) {
        result = result.concat(left)
    }
    while (right.length) {
        result = result.concat(right)
    }
    return result
}

function mergeSort(arr) {
    // 如果长度小于二不需要再分
    if (arr.length < 2) {
        return arr
    }
    // 分成两半，分别再排
    let middle = Math.floor((arr.length-1) / 2)
    let left = arr.slice(0, middle)
    let right = arr.slice(middle)
    // 将分别排好的两个数组再进行融合
    return merge(mergeSort(left), mergeSort(right))


}

var sortArray = function(nums) {
     return mergeSort(nums)
};
```
## 相关问题
### 分别说说这两种方式在最好和最坏的情况下时间复杂度是多少？最坏的情况是什么？
<pre>
    答：快速排序，在最好情况下时间复杂度是O(nlogn)。 当在最坏情况下，待排序的序列为正序或者逆序，每次划分只得到一个比上一次划分少一个记录的子序列。此时需要执行n‐1次递归调用，且第i次划分需要经过n‐i次关键字的比较才能找到第i个记录, 需要比较的次数为
</pre>
![](http://images.51cto.com/files/uploadimg/20110826/222653304.jpg)
<pre>
    时间复杂度为O(n^2)
</pre>
<pre>
    归并排序，在最好情况下时间复杂度是O(nlogn)。因为不管在什么情况下，归并排序分为两个数组的时候都是均分，所以最坏情况时间复杂度仍然是O(nlogn)
</pre>


### 哪些排序算法是稳定的?哪些是不稳定的?如何区分的?
<pre>
    答：归并排序是稳定的，快速排序是不稳定的。稳定的算法在排序的过程中不会改变元素彼此的位置的相对次序,反之不稳定的排序算法经常会改变这个次序
</pre>
## ES5
<pre>
学习资料
网道JavaScript，阅读第四,五章

语法专题
标准库
js类型转换规则
正则常用关键字
标准库的内容较多，可细品，对于某些对象的API目前不用去死记，可以自己找demo练练或者知道它能完成哪些操作就行
</pre>
## 相关问题
### 1. 下面输出结果是什么,并说明转换的过程
if ([]) console.log(1);
<pre>
输出1，[]被转换成true
</pre>
if ({}) console.log(2);
<pre>
输出2，{}被转换成true
</pre>
if ([] == false) console.log(3);
<pre>
输出3，[]被转换成'', 再被转换成false
</pre>
if ({} == false) console.log(4);
<pre>
不输出，{}始终被转换成true
</pre>
if ([] == ![]) console.log(5);
<pre>
输出5，[]被转化为布尔值时为true，因此![]为false。参与运算的时候被转换成false，所以左边右边相等
</pre>
if ({} == !{}) console.log(6);
<pre>
输出6，{}始终被转换成true
</pre>
if ('' == false) console.log(7);
<pre>
输出7，''被转换成false
</pre>
if (false == 0) console.log(8);
<pre>
输出8，false被转换成0
</pre>
if (1 == true) console.log(9);
<pre>
输出9，true被转换成1
</pre>
if ('' == 0) console.log(10);
<pre>
输出10，''被转换成0
</pre>
if (NaN == NaN) console.log(11);
<pre>
不输出，NaN 与任何值都不相等
</pre>
if ([] == !true) console.log(12);
<pre>
输出12，[]被转换成false
</pre>
if ([] == false) console.log(13);
<pre>
输出13，[]被转换成false
</pre>
if ([] == 0) console.log(14);
<pre>
输出14，此处需要转换成数值，因此先执行valueOf,返回的仍然是对象，再执行toString得到的''，再进行Number('')，得到0
</pre>
if (+0 == -0) console.log(15);
<pre>
输出15，单目运行符，此处需要转换成数值，都为0
</pre>
if (NaN == false) console.log(16);
<pre>
不输出， NaN不等于任何值
</pre>
### 2. 下面计算结果（包含结果的类型）是什么，并说明理由
{ } +1
<pre>
返回1，此处{}不表示对象, 表示空代码块，被舍弃，相当于 +1
</pre>
1 + {}
<pre>
返回"1[object Object]"， {} 和 1 都被转换成字符串
</pre>
[] + 1
<pre>
返回"1"，[]被转换成空字符串''， 1被转换成'1'
</pre>
1 + []
<pre>
返回"1"，[]被转换成空字符串''， 1被转换成'1'
</pre>
[1, 2, 3] + 0
<pre>
返回"1,2,30"， 数组被转换成"1,2,3", 0被转换成'0'
</pre>
[1, 2, 3] + '0'
<pre>
返回"1,2,30"， 数组被转换成"1,2,3"
</pre>
1 + '0'
<pre>
返回"10"， 1被转换成'1'
</pre>
1 + 0
<pre>
返回1， 同类型不转换，仍为数值
</pre>
1 + true
<pre>
返回2，加号运算符，除开与字符串运算，其他情况下，多半是向数值型转换，true被转换成1
</pre>
1 + false
<pre>
返回1， false被转换成0
</pre>
'1' + true
<pre>
返回"1true"， true被转换成'true'
</pre>
'1' + false
<pre>
返回"1false"， false被转换成'false'
</pre>
![] + []
<pre>
返回"false"， 前者从false，转换为'false'， 后者转换为''
</pre>
1 - true
<pre>
返回0， 除开+加号的其他运行符，都是优先转换到数值型，true转换为1
</pre>
'0' - 0
<pre>
返回0， '0' 转换为0
</pre>
0 - '1'
<pre>
返回-1， '1'转换为1
</pre>
false - true
<pre>
返回-1， false转换为0， true转换为1
</pre>
{ } -[]
<pre>
返回-0， {}被当作空代码块被忽略，[]被转换为0
</pre>
[] - {}
<pre>
返回NaN, []转换为0， {}不能转换为数值
</pre>
false - []
<pre>
返回0， false转换为0， []转换为0
</pre>
### 3. 如何判断一个变量是否为对象,有哪几种方案
<pre>
答：第一种：通过obj === Object(obj)判断，原理是Object对于对象参数，始终返回原对象
    第二种：通过 obj instanceof Object判断
</pre>
### 4. Object.keys()与Object.getOwnPropertyNames()有什么区别
<pre>
答：都是返回一个自身拥有属性的数组，但前者只返回可以枚举属性
</pre>
### 5. 下面如何定义a才能打印yes
if (a == 1 && a == 2) {
    console.log('yes')
}
```javascript
a = {
		n:0,
		toString:function(){
			return this.n+=1
		}
	}
```
### 6. 如何判断一个对象是数组
<pre>
答：方法一： 通过Object.prototype.toString.call([]) // "[object Array]"
    方法二：[] instanceof Array // true
    方法三：Array.isArray(obj)
</pre>
### 7. 数组哪些方法会改变自己
<pre>
答：push方法用于在数组的末端添加一个或多个元素，并返回添加新元素后的数组长度。
    pop方法用于删除数组的最后一个元素，并返回该元素
    shift()方法用于删除数组的第一个元素，并返回该元素
    unshift()方法用于在数组的第一个位置添加元素，并返回添加新元素后的数组长度。
    reverse方法用于颠倒排列数组元素，返回改变后的数组
    splice()方法用于删除原数组的一部分成员，并可以在删除的位置添加新的数组成员，返回值是被删除的元素。
    sort方法对数组成员进行排序，默认是按照字典顺序排序。
    
</pre>
### 8. 将any（任意值）转换为布尔值的方法有哪些
<pre>
答：方法一：Boolean(any)
    方法二：!!any
</pre>
### 9. 写一个方法将传入的Date对象转换为 yyyy-MM-dd hh:mm:ss的格式
/**
 * 日期格式化
 * @param {Date} date 
 */
function convertDate(date) {
<code>
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
</code>
}
### 10. 写个匹配手机号,邮箱的正则
const rMobile = // 1开头的11位数字
```javascript
rMobile.match(/1\d{10}/)
```
const rMail = // 中间包含@和.的字符串,@与.不能相邻
### 11. 写一个提取url中params的函数
<pre>
/**
 * 提取url中的参数
 * @param {String} url 
 */
console.log(getUrlParams('https://a.b.com/path#title')); // {}
console.log(getUrlParams('https://a.b.com/path?id=2')); // {id:2}
console.log(getUrlParams('https://a.b.com/path?id=2&name=abc')); // {id:'2',name='abc'}
console.log(getUrlParams('https://a.b.com/path?')); // {}
console.log(getUrlParams('https://a.b.com/path?id=2&name=abc&word=dsds')); // {id:'2',name='abc',word:'dsds'}
</pre>
```javascript
function getUrlParams(url){
    let reg = /&?\??(\w+?=\w+)&?/g
    let params = {}
    let match = reg.exec(url)
    while (match) {
          let kv = match[1].split("=")
          params[kv[0]] = kv[1]
          match = reg.exec(url)
    }
    return params
}
```


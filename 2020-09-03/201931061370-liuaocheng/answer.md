# 排序算法  

## 快速排序

```js
var sortArray = function(nums) {
    return quick_sort(nums, 0, nums.length - 1);
};

function quick_sort(arr,left,right){
	var i = left; //哨兵i
	var j = right; //哨兵j
	var key = arr[left]; //标准值
	if(left >= right){ //如果数组只有一个元素
	   return arr;
	}
	while(i < j){
		while(arr[j] >= key && i < j){ 
			j--;
		}
		while(arr[i] <= key && i < j){   
			i++;
		}
		if(i < j){ 
			var temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;

		}
	}
	arr[left] = arr[i] 
	arr[i] = key;
    quick_sort(arr,left,i-1);
	quick_sort(arr,i+1,right);
    return arr;
}  
```

## 归并排序  

```js
var sortArray = function(nums) {
    return mergeSort(nums, 0, nums.length - 1)
};

function mergeSort(nums, left, right) {
    if (left >= right) return nums;
    let mid = (left + right) >> 1; //比midmid=(left+right)/2要快
    mergeSort(nums, left, mid)
    mergeSort(nums, mid + 1, right)
    return merge(nums, left, mid, right)
}

function merge(nums, left, mid, right) {
    let arr = [];
    let c = 0, i = left, j = mid + 1;
    while (i <= mid && j <= right) {
        if (nums[i] < nums[j]) {
            arr[c++] = nums[i++];
        } else {
            arr[c++] = nums[j++]
        }
    }
    while (i <= mid) {
        arr[c++] = nums[i++];
    }
    while (j <= right) {
        arr[c++] = nums[j++];
    }
    for (let i = 0; i < arr.length; i++) {
        nums[i + left] = arr[i];
    }
    return nums;
}
	
```

###问题回答

1. 快速排序最好情况下时间复杂度为O(n*logn)，最坏情况为O（n^2）（最坏情况）（此处不太理解）当输入序列是正序或者逆序，每次划分只得到一个比上一次划分少一个记录的子序列，注意另一个为空。如果递归树画出来，它就是一棵斜树。此时需要执行n-1次递归调用，且第i次划分需要经过n-i次关键字比较才能找到第i个记录，也就是key的位置，因此比较次数为n(n-1)/2，因此，最坏时间复杂度为O(n^2)  
归并排序最坏最坏情况下时间复杂度都为O(n*logn)
2. 算法的稳定性：假定在待排序的记录序列中，存在多个具有相同的关键字的记录，若经过排序，这些记录的相对次序保持不变，即在原序列中，r[i]=r[j]，且r[i]在r[j]之前，而在排序后的序列中，r[i]仍在r[j]之前，则称这种排序算法是稳定的；否则称为不稳定的。  
堆排序、快速排序、希尔排序、直接选择排序是不稳定的排序算法，而冒泡排序、直接插入排序、折半插入排序、归并排序是稳定的排序算法。

# ES5

### 问题回答

1. 下面输出结果是什么,并说明转换的过程  
该问题主要是js中数据类型强制转换的问题    
if ([]) console.log(1); **输出:1**对象始终为true   
if ({}) console.log(2); **输出:2**  
if ([] == false) console.log(3); **输出:3** []和false都转换为数字类型0然后== 返回为true  
if ({} == false) console.log(4); **输出:无** {}转换为NaN false为0 最终返回false  
if ([] == ![]) console.log(5); **输出:5** [] == ! []   ->   [] == false  ->  [] == 0  ->   '' == 0   ->  0 == 0   ->  true  
if ({} == !{}) console.log(6); **输出:无** {} == ! {}   ->   {} == false  ->  {} == 0  ->   NaN == 0    ->  false  
if ('' == false) console.log(7); **输出:7** 都转换为0后返回true  
if (false == 0) console.log(8); **输出:8** false转换为0之后返回true  
if (1 == true) console.log(9); **输出:9** true转换为1之后返回true  
if ('' == 0) console.log(10); **输出:10** ''->0 最终返回true  
if (NaN == NaN) console.log(11); **输出:无** NaN不等于任何其他类型  
if ([] == !true) console.log(12); **输出:12** []->0 !true->false->0 最终返回12  
if ([] == false) console.log(13); **输出:13** []->0 0==false 返回true  
if ([] == 0) console.log(14); **输出:14** []->0 0==0返回true  
if (+0 == -0) console.log(15); **输出:15** +0和-0相等返回true  
if (NaN == false) console.log(16); **输出:无** NaN不等于任何其他类型  
2. 下面计算结果（包含结果的类型）是什么，并说明理由  
* 有一方为String，那么另一方也会被转为String
* 一方为Number,另一方为原始值类型，则将原始值类型转换为Number
* 一方为Number,另一方为引用类型，双方都转为String  
\{ } +1	=**'[object Object]1'** --\{}被解析为代码块  
1 + \{ } =**'1[object Object]'**  
[] + 1 =**'1'** --空数组在计算时转换为数字0  
1 + [] =**'1'** --空数组在计算时转换为数字0  
[1, 2, 3] + 0 =**1,2,30** --[1, 2, 3]先转化为'1,2,3'  
[1, 2, 3] + '0' =**1,2,30**  
1 + '0' =**'10'**  
1 + 0 =**1**  
1 + true =**2** --1+1  
1 + false =**1** --1+0  
'1' + true =**'1true'** --'1' + 'true'  
'1' + false =**'1false'**  
![] + [] =**'false'** --??不太懂  
1 - true =**0** --1-1  
'0' - 0 =**0** -0-0  
0 - '1' =**-1**  
false - true =**-1**  
\{ } -[] =**-0** --\{}被解析为代码块则仅有-[]即为-0  
[] - \{} =**NaN** --0-NaN  
false - [] =**0**  
3. 如何判断一个变量是否为对象,有哪几种方案
* 利用object方法，如果Object方法的参数是一个对象，它总是返回该对象，即不用转换。利用这一点，可以写一个判断变量是否为对象的函数。
* 使用tyepeof typeof 返回'object'时该变量可能是Object也可能Null。因此我们可以先判断变量是否为null，如果不是再用typeof 进行判断。
* 可以使用Object.prototype.toString方法进行判断 const isPlainObject = obj => Object.prototype.toString.call(obj) === '[object Object]'  
4. Object.keys()与Object.getOwnPropertyNames()有什么区别
* Object.keys方法和Object.getOwnPropertyNames方法都用来遍历对象的属性。方法的参数都是一个对象，返回一个数组，包含了该对象自身的所有属性名。
* 对于一般的对象来说，Object.keys()和Object.getOwnPropertyNames()返回的结果是一样的。只有涉及不可枚举属性时，才会有不一样的结果。Object.keys方法只返回可枚举的属性，Object.getOwnPropertyNames方法还返回不可枚举的属性名。  
5. 下面如何定义a才能打印yes
```js
if (a == 1 && a == 2) {
    console.log('yes')
}
```
* 通过改写toString函数 还有其他方法 [参考资料](https://blog.csdn.net/MFWSCQ/article/details/105106757)  
```js
var a = {
    i:1,
    toString:function(){
        return a.i++;
    }
}
```
6. 如何判断一个对象是数组
* Array.isArray直接判断Array.isArray() 用于确定传递的值是否是一个 Array。如果对象是 Array，则为true; 否则为false.
* 其他方法 [参考资料](https://www.cnblogs.com/peerless1029/p/9950005.html)  
7. 数组哪些方法会改变自己
> * 改变数组
>>* var arr = []
>>* arr.splice()
>>* arr.reverse()
>>* arr.fill()
>>* arr.copyWithin()
>>* arr.sort()
>>* arr.push()
>>* arr.pop()
>>* arr.unshift()
>>* arr.shift()
> * 不改变数组
>>* var arr = []
>>* arr.slice()
>>* arr.map()
>>* arr.forEach()
>>* arr.every()
>>* arr.some()
>>* arr.filter()
>>* arr.reduce()
>>* arr.entries()
>>* arr.find()
>>* arr.concat('1',['2','3']) //[1,2,3]
8. 将any（任意值）转换为布尔值的方法有哪些
* 利用Boolean对象强制转换
* 利用两个'!'运算符，第一个'!'将值转换成布尔值并取其值的非值，第二个'!'将其布尔值还原，类似于“负负得正”的道理。
9. 写一个方法将传入的Date对象转换为 yyyy-MM-dd hh:mm:ss的格式
```js
/**
 * 日期格式化
 * @param {Date} date 
 */
function convertDate(date){
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var theDate = date.getDate();
		var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();

        if ( month < 10 ) {
            month = '0' + month;
        }

        if ( theDate < 10 ) {
            theDate = '0' + theDate;
        }

        if ( hour < 10 ) {
            hour = '0' + hour;
        }

        if ( minute < 10 ) {
            minute = '0' + minute;
        }

        if ( second < 10 ) {
            second = '0' + second;
        }

        return year +"-"+ month +"-" + theDate + " "+ hour +":"+ minute +":"+ second;
}
```
10. 写个匹配手机号,邮箱的正则
```js
const rMobile = /^1\d{10}$/  // 1开头的11位数组
const rMail = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/  // 中间包含@和.的字符串,@与.不能相邻
```
11. 写一个提取url中params的函数
```js
/**
 * 提取url中的参数
 * @param {String} url 
 */
function getUrlParams(url){
	var a = url.split('?'); //分割得到？后的内容
    var str = a[1];
    var result = {};
    if(!str) return {};  //检测是否有参数
    var str2 = str.split('&');
    str2.forEach(function(item){ 
      var temp = item.split('=');
      result[temp[0]] = temp[1];
    })
    return result;
}
```
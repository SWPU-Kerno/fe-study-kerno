# 20200912

## 算法与数据结构

### 相关资料
>博客园-算法笔记（一）——简述时间、空间复杂度分析
>掘金-时间复杂度和空间复杂度
>算法的时间复杂度和空间复杂度-总结

### 1. 最大交换
>给定一个非负整数，你至多可以交换一次数字中的任意两位。返回你能得到的最大值

>leetcode题链：670. 最大交换

<pre>
例1：

输入: 2736
输出: 7236
解释: 交换数字2和数字7。
例2：

输入: 9973
输出: 9973
解释: 不需要交换
</pre>
```js
/**
 * @param {number} num
 * @return {number}
 */
/**
 * numArr: 要查找的数组
 * begin: 起始查找的位置
 * return: 位置靠后的最大成员的索引
 */
function findMaxIdx(numArr, begin) {
    let max = begin
    for (let i=begin+1; i<numArr.length; i++) {
        if (numArr[i] >= numArr[max]) {
            max = i
        }
    }
    return max
}
/**
 * numArr: 要比较的数组
 * begin: 起始比较的位置
 * num: 要比较的数值
 * return: 布尔值
 */
function isMax(numArr, begin, num) {
    let idx = findMaxIdx(numArr, begin)
    return (numArr[idx] === num)
}

/**
 *  
 */
function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

var maximumSwap = function(num) {
    // 转换成数组方便操作
    let numArr = Array.from(num + "")

    // 处理每一位
    for (let i=0; i<numArr.length; i++) {
        // 如果当前位是最大值，则不需要交换
        if (isMax(numArr, i, numArr[i])) {
            continue
        }
        // 找到靠后的最大值，与当前位交换
        let idx = findMaxIdx(numArr, i+1)
        swap(numArr, i, idx)
        break
    }
    // 转换为数值
    return numArr.join("") * 1
};
```

#### 题解的思路 
```js
function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

var maximumSwap = function(num) {
    // 转换成数组方便操作
    let numArr = Array.from(num + '')
    // 保存每种数字最后出现的位置
    let last = []
    for (let i=0; i<numArr.length; i++) {
        last[numArr[i]] = i
    }
    // 处理每一位
    out :for (let i=0; i<numArr.length; i++) {
        let count = 9
        // count 大于当前值才进入循环
        while(count > numArr[i]) {
            // 如果count存在，且位置在当前值的后面，就交换
            if (last[count] && last[count] > i) {
                swap(numArr, last[count], i)
                break out                
            }
            count--
        }
    }
    // 还原成数值
    return numArr.join('') * 1
};
```

### 2. 最大数
> 给定一组非负整数，重新排列它们的顺序使之组成一个最大的整数

> leetcode题链：179. 最大数

<pre>
例1:

输入: [10,2]
输出: 210
例2:

输入: [3,30,34,5,9]
输出: 9534330
</pre>
```js
/**
 * @param {number[]} nums
 * @return {string}
 */

function clearZero(str) {
    if (str === '')
    {
        return ''
    }
    str = str.replace(/^0*/g, '')
    if (str === '') {
        return '0'
    }
    return str
}

function cmp(a, b) {
    // 取最小长度
    let minL = Math.min(a.length, b.length)

    // 比较相同长度部分的大小
    for (let i=0; i<minL; i++) {
        // 相等则继续比较
        if (a[i] === b[i]) {
            continue
        }
        // 不等则可以直接返回
        if (a[i] > b[i])
        {
            return -1
        } else {
            return 1
        }
    }

    // 如果长度相等则相等
    if (a.length === b.length)
    {
        return 0
    }

    // 长度不等还要继续比较
    /**
     * 比较方法为：
     * 例：8308跟830，前面三位相同，具体大小与后面的部分相关
     * 将短的数向后移动自身长度的位数，然后接着比较
     * 长的数不够，则以尾数补齐,例8308就补为830888
     * （为什么这么比较不知道 ，没有用数学证明正确性，
     *  是大量举例得到的结论0.0）
     * 
     * 8308(88)
     *    8 30
     * 前者大,于是最终组合结果 8308830  
     */
    if (a.length > b.length) {
        // 将长的数截断，相当于短的数后移
        let aPart = a.slice(b.length)
        
        // 截断后的长度不足则补齐
        if (aPart.length < b.length) {
            aPart = aPart + new Array(b.length - aPart.length).fill(aPart[aPart.length-1]).join('')
        }
        // 继续比较截断部分与短的部分
        return cmp(aPart, b)
    } else {
        let bPart = b.slice(a.length)

        if (bPart.length < a.length) {
            bPart = bPart + new Array(a.length - bPart.length).fill(bPart[bPart.length-1]).join('')
        }
        return cmp(a, bPart)
    }
}
var largestNumber = function(nums) {
    // 转换为数组
    let numStrArr = nums.map((a)=>a+'')
    // 通过自定义的比较函数，将顺序排好
    numStrArr.sort(cmp)
    // 将结果转换回字符串
    let result = numStrArr.join('')
    // 清除前导0并返回
    return clearZero(result)
};
```

#### 题解的思路 
```js
/**
 * @param {number[]} nums
 * @return {string}
 */

function clearZero(str) {
    if (str === '')
    {
        return ''
    }
    str = str.replace(/^0*/g, '')
    if (str === '') {
        return '0'
    }
    return str
}

function cmp(a, b) {
    let order1 = a + b
    let order2 = b + a

    if (order1 === order2)
    {
        return 0
    }
    return order1 > order2 ? -1:1
}
var largestNumber = function(nums) {
    // 转换为数组
    let numStrArr = nums.map((a)=>a+'')
    // 通过自定义的比较函数，将顺序排好
    numStrArr.sort(cmp)
    // 将结果转换回字符串
    let result = numStrArr.join('')
    // 清除前导0并返回
    return clearZero(result)
};
```
#### 总结
<pre>
“大”是重新赋予的意义：谁在前面使得组合结果大，谁就大
我的思路是先比较a跟b谁大，然后就能得到a+b和b+a谁大，最终得到最大的字符串
题解的思路是，先比较a+b和b+a谁大，然后反推a跟b谁大，最终得到最大的字符串
显然后者的逆向方式更加简单
</pre>

### 3. 整理一篇笔记/文章
>要求：
>介绍一下什么是时间复杂度/空间复杂度
>根据你自己的理解，总结下上两种方案分别如何计算的
>用前面两道算法题做为例子，用你自己总结的方案计算一下，记录一下得出结论的过程步骤


<pre>
时间/空间复杂度即是程序运行时使用的时间/空间多少的描述，通常使用与数据规模相关的函数量级来表示
时间复杂度的计算：找出基础语句的执行次数与数据规模的函数关系，然后再取量级最大的函数关系做为代表
空间复杂度的计算：找出使用空间的大小与数据规模的关系，然后再取量级最大的函数关系做为代表
</pre>
#### 最大交换，时间/空间复杂度分析
```js
// 定义数据规模为传入数字的长度
// 这段代码时间复杂度为O(n)，任何情况下执行numArr.length-begin次循环(与数据规模成线性关系)
// 这段代码申请的额外空间与数据规模无关，空间复杂度为O(1)
function findMaxIdx(numArr, begin) {
    let max = begin
    for (let i=begin+1; i<numArr.length; i++) {
        if (numArr[i] >= numArr[max]) {
            max = i
        }
    }
    return max
}

// 这段代码调用了上一段代码，时间复杂度也是O(n)
// 这段代码申请的额外空间与数据规模无关，空间复杂度为O(1)
function isMax(numArr, begin, num) {
    let idx = findMaxIdx(numArr, begin)
    return (numArr[idx] === num)
}

// 这段代码时间复杂度为O(1) (执行次数与数据规模无关)
// 这段代码申请的额外空间与数据规模无关，空间复杂度为O(1)
function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

// 这段代码中的for循环时间复杂度为O(n)
// for循环中又调用了时间复杂度为O(n)的函数
// 因此总的时间复杂度为O(n**2)

// 这段代码申请的额外空间与数据规模无关，空间复杂度为O(1)
var maximumSwap = function(num) {
    // 转换成数组方便操作
    let numArr = Array.from(num + "")
    // 处理每一位
    for (let i=0; i<numArr.length; i++) {
        // 如果当前位是最大值，则不需要交换
        if (isMax(numArr, i, numArr[i])) {
            continue
        }
        // 找到靠后的最大值，与当前位交换
        let idx = findMaxIdx(numArr, i+1)
        swap(numArr, i, idx)
        break
    }
    // 转换为数值
    return numArr.join("") * 1
};

// 最终的时间复杂度，只取级数最高的函数关系即 O(n**2)
// 最终的空间复杂度，只取级数最高的函数关系即 O(1)
```
#### 最大数，时间/空间复杂度分析
```js
// 当str不为0开头是，执行常数次，当str全0时，执行str.length次
// 时间复杂度为O(n)
// 使用的空间为常数次，空间复杂度为O(1)
function clearZero(str) {
    if (str === '')
    {
        return ''
    }
    str = str.replace(/^0*/g, '')
    if (str === '') {
        return '0'
    }
    return str
}


// 执行的次数与最长字符串的长度成线性关系，时间复杂度为O(n)

// 额外申请的空间与最长字符串的长度成二次方关系，空间复杂度为O(n**2)
// 因为长度为n的字符串，如果与长度为1的字符串比较，最坏情况下会被切成
// 长度为n-1、n-2、...、1的字符串，并且全部都保存在栈中，共n(n-1)2个空间
function cmp(a, b) {

    let minL = Math.min(a.length, b.length)


    for (let i=0; i<minL; i++) {
        // 相等则继续比较
        if (a[i] === b[i]) {
            continue
        }

        if (a[i] > b[i])
        {
            return -1
        } else {
            return 1
        }
    }


    if (a.length === b.length)
    {
        return 0
    }

    if (a.length > b.length) {

        let aPart = a.slice(b.length)
        

        if (aPart.length < b.length) {
            aPart = aPart + new Array(b.length - aPart.length).fill(aPart[aPart.length-1]).join('')
        }

        return cmp(aPart, b)
    } else {
        let bPart = b.slice(a.length)

        if (bPart.length < a.length) {
            bPart = bPart + new Array(a.length - bPart.length).fill(bPart[bPart.length-1]).join('')
        }
        return cmp(a, bPart)
    }
}
// 查阅：V8 引擎 sort 函数只给出了两种排序 InsertionSort 和 QuickSort，数量小于10的数组使用 InsertionSort，比10大的数组则使用 QuickSort。
// 假设是快排，时间复杂度O(nlogn)，空间复杂度O(logn)
var largestNumber = function(nums) {

    let numStrArr = nums.map((a)=>a+'')

    numStrArr.sort(cmp)

    let result = numStrArr.join('')

    return clearZero(result)
};

则最终：
时间复杂度为O(n**2(logn))
空间复杂度为O(n**2(logn))

```
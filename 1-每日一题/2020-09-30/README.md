# 斐波拉切数列

斐波那契数列示例： 

1，1，2，3，5，8，13，21，34 。。。。

**请分别给出迭代和递归的实现方式**

## 问题1
实现这样一个函数，得到斐波拉切数列指定位置上的值

```js
/**
 * 求斐波拉切数列第n项
 * @param {number} index 
 * @returns {number}
 */
function fib(index){
    // ...code
};
fib(1) // 1
fib(4) // 3
```

## 问题2
如果问题1中的参数和返回值调换一下

比如输入8得到该值在数列中的位置6，不存在则返回-1

```js
/**
 * 求指定斐波拉切数对应的位置
 * @param {number} num 
 * @returns {number}
 */
function getFibIndex(num){
    // ...code
}

getFibIndex(8) // 6
getFibIndex(4) // -1
```

## 题解
### 问题1

**递归**
```js
/**
 * 求斐波拉切数列第n项
 * @param {number} index 
 * @returns {number}
 */
function fib(index) {
    if (index === 1 || index === 2) {
        return 1
    }
    return fib(index - 1) + fib(index - 2)
};
```

**迭代**
```js
/**
 * 求斐波拉切数列第n项
 * @param {number} index 
 * @returns {number}
 */
function fib(index) {
    let a = 1, b = 1, c = 0
    if (index === 1 || index === 2) {
        return 1
    }
    while (index-- > 2) {
        c = a + b
        a = b
        b = c
    }
    return c
};
```

### 问题2

**迭代**
```js
/**
 * 求指定斐波拉切数对应的位置
 * @param {number} num 
 * @returns {number}
 */
function getFibIndex(num) {
    if (num === 1) {
        return 1
    }
    let a = 1, b = 1, c = 0
    let index = 2
    while (c < num) {
        index++
        c = a + b
        a = b
        b = c
        if (c === num) {
            return index
        }
    }
    return -1
}
```

**递归**

类似迭代的处理思路，将计算过程作为参数传入
```js
/**
 * 求指定斐波拉切数对应的位置
 * @param {number} num 
 * @returns {number}
 */
function getFibIndex(num, a = 1, b = 1, index = 2) {
    if (num === 1) {
        return 1
    }
    if (a + b > num) {
        return -1
    }
    if (a + b === num) {
        return ++index
    }
    return getFibIndex(num, b, a + b, ++index)
}
```
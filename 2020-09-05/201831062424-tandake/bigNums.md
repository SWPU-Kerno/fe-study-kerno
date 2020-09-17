### 大数相加

代码：
```javascript
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    if (num1 === '0') return num2
    if (num2 === '0') return num1
    let len1 = num1.length - 1,len2 = num2.length-1
    let ans = '', up = 0
    while (len1 >= 0 || len2 >= 0) {
        const m = len1 >= 0 ? num1[len1--] - '0' : 0 
        const n = len2 >= 0 ? num2[len2--] - '0' : 0
        const temp = m + n + up
        up = Math.floor(temp / 10)
        ans = temp % 10 + ans
    }
    if (up === 1) {
        ans = up + ans
    }
    return ans
}
```
思路如下
> 大体思路：使用len1和len2两个指针来模仿从个位开始的加法运算
每一次循环都拿到当前位置的字符与0进行计算，隐式转换成num类型，然后使用temp记录当前的两位数与前一位的和，向下取整拿到下一次循环的进位 ，然后temp对10取余，拿到当前位置的数，一次循环即可，特别的，如果最后最后一次循环还是有进位的话，直接用```+```把字符串拼接上 

### charAt()，charCodeAt()，codePointAt()用法总结
在string.length中 每两个字节为一个长度(16位) 采用 UTF-16 编码
1. charAt(index) 方法可返回指定位置的字符。
> 返回的就是指定位置的字符串

2. charCodeAt()方法返回前两个字节和后两个字节的值。
> charCodeAt 总是返回一个小于 65,536 的值，在历史版本中（如 JavaScript 1.2），charCodeAt 返回一个数字，表示给定 index 处字符的 ISO-Latin-1 编码值。ISO-Latin-1 编码集范围从 0 到 255。开头的 0 到 127 直接匹配 ASCII 字符集。

3. codePointAt方法，能够正确处理 4 个字节储存的字符，返回一个字符的码点
codePointAt方法是测试一个字符由两个字节(16bit)还是由四个字节(32bit)组成的最简单方法。
```java 
function is32Bit(c) {
return c.codePointAt(0) > 0xFFFF;
}
is32Bit("𠮷") // true
is32Bit("a") // false
```
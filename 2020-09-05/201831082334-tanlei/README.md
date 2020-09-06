```js
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

// 生成num个0的字符串
function createZero(num) {
    result = ""
    while (num)
    {
        result += "0"
        num -= 1
    }
    return result
}
// 清除前导0
function clearZero(num) {
    num = num.replace(/^0*/, "")
    // 如果全是0，返回'0'，而不是空串
    if (num.length === 0) {
        return "0"
    }
    return num
}
var addStrings = function(num1, num2) {
    // 分段计算的位数, Number.MAX_SAFE_INTEGER是16位的数字，因此n最多为15
    let n = 15
    // 结果
    let result = ""
    // 进位
    let carry = 0
    // 最大长度
    let maxLen = Math.max(num1.length, num2.length)
    // 通过补0，让两个数长度一致
    num1 = createZero(maxLen - num1.length) + num1
    num2 = createZero(maxLen - num2.length) + num2
    // 如果长度不为0就继续
    while (num1.length) {
        // 取后n位
        let partNum1 = num1.slice(-n)
        let partNum2 = num2.slice(-n)
        // 截断num
        num1 = num1.slice(0, -n)
        num2 = num2.slice(0, -n)
        // 转换为数值，与进位一同相加
        let partSum = partNum1 * 1 + partNum2 * 1 + carry
        partSum = partSum + ""
        // 更新进位
        carry = partSum.slice(0, -n) * 1
        partResult = partSum.slice(-n)
        // 将结果拼接，partResult一定是n位，不够用0补齐
        result = createZero(n - partResult.length) + partResult + result
    }

    // 如果carry不是0，则将carry加到前面
    if (carry)
    {
        result = carry + result
    }
    // 清除掉前导的0
    return clearZero(result)
};
```
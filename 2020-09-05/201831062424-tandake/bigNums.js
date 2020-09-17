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
/**
 * 检测构造函数的原型是否在实例的原型链上
 * @param {object} a 
 * @param {Object} b 
 */
function instanceOf(a, b) {
    const prototype = b.prototype
    let __proto__ = a.__proto__
    while (1) {
        if (__proto__ === prototype) {
            return true
        }

        if (!__proto__) {
            return false
        }
        __proto__ = __proto__.__proto__
    }
}

/**
 * 检测构造函数的原型是否在实例的原型链上
 * @param {object} a 
 * @param {Object} b 
 */
function instanceOf(a, b) {
    return a !== null && (a.__proto__ == b.prototype || instanceOf(a.__proto__, b))
}

console.log(instanceOf([], Array));
console.log(instanceOf({}, Object));
console.log(instanceOf(/^$/, RegExp));
console.log(instanceOf(function () { }, Function));
console.log(instanceOf([], Function));

function A() {

}
console.log(instanceOf(new A(), A));
console.log(instanceOf(new A().__proto__, Function));
console.log(instanceOf(new A().__proto__.constructor, Function));
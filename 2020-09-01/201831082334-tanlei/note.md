## 笔记
### 基本语法
#### label
JavaScript 语言允许，语句的前面有标签（label），相当于定位符，用于跳转到程序的任意位置

```javascript
// break
var num=0;
outermost:
for(var i=0; i<10;i++){
	for(var j=0; j<10; j++){
		if(i==5 && j==5){
			break outermost;
		}
		num++;	
	}
}
console.log(num);		//55

// continue 
var num=0;
outermost:
for(var i=0; i<10;i++){
	for(var j=0; j<10; j++){
		if(i==5 && j==5){
			continue outermost;
		}
		num++;	
	}
}
console.log(num);		//95
```
### 
数据类型
JavaScript 的数据类型，共有六种。（ES6 又新增了第七种 Symbol 类型的值）
数值、字符串、布尔值这三种类型，合称为原始类型（primitive type）的值，对象则称为合成类型（complex type）的值，因为一个对象往往是多个原始类型的值的合成。undefined和null，一般将它们看成两个特殊值。
对象是最复杂的数据类型，又可以分成三个子类型。
>	狭义的对象（object）
	数组（array）
	函数（function）


### 字符串
字符串可以被视为字符数组，因此可以使用数组的方括号运算符，用来返回某个位置的字符（位置编号从0开始），但是无法改变字符串之中的单个字符

每个字符在 JavaScript 内部都是以16位（即2个字节）的 UTF-16 格式储存。也就是说，JavaScript 的单位字符长度固定为16位长度，即2个字节。
JavaScript 对 UTF-16 的支持是不完整的，四字节的单个字符会被认作两个字符（length属性为2）。

### 对象
#### with语句

```javascript
// 例一
var obj = {
  p1: 1,
  p2: 2,
};
with (obj) {
  p1 = 4;
  p2 = 5;
}
// 等同于
obj.p1 = 4;
obj.p2 = 5;
```

### 运算符
void运算符的作用是执行一个表达式，然后不返回任何值，或者说返回undefined。

```javascript
void 0 // undefined
void(0) // undefined
```

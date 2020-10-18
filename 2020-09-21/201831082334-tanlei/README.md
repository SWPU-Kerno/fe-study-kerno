# 921

## 算法与数据结构/ES6/拓展深广度

### 1. 算法与数据结构

> 题目
统计一篇英文文章中出现次数最多的N个单词(假设单词与单词之间的分隔符都为空格)

```js
function solve(article,n){

}
// 举例解释

solve('abc ab abc abc ab a b aa',2) // [abc,ab] 
// abc 3次
// ab  2次
// a   1次
// b   1次
// aa  1次
// 所以次数 最多的2个单词 是 abc ab   

// 解：
function solve(article, n) {
    // 先分割成数组
    let words = article.split(' ')
    let result = {}
    // 将每一个单词放在合适的位置
    for (let i=0; i<words.length; i++) {
        if (!result[words[i]]) {
            result[words[i]] = 1
        } else {
            result[words[i]]++
        }
    }
    // 转换成数组方便排序
    let resultArr = []
    for (let key in result) {
        resultArr.push({'key': key, 'val': result[key]})
    }
    
    resultArr.sort((a, b) => b.val - a.val)
    // 转换成要求输出的形式
    return resultArr.slice(0, n).map(a=>a.key)
}
```
### 时间空间复杂度分析
<pre>
设数据规模为给定单词的个数n
时间复杂度分析：两个for 循环的次数都为n ，并且是同级循环，因此时间复杂度为O(n)
空间复杂度分析：分析使用了words、 result、resultArr, 长度最大为n。因此空间复杂度为O(n)
</pre>
### 2. ES6

#### 相关问题
1. 说一下闭包有什么缺点？如何避免
<pre>
答：闭包会将引用到的外部变量都保存在内存中，滥用闭包会造成网页性能问题。应在使用完变量后及时释放
</pre>

2. 什么是内存泄露，有什么危害
<pre>
答：不需要使用的变量未及时删除驻留在内存中，使得可用内存变少。会导致网页性能降低。
</pre>
3. 简单说一下浏览器中的js垃圾回收机制是怎么样的
<pre>
答：通过引用计数来确定一个变量是否能够被使用到。遍历所有的变量能够引用到的变量，分别计数，再将循环引用的计数减掉，将计数为0的变量释放。
</pre>
4. 模板字符串有哪些特(优)点
<pre>
a. 可以在字符串中使用变量
b. 可以使用多行字符串
c. 可以在字符串中执行函数
d. 可以使用标签模版
</pre>
5. 实现一个函数,实现模板字符串的填充，期望对象中不含有的属性不处理
${ xxx } 括号中可能有多个空格隔开属性名
```js
function templateStr(str,obj){

}
// 期望结果

const a = {name:'xiaoming'}
const b = {name:'xm',age:18}
templateStr('abcd${name}dsds${age}',a) // abcdxiaomingdsds${age}
templateStr('abcd${  name   }dsds',a) // abcdxiaomingdsds
templateStr('abcd${name}dsds${age}',b) // abcdxmdsds18

// 解：
function templateStr(str,obj){
    let reg =  /\${\s*(.+?)\s*}/g
    // 将obj通过默认参数的方式传入，因为前四个参数都会被覆盖，所以要在e获取
    return str.replace(reg, (a, b, c, d, e=obj)=>e[b]===undefined?a:e[b])
    // 0.0 还有没得其他在回调函数中使用外部变量的方法呢
}
```

### 3.笔记
<pre>
a. 字符可以通过Unicode码点表示，形如"\uxxxx"，当要表示的字符超过码点范围\u0000~\uFFFF，需要使用双字节的形式表示，或者使用大括号表示法\u{xxxx}
b. 字符串可以通过 for ... of 语句进行遍历
c. 字符串可以展开，[..."1234"]  //["1", "2", "3", "4"]
d. 对于视觉和语义上都等价但编码不等价的字符，在比较相等时返回false，可以通过字符串实例方法normalize()统一为同样的形式
c. ES2019 改变了JSON.stringify()的行为。如果遇到0xD800到0xDFFF之间的单个码点，或者不存在的配对形式，它会返回转义字符串，留给应用自己决定下一步的处理。
</pre>
<pre>
a. repeat()：将原字符串重复n次
b. padStart(), padEnd(): 字符串补全长度
</pre>
```js
// 模板字符串
const tmpl = addrs => `
  <table>
  ${addrs.map(addr => `
    <tr><td>${addr.first}</td></tr>
    <tr><td>${addr.last}</td></tr>
  `).join('')}
  </table>
`;

const data = [
    { first: '<Jane>', last: 'Bond' },
    { first: 'Lars', last: '<Croft>' },
];

console.log(tmpl(data));
// <table>
//
//   <tr><td><Jane></td></tr>
//   <tr><td>Bond</td></tr>
//
//   <tr><td>Lars</td></tr>
//   <tr><td><Croft></td></tr>
//
// </table>
```

```js
// 将如下模版
let template = `
<ul>
  <% for(let i=0; i < data.supplies.length; i++) { %>
    <li><%= data.supplies[i] %></li>
  <% } %>
</ul>
`;

// 转换成js
echo('<ul>');
for(let i=0; i < data.supplies.length; i++) {
  echo('<li>');
  echo(data.supplies[i]);
  echo('</li>');
};
echo('</ul>');

// 再执行生成
//   <ul>
//     <li>broom</li>
//     <li>mop</li>
//     <li>cleaner</li>
//   </ul>



// 模版编译
function compile(template){
  const evalExpr = /<%=(.+?)%>/g;
  const expr = /<%([\s\S]+?)%>/g;

  template = template
    .replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`')
    .replace(expr, '`); \n $1 \n  echo(`');

  template = 'echo(`' + template + '`);';

  let script =
  `(function parse(data){
    let output = "";

    function echo(html){
      output += html;
    }

    ${ template }

    return output;
  })`;

  return script;
}
```
```js
// a. 标签模板
alert`hello`
// 等同于
alert(['hello'])

// b. 标签模板包含变量时
let a = 5;
let b = 10;

tag`Hello ${ a + b } world ${ a * b }`;
// 等同于
tag(['Hello ', ' world ', ''], 15, 50);
```
```js
// 将各个参数按照原来的位置拼合回去。
let total = 30;
let msg = passthru`The total is ${total} (${total*1.05} with tax)`;

function passthru(literals) {
  let result = '';
  let i = 0;

  while (i < literals.length) {
    // 这里通过i++，刚好交错的添加
    result += literals[i++];
    if (i < arguments.length) {
      result += arguments[i];
    }
  }

  return result;
}

msg // "The total is 30 (31.5 with tax)"

// rest参数的写法，更容易理解一点
function passthru(literals, ...values) {
  let output = "";
  let index;
  for (index = 0; index < values.length; index++) {
    output += literals[index] + values[index];
  }

  output += literals[index]
  return output;
}
```

```js
// 过滤 HTML 字符串，防止用户输入恶意内容
let message =
  SaferHTML`<p>${sender} has sent you a message.</p>`;

function SaferHTML(templateData) {
  let s = templateData[0];
  for (let i = 1; i < arguments.length; i++) {
    let arg = String(arguments[i]);

    // Escape special characters in the substitution.
    s += arg.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

    // Don't escape special characters in the template.
    s += templateData[i];
  }
  return s;
}
```
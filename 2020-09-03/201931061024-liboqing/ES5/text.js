// var type = function (o){
//   var s = Object.prototype.toString.call(o);
//   return s.match(/\[object (.*?)\]/)[1].toLowerCase();
// };

// ['Null',
//  'Undefined',
//  'Object',
//  'Array',
//  'String',
//  'Number',
//  'Boolean',
//  'Function',
//  'RegExp'
// ].forEach(function (t) {
//   type['is' + t] = function (o) {
//     return type(o) === t.toLowerCase();
//   };
// });

// var str = type(null);
// console.log(str);

// var error = new Error("出现错误了！");
// console.log(error);

// new SyntaxError('有语法错误错误')


// var x = -1;
// if (x <= 0) {
//   throw new Error('x 必须为正数');
// }

// function UserError(message) {
//   this.message = message || '默认信息';
//   this.name = 'UserError';
// }
// throw new UserError('出错了！');

// try {
//   throw new Error('出错了!');
// } catch (e) {
//   console.log(e.name + "--- " + e.message);
//   console.log(e.stack);
// }

// function idle(x) {
//   try {
//     console.log(x);
//     return 'result';
//   } finally {
//     console.log('FINALLY');
//   }
// }

// idle('hello')


// if ([]) console.log(1);
// if ({}) console.log(2);
// if ([] == false) console.log(3);
// if ({} == false) console.log(4);
// if ([] == ![]) console.log(5);
// if ({} == !{}) console.log(6);
// if ('' == false) console.log(7);
// if (false == 0) console.log(8);
// if (1 == true) console.log(9);
// if ('' == 0) console.log(10);
// if (NaN == NaN) console.log(11);
// if ([] == !true) console.log(12);
// if ([] == false) console.log(13);
// if ([] == 0) console.log(14);
// if (+0 == -0) console.log(15);
// if (NaN == false) console.log(16);

// var val = 1;

// Object.defineProperty(window,'a', {

//   get: function() {

//     return val++;

//   }

// });

// if (a == 1 && a == 2 && a == 3) {

//   console.log('yay');

// }

// 日期格式转换
// function convertDate(date) {

//   var year = date.getFullYear();
//   var month = date.getMonth() + 1;
//   var theDate = date.getDate();
//   var hour = date.getHours();
//   var minute = date.getMinutes();
//   var second = date.getSeconds();

//   if ( month < 10 )     month = '0' + month;
//   if ( theDate < 10 )   theDate = '0' + theDate;
//   if ( hour < 10 )      hour = '0' + hour;
//   if ( minute < 10 )    minute = '0' + minute;
//   if ( second < 10 )    second = '0' + second;

// return year +"-"+ month +"-" + theDate + " "+ hour +":"+ minute +":"+ second;
             
// }

// var strDate = convertDate( new Date() );
// console.log(strDate);

//匹配手机号
function isMobilePhone(phone) {
  var reg = /1\d{10}/;
  return reg.test(phone);
}
console.log(isMobilePhone(123456789))  // false
console.log(isMobilePhone(12345678900)) // true

//匹配邮箱
function isEmail(emailStr) {
  var reg = /(^\w+([-+.]\w+)*)@(\w+([-+.]\w+)*).(\w+$)/;
  return reg.test(emailStr);
}
console.log(isEmail('1796460693@qq.com')); //true
console.log(isEmail('li-bo_qing@163.com'));  //true
console.log(isEmail('you.are@super_vip.cn'));  //true


// url 切割法
function getUrlParams(url){
  if(!url) return null;  // 遍历ul的时候，第一次会得到一个空值，不检测就会报错
  var str = url.split('?')[1];
  var result = {};
  if(!str) return null;  // 检测是否为空
  var temp = str.split('&');
  temp.forEach(function(item){ 
    var temp2 = item.split('=');
    result[temp2[0]] = temp2[1];
  })
  return result;
}

  
  console.log(getUrlParams('https://a.b.com/path#title')); // {}
  console.log(getUrlParams('https://a.b.com/path?id=2')); // {id:2}
  console.log(getUrlParams('https://a.b.com/path?id=2&name=abc')); // {id:'2',name='abc'}
  console.log(getUrlParams('https://a.b.com/path?')); // {}
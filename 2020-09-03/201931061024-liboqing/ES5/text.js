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

try {
  throw new Error('出错了!');
} catch (e) {
  console.log(e.name + "--- " + e.message);
  console.log(e.stack);
}

// function idle(x) {
//   try {
//     console.log(x);
//     return 'result';
//   } finally {
//     console.log('FINALLY');
//   }
// }

// idle('hello')
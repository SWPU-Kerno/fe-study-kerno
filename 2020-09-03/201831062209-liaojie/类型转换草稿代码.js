
/*一下为学习过程中的草稿代码*/
//
// let obj = {a:1};
// /*模拟String()方法的调用过程*/
// console.log(String(obj)); //打印 [object object];
//
// // 1.先调用对象自身的toString方法。
// console.log(obj.toString()); //打印[object object];
//
// // 2.再调用valueOf
//
// console.log(obj.toString().valueOf()); //打印 [object object];
// if ([]) console.log(1);
// if ({}) console.log(2);
// if ([] == false) console.log(3);
// // console.log(Number([]));//打印0
// if ({} == false) console.log(4);
// console.log(Number({}));
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
// if (+0 == -0) console.log(15);//+0 == -0 这个是规定
//
// console.log(+0);
// console.log(-0);
// console.log(Number(+0));
// console.log(Number(-0));
// console.log(+0 == -0);
//
// if (NaN == false) console.log(16);

// console.log(NaN === NaN); //打印false


// console.log({ } + 1);
// console.log(1 + { });
// console.log( typeof (1 + []));
// console.log([1,3,4] + '0');
// console.log(1 + 0);
// console.log(1 + '0');
// console.log( typeof (![] + []));
// console.log(1 - true);
// console.log(typeof (1 - true))
// console.log('0' - 0);
// console.log(typeof ('0' - 0))
// console.log(Number('0'));
// console.log({ } -[])
// console.log([]-{ });
// console.log(false - []);
// console.log(Number([]));
// console.log(Number({ }));

// let a = {
//     i:1,
//     valueOf:()=>{
//         return a.i++;
//     }
// }
// // a.join = a.shift;
// // console.log(Number(a));
//
// if(a == 1 && a == 2){
//     console.log("yes");
// }

console.log({} + 1);

console.log({} - []);
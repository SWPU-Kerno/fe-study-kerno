
let telephone = /^1\d{10}$/;

let tel = '19981465000'

let Email = /^[A-Za-z0-9._%-]+@([A-Za-z0-9-]+\.)+[A-Za-z]{2,4}$/;

let mail = '2632236030@qq.com';

console.log(telephone.test(tel));
console.log(Email.test(mail));





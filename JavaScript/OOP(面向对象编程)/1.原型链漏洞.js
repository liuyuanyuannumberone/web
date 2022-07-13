/**
 * 原型链污染
 */

let a = { name: 'lyy', age: 12 };
a.__proto__.role = 'gao';
let b = {};
console.log(b.role); //gao

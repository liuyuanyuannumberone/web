/*

作用域链：变量的使用 从里向外,层层搜索，搜索到了,直接使用;

var 函数的内部（声明在函数内）或者全局（声明在函数外）。
let 块级作用域
const 块级作用域

*/

var a = 5;
if (a === 5) {
    let a = 4; // if 块级作用域
    console.log(a);  // 4
}
console.log(a); // 5

const b = 5;
console.log(b);
var aaa=1;
delete 1;
console.log(aaa);

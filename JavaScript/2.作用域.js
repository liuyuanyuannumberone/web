//var 函数的内部（声明在函数内）或者全局（声明在函数外）。
//let|const 块级作用域

var a = 5;
if (a === 5) {
    let a = 4; // if 块级作用域
    console.log(a); // 4
}

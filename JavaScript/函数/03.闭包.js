/**
 * 问题：函数外部无法读取函数内部变量
 * 思路： 函数内部的函数可以读取父级函数的变量，将闭包return出去，供外部读取父级函数内的变量
 * 作用：在函数外部可以读取函数内部的变量；让这些变量的值始终保持在内存中
 * 可以简单理解为闭包就是定义在一个函数内部的函数
 * 闭包存在的原因：内部的函数存在外部作用域的引用就会导致闭包
 * 弊端：内存消耗很大,还容易造成内存泄露
 */
//问题：
function f1() {
    var n = 999;
}
// console.log(n) //ReferenceError: n is not defined


// 闭包的结构1  return 回一个函数
function f2(params) {
    return function f3() {};
}

// 闭包结构2  自执行函数和闭包结合使用的情况
let single = (function () {
    let name = '图图';
    let age = 20;
    return {
        getName: function () {
            return name;
        },
        getAge: function () {
            return age;
        },
    };
})();
// console.log(single.getName(), single.getAge()); //图图 20

/**
 * 变量提升：
 * JavaScript 引擎的工作方式是，先解析代码，获取所有被声明的变量，然后再一行一行地运行，
 * 这造成的结果，就是所有的变量的声明语句，都会被提升到代码的头部，这就叫做变量提升。
 */

//后面再声明q无效，但是 var q=2有效；
var q = 1;
var q;
console.log(q); //1


// 1.变量声明提前
{
    console.log(b); //undefined
    var b = 2;
    // 相当于  var b     console.log(b)   b=2

    var x = 1;
    function f() {
        console.log(11, x); //undefined
        var x = 2;
    }
    f();

    //相当于：
    // var x = 1;
    // function f() {
    //     var x;
    //     console.log(x);
    //     x = 2;
    // }
    // f();
}
// 2.函数声明提前
{
    x1();
    function x1() {
        console.log('x1');
    }
    // 等价于
    //  function x1() {
    //    console.log(1);
    //  }
    //  x1();

    //注意这个会报错，这里的x其实就是一个普通变量，只是它的值是一个函数
    // f2();
    // var f2 = function () {};
    //等价于
    // var f2;
    // f2();
    // f2 = function () {};
}

// 块级作用域使用let和const声明，let申明变量，const申明常量
// 作用域链



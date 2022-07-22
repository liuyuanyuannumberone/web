/*
  变量提升：
  JavaScript引擎的工作方式是，先解析代码，获取所有被声明的变量，然后再一行一行地运行，
  这造成的结果，就是所有的变量的声明语句，都会被提升到代码的头部，这就叫做变量提升。

  变量声明提前
     1.var声明的变量在函数内部，变量提升到函数顶部;否则为全局变量; 
     2.【块级作用域不发生变量提升】(tmp ='abc';let tmp;一定出错)
  函数声明提前
     1.函数声明提前;表达式的函数报错(归为变量提升的方式);

 */

     
{
    //console.log(b); //undefined
    var b = 2;
    // 相当于 var b  console.log(b)   b=2

    //后面再声明q无效，但是 var q=2有效；
    var q = 1;
    var q;
    // console.log(q); //1

    var a = 5;
    function f() {
        console.log(a); //undefined
        var a = 1;
    }
    // f();
    //相当于 function f() {var a;console.log(a);a = 1;}

    let tmp = 123;
    if (true) {
        tmp = 'abc'; // ReferenceError: Cannot access 'tmp' before initialization
        // let tmp;
    }
}

{
    // x1();
    function x1() {
        console.log('x1');
    }

    /* 会报错，这里的f2其实就是一个普通变量
    f2();var f2 = function () {};等价于var f2;f2();f2 = function () {};
    */
}

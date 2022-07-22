/**
 * 1. arguments对象:arguments对象包含了函数运行时的所有参数
 *    由于JavaScript允许函数有不定数目的参数，所以需要一种机制，可以在函数体内部读取所有参数
 * 2. ES6引入rest运算符（…），用于获取函数的多余参数，这样就不需要使用arguments;
 */
{
    function test(x = 2, y = 1, z = 2, d = x + y + z) {
        console.log(arguments[0]);
    }
    test(100, 200, 400);
}
//函数传参
{
    function add(base = 0, x, y, z) {
        console.log(base, x, y, z); //0 2 5 3
    }
    add(undefined, ...[2, 5, 3]); 
}

{
    function minus(...values) {
        console.log(values); //[1,2,3]
    }
    minus(...[1, 2, 3]);
}

Math.max(...[1, 2, 3]);

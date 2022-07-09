/**
 * 1. arguments对象:arguments对象包含了函数运行时的所有参数
 * 由于JavaScript允许函数有不定数目的参数，所以需要一种机制，可以在函数体内部读取所有参数
 *
 */
{
    function test(x = 2, y = 1, z = 2, d = x + y + z) {
        console.log(arguments[0]);
    }
    test(100, 200, 400);
}
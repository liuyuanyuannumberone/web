function fib(n) {   //输出前n个斐波那契数列
    if (n === 0) return;
    console.count("调用次数");
    // console.trace(); //显示函数调用轨迹
    // console.log(arguments);
    var a = arguments[1] || 1;
    var b = arguments[2] || 1;
    // console.log("fib=" + a);
    [a, b] = [b, a + b];
    fib(--n, a, b);    //1 1  2 3 5 8 13;
}

console.time(); //计时开始
fib(6);
console.timeEnd(); //结束并输出时长；

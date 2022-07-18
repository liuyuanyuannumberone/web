/**
 定义Generator，需要使用function*,他不是函数。

 执行Hello()之后，Hello内部的代码不会立即执行，而是处于一个暂停状态,
 每次h.next()都会打破暂停状态去执行，直到遇到下一个yield或者return,遇到return执行结束。
 g.next(参数')是将参数传递给上一个已经执行完了的yield前面的变量
 
*/
{
    function* Hello() {
        const a = yield 100;

        console.log('a', a);
        const b = yield 200;

        console.log('b', b);
        const c = yield 300;

        console.log('c', c);
        return 200;
    }

    const h = Hello();

    // console.log(h.next());   //{ value: 100, done: false }
    // console.log(h.next('aaa')); // a aaa  { value: 200, done: false }
    // console.log(h.next('bbb'));  //b bbb  { value: 300, done: false }
    // console.log(h.next('ccc')); //c ccc  { value: 200, done: true }
    // console.log(h.next()); //{ value: undefined, done: true }

    for (const i of h) {
        // console.log(i);   //return 200 没有返回
    }
}

{
    function* G1() {
        yield 'a';
        yield* G2();
        yield 'b';
    }
    function* G2() {
        yield 'x';
        yield 'y';
    }
    for (let item of G1()) {
        console.log(item); //a x y b
    }
}

{
    //斐波那契数列 1 2 3 5 8 13
    function* fibonacci() {
        let [prev, curr] = [0, 1];
        for (;;) {
            [prev, curr] = [curr, prev + curr];
            yield curr; // // 将中间值通过yield返回
        }
    }
    let fib = fibonacci();
    for (let n of fib) {
        if (n > 100) break;
        console.log(n);
    }
}

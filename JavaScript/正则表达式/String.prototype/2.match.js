//非分组
{
    let s = '_x_x';
    let r1 = /x/;
    //只会匹配第一个，不存在循环。
    let a = s.match(r1);
    let b = s.match(r1);
    console.log(a); // [ 'x', index: 1, input: '_x_x', groups: undefined ]
    console.log(b); //[ 'x', index: 1, input: '_x_x', groups: undefined ]

    let r3 = /x/g;
    console.log(s.match(r3)); //会一次性返回所有匹配成功的结果 [ 'x', 'x' ]
}

//分组   不用g只做了匹配第一个的分组; 用g不会捕获分组的内容
{
    console.log('abcabc'.match(/(.)b(.)/)); //[ 'abc', 'a', 'c', index: 0, input: 'abcabc', groups: undefined ]
    // g
    console.log('abcabc'.match(/(.)b(.)/g)); //[ 'abc', 'abc' ]
    //解决办法：
    // let reg = /(.)b(.)/g;
    // let res;
    // while ((res = reg.exec('abcabc'))) {
    //     console.log(res);
    //     //[ 'abc', 'a', 'c', index: 0, input: 'abcabc', groups: undefined ]
    //     //[ 'abc', 'a', 'c', index: 3, input: 'abcabc', groups: undefined ]
    // }

    //新的解决办法: matchAll 返回Iterator对象
    let [str1, regex1] = ['abcabc', /(.)b(.)/g];
    let it = str1.matchAll(Array.from(regex1));

    // console.log(...it，Array.from(it));
    for (const match of it) {
        // console.log(match);
    }
}

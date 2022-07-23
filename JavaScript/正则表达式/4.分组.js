/**
 以小括号来()表示分组
   捕获性分组：()会把每个分组里匹配的值保存起来。非捕获性分组：(?:) 只是不保存。

 先行断言（前瞻）
    x(?=y)表示前面要有什么 【x只有在y前面才匹配】
    x(?!y)表示前面不能有什么

 后发断言（后顾）【从右向左执行，注意括号的贪婪模式】
    (?<=y)x 表示后面要有什么 【x只有在y后面才匹配】(先匹配x,然后再回到左边，匹配y的部分)                           
    (?<!y)x 表示后面不能有什么
 */

//捕获性分组
{
    // console.log(/(.)b(.)/.exec('abctestabc'));
    //[ 'abc', 'a', 'c', index: 0, input: 'abctestabc', groups: undefined ]
}

//断言
{
    //只匹配%前面的数字
    //  console.log(/\d+(?=%)/.exec('100% of US presidents have been male')); // ["100"]
    //数字只有在$后面才匹配
    //   console.log(/(?<=\$)\d+/.exec('Benjamin Franklin is on the $100 bill'));
    //['100',index: 29,input: 'Benjamin Franklin is on the $100 bill',groups: undefined]

    console.log(/(?<=2)5/.exec(23525)); //[ '5', index: 4, input: '23525', groups: undefined ]
    //后行断言从右向左执行，第二个括号贪婪模式
    console.log(/(?<=(\d+)(\d+))3$/.exec('1053')); //[ '3', '1', '05', index: 3, input: '1053', groups: undefined ]
}

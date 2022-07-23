/**
 以小括号来()表示分组
   捕获性分组：()会把每个分组里匹配的值保存起来。非捕获性分组：(?:) 只是不保存。

 先行断言（前瞻）
    (?=pattern)表示前面要有什么
    (?!pattern)表示前面不能有什么

 后发断言（后顾）
    (?<=pattern) 表示后面要有什么
    (?<!pattern) 表示后面不能有什么
 */

//捕获性分组
{
    // \n引用括号匹配的内容，n是自然数，表示对应顺序的括号
    console.log(/(.)b(.)\1b\2/.test('abctestabc')); //false
    console.log(/y(..)(.)\2\1/.test('yabccab')); // true
    console.log(/y((..)\2)\1/.test('yabababab')); // true //捕获嵌套
}

//非捕获性分组
{
    
}

//断言
{
    console.log(/\d+(?!\.)/.exec('3.14')); //[ '14', index: 2, input: '3.14', groups: undefined ]
}

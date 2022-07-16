/**
 * 分组模式以小括号来()表示分组
 * 捕获性分组：() 捕获性分组工作模式()会把每个分组里匹配的值保存起来
 * 非捕获性分组：(?:) 只是不返回该组匹配的内容，但是用到了这个规则
   断言:   只是不返回该组匹配的内容，但是用到了这个规则
 *   前瞻=先行断言
 *   (?=)  (?=表达式)表示前面要有什么
 *   (?!)  (?!=表达式)表示前面不能有什么
 *   后顾 = 后发断言
 *   (?<=)  (?<=表达式) 表示后面要有什么
 *   (?<!)  (?<!表达式) 表示后面不能有什么
 */

//捕获性分组
{
    console.log(/(fred)+/.test('fredfred')); // true

    // \n引用括号匹配的内容，n是自然数，表示对应顺序的括号
    console.log(/(.)b(.)\1b\2/.test('abctestabc')); //false
    console.log(/(.)b(.)\1b\2/.test('abcabc')); //true
    console.log(/y(..)(.)\2\1/.test('yabccab')); // true
    //括号嵌套 \1指向外层括号，\2指向内层括号
    console.log(/y((..)\2)\1/.test('yabababab')); // true
    console.log(/y((..)\2)\1/.test('yabababac')); // false
}

//非捕获性分组
{
    let url = /(http|ftp):\/\/([^/\r\n]+)(\/[^\r\n]*)?/;
    let url2 = /(?:http|ftp):\/\/([^/\r\n]+)(\/[^\r\n]*)?/;
    console.log(url.exec('http://google.com/ff'));
    //['http://google.com/ff','http','google.com','/ff']
    console.log(url2.exec('http://google.com/ff'));
    //[ 'http://google.com/ff','google.com','/ff']
}

//断言
{
    console.log(/\d+(?!\.)/.exec('3.14')); //[ '14', index: 2, input: '3.14', groups: undefined ]
}

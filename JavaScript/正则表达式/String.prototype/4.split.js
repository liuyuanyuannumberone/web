/**
 * split 返回一个分割后的组成的数组。如果正则表达式带有括号，则括号匹配的部分也会作为数组成员返回
   str.split(/reg/, [limit])  第二个参数是返回数组的最大成员数
 */

console.log('a,  b,c, d'.split(',')); //[ 'a', '  b', 'c', ' d' ]
// 正则分隔，去除多余的空格
console.log('a,  b,c, d'.split(/, */)); // [ 'a', 'b', 'c', 'd' ]
console.log('a,  b,c, d'.split(/, */, 2)); //[ 'a', 'b' ]


console.log('aaa*****a*'.split(/a*/)); // ["", "*", "*", "*", "*", "*", "*"]

//如果正则表达式带有括号，则括号匹配的部分也会作为数组成员返回。
console.log('aaa*a*'.split(/(a*)/));// [ '', 'aaa', '*', 'a', '*' ]
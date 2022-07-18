//不改变原字符 [)    "java"=> 0 1 2 3  -4 -3 -2 -1  
console.log('JavaScript'.slice(1, 4)); // ava
console.log(1,'JavaScript'.slice(-4, -1)); // rip   
//不改变原字符 [ 截取字符串长度
console.log('JavaScript'.substr(1, 4)); // avaS

console.log('hello'.includes('o')); // true
console.log('hello'.startsWith('H'), 'hello'.endsWith('o'));  //false true

//引入了字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。
//padStart()用于头部补全，padEnd()用于尾部补全。
let str='3';
console.log(str.padStart(5, '0'));//00003
console.log(str.padEnd(5, '0'));// 30000
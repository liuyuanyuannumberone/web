let str = 'abc';
//\uxxxx表示一个字符,加上{}表示码点大于0xFFFF的字符
let str1 = '\u0041'; // A   长度1
let str2 = '\uD842\uDFB7'; //𠮷  长度2
let str3 = '\u{20BB7}'; //𠮷 长度2    0x20bb7=>0xd842 0xdfb7(55362 57271)

console.log(str1); 
console.log(str2);
console.log(str3);
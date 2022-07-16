/**
 * 静态方法
     1.String.fromCharCode() 参数Unicode码点，返回这些组成的字符串。不支持码点大于0xFFFF的字符。
       可以拆分为多个字节表示  𠮷:0x20bb7=>0xd842 0xdfb7
     
 */
console.log(String.fromCharCode()); // ""
console.log(String.fromCharCode(97)); // "a"
console.log(String.fromCharCode(104, 101, 108, 108, 111)); //hello


console.log(String.fromCharCode(0x20bb7)); //乱码
console.log(String.fromCharCode(0xd842, 0xdfb7)); //正常



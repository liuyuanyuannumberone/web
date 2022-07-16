/**
 * 静态方法
     1.String.fromCharCode() 参数是一个或多个Unicode码点，返回这些组成的字符串。
      注意，该方法不支持 Unicode 码点大于0xFFFF的字符，即传入的参数不能大于0xFFFF（即十进制的65535)
 */
console.log(String.fromCharCode()); // ""
console.log(String.fromCharCode(97)); // "a"
console.log(String.fromCharCode(104, 101, 108, 108, 111)); //hello



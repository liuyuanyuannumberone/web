/** 
 js的内置函数 encodeURI(decodeURI())  encodeURIComponent(ecodeURIComponent())
  1.编码范围：
     encodeURI 不编码字符有82个：! # $ & ' ( ) * + , - . / : ; = ? @ _ ~ 0-9 a-z A-Z
     encodeURIComponent不编码字符有71个：! ' ( ) * - . _ ~ 0-9 a-z A-Z
  2.  encodeURI  适用于编码整个URL，因为https:// 部分的斜杠不会被编码，还能正常使用；
      encodeURIComponent 适用于编码URL中的参数，此时需要对于部分的参数进行更进一步的编码

*/
var url = 'http://io/2018/谈a测/';
// http://io/2018/%E8%B0%88a%E6%B5%8B/
console.log(encodeURI(url));
// http%3A%2F%2Fio%2F2018%2F%E8%B0%88a%E6%B5%8B%2F
console.log(encodeURIComponent(url));

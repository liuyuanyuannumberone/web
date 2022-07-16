/**
 * 
 
  
 1.String.prototype.charCodeAt(字符) 返回十进制。码点大于0xFFFF，使用charCodeAt(i),charCodeAt(i+1); 
 2.String.fromCharCode(数字1,数字2....) 返回拼接好的字符串。码点大于0xFFFF的字符，可以拆分为多个字节合起来表示;
 
   //3和4完美解决1和2的问题
 3.String.fromCodePoint(0x20BB7)    
 4.String.prototype.codePointAt('𠮷'); 

 5.String.prototype.charAt()返回指定位置的字符  [];                        
     
 */
let m = 'hello';
let str = '𠮷'; // 0x20bb7=>0xd842 0xdfb7(55362 57271)
{
    console.log(str.codePointAt(0)); // 134071
    console.log(String.fromCodePoint(str.codePointAt(0))); //𠮷

    console.log(str.charCodeAt(0), str.charCodeAt(1)); //55362 57271
    console.log(String.fromCharCode(str.charCodeAt(0), str.charCodeAt(1))); //𠮷

    console.log(m.charAt(1), m[1]); //e e
}

{
    //不改变原字符 [)
    console.log('JavaScript'.slice(1, 4)); // ava
    //不改变原字符 [ 截取字符串长度
    console.log('JavaScript'.substr(1, 4)); // avaS
}

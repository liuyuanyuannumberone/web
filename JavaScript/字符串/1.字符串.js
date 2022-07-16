/**
 * 静态方法
     1.String.fromCharCode() 参数0-0xFFFF之间的数字  返回这些组成的字符串。
     不支持码点大于0xFFFF的字符，可以拆分为多个字节表示;
  实例方法   
     1.String.prototype.charCodeAt() 返回字符串指定位置的Unicode码点(十进制表示) 只返回两个字节的字符的码点
               如果遇到码点大于0xFFFF，连续使用charCodeAt(i),charCodeAt(i+1); 
     2.String.prototype.charAt() 返回指定位置的字符  [];                        
     
 */
{    
    console.log(String.fromCharCode(0x0041));//A
    console.log(String.fromCharCode(104, 101, 108, 108, 111)); //hello
    let str = '𠮷';// 0x20bb7=>0xd842 0xdfb7(55362 57271)
    console.log(str.charCodeAt(0), str.charCodeAt(1)); //55362 57271 =>\u0d842 \u0dfb7
    console.log(String.fromCharCode(str.charCodeAt(0), str.charCodeAt(1))); //𠮷
}

{
    let str = 'hello';
    console.log(str.charAt(1), str[1]); //e
}

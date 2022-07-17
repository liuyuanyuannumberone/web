// str.charCodeAt(5) 返回十进制。码点大于0xFFFF，使用charCodeAt(i),charCodeAt(i+1);
// String.fromCharCode(数字1,数字2....) 返回拼接好的字符串。码点大于0xFFFF的字符，可以拆分为多个字节合起来表示;
// console.log(str.charCodeAt(0), str.charCodeAt(1)); // 55362 57271
// console.log(String.fromCharCode(str.charCodeAt(0), str.charCodeAt(1))); //𠮷

/**
 *  
 1.str.charAt(num) 返回指定位置的字符
 2.str.codePointAt();        返回十进制数字
 3.String.fromCodePoint(num1,num2,...)    返回拼接完成后的字符 

*/

let m = 'hello';
let str = '𠮷';
let str1 = 'a𠮷c';
console.log(m.charAt(1), m[1]); //e e
console.log(str.codePointAt(0), String.fromCodePoint(0x20bb7)); // 134071 𠮷

// 遍历  for...of  会识别4个字节的字符
{
    for (let item of str1) {
        console.log(item.codePointAt(0));
    }
    [...str1].forEach(ch => console.log(ch.codePointAt(0)));
}

//计算字符串长度
String.prototype.computeStrLength = function () {
    if (!this) return 0;
    let strLength = 0;
    for (let item of this) {
        if (item.codePointAt(0) > 0xffff) {
            strLength += 2;
        } else {
            strLength += 1;
        }
    }
    return strLength;
};

console.log(str1.computeStrLength());

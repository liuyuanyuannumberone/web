/**
   正则表达式中:g 表示的是全局模式匹配
   正则表达式中:i 表示的是忽略大小写
 */

// su修饰符 使得.匹配任意字符
console.log(/foo.bar/.test('foo\nbar')); //false
console.log(/foo.bar/su.test('foo\nbar')); //true

// 默认情况下（即不加m修饰符时），^和$匹配字符串的开始处和结尾处
// m修饰符，使得^和$还会匹配行首和行尾，即^和$会识别换行符（\n）;
console.log(/world$/.test('hello world\n')); // false
console.log(/world$/m.test('hello world\n')); // true

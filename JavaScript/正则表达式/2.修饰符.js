/**
   修饰符
   g 表示的是全局模式匹配
   i 表示的是忽略大小写
   u 会正确处理四个字节的UTF-16编码
   y 粘连修饰符 
     y修饰符的作用与g修饰符类似，也是全局匹配。g修饰符只要位置中存在匹配就可：
          而y修饰符确保匹配必须第一个位置开始，并且下一次匹配必须从剩余的第一个位置开始。|一段一段一段
     match 必须与g修饰符联用，才能返回所有匹配

   s  dotAll模式  匹配行中止符
   m   ^和$识别行首和行尾的\n   /^hello$/m.test('\nhello\n')

   d   修饰符
 
 */
{
    //ES5 不支持四个字节的 UTF-16 编码，会将其识别为两个字符;ES6 就会识别其为一个字符
    // console.log(/^\uD83D/.test('\uD83D\uDC2A'));  //true
    // console.log(/^\uD83D/u.test('\uD83D\uDC2A'));  //false

    let s = '𠮷';
    // console.log(/^.$/.test(s)); // false
    // console.log(/^.$/u.test(s)); // true
}
{
    let s = 'aaa_aa_a';
    let r1 = /a+/g;
    let r2 = /a+/y;
    // console.log(r1.exec(s));//[ 'aaa', index: 0, input: 'aaa_aa_a', groups: undefined ]
    // console.log(r1.exec(s));//[ 'aa', index: 4, input: 'aaa_aa_a', groups: undefined ]
    // console.log(r2.exec(s))  //[ 'aaa', index: 0, input: 'aaa_aa_a', groups: undefined ]
    // console.log(r2.exec(s)) // null

    // console.log('a1a2a3'.match(/a\d/y));//[ 'a1', index: 0, input: 'a1a2a3', groups: undefined ]
    // console.log('a1a2a3'.match(/a\d/gy)); //[ 'a1', 'a2', 'a3' ]
}
{
    // console.log(/foo.bar/.test('foo\nbar')); //false
    // console.log(/foo.bar/s.test('foo\nbar')); //true
}

{
    // console.log(/world$/.test('hello world\n')); // false
    // console.log(/^hello$/m.test('\nhello\n')); // true
}

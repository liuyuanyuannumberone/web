/**
 1.创建正则表达式
     1.字面量  
     2.使用RegExp构造函数
  2.正则实例属性（只有lastIndex可写）
     reg.ignoreCase  表示是否设置了i修饰符 
     reg.global  表示是否设置了g修饰符
     reg.multiline 表示是否设置了m修饰符
     reg.lastIndex 表示下一次开始搜索的位置,只在进行连续搜索时有意义
     reg.source  返回正则表达式的字符串形式（不包括反斜杠）
  3.正则实例方法：
 ！！！！ ！！！正则表达式必须为g。否则test和exec只会匹配一个位置，进入死循环
     reg.test()  表示当前模式是否能匹配参数字符串
     reg.exec()  如果发现匹配，就返回一个数组,否则返回null。   
 */
{
    let a = /xy/;
    let b = new RegExp('xy');
}

{
    var regex = /b/g;
    var str = 'abba';
    regex.test(str); // true
    regex.test(str); // true
    regex.test(str); // false

    
    let r = /abc/g;
    let s = 'abchdshdabclkdlsabcl;';
    let res;
    while ((res = r.exec(s))) {
        console.log(res.index); // 0 8 16  匹配成功的开始位置
    }
}

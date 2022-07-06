// JavaScript 使用一个32位整数，保存数组的元素个数。
// 这意味着，数组成员最多只有 4294967295 个（2^32 - 1）个
{
    var arr = ['a', 'b', 'c'];
    arr.length = 2;
    arr; // ["a", "b"]
}
//清空数组的一个有效方法，就是将length属性设为0
{
    var arr = ['a', 'b', 'c'];

    arr.length = 0;
    arr; // []
}
{
    var a = ['a'];

    a.length = 3;
    a[1];  //undefined
}


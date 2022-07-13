//如果一个对象的所有键名都是正整数或零，并且有length属性,语法上称为类似数组的对象
//典型的类似数组的对象是函数的arguments对象，以及大多数 DOM 元素集，还有字符串

const arrayLike = {
    0: 'a',
    1: 'b',
    length: 2,
};
//遍历1
for (let i = 0; i < arrayLike.length; i++) {
    // console.log(arrayLike[i]);
}
//遍历2
{
    function print(value, index) {
        console.log(index + ' : ' + value);
    }
    Array.prototype.forEach.call(arrayLike, print);
}

{
    function test() {
        return arguments;
    }
    console.log(test(1, 2, 3));
}

/**
真正转化为数组 Array.from()的使用条件：
  1.有Iterator接口的对象，比如：Set，Map，Array;
  2.类数组对象，就是一个对象必须有length属性，没有length，转出来的就是空数组
*/
{
    const arr1 = Array.prototype.slice.call(arrayLike);
    const arr2 = Array.from(arrayLike);
    // 初始化一个长为10，值为1的数组
    const arr3 = Array.from({ length: 10 }, function () {
        return 1;
    });
    const arr4 = Array(10).fill(1);
}

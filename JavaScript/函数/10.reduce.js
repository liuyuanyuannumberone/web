/**
 reduce 用于处理数组结构的函数
 reduce方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终为一个值

语法: arr.reduce(callback,[initialValue])
callback （执行数组中每个值的函数，包含四个参数）
     previousValue （上一次调用回调返回的值，或者是提供的初始值（initialValue））
     currentValue （数组中当前被处理的元素）
     index （当前元素在数组中的索引）
     array （调用 reduce 的数组）
initialValue（作为第一次调用 callback 的第一个参数）
 
 */
{
    function add(a, b) {
        return a + b;
    }
    let count = [1, 2, 3, 4].reduce(add, 10);
    // console.log(count);
}

{
    let reducer = function (sum, totalItem) {
        sum.a += totalItem;
        return sum;
    };
    var total = [10, 120, 1000].reduce(reducer, { a: 0 });
    console.log(total); // {sum:1130}
}
//手写实现一个reduce函数
{
    function myReduce(arr, callback, initialValue) {
        for (let i = 0; i < arr.length; i++) {
            initialValue = callback(initialValue, arr[i], i, arr);
        }
        return initialValue;
    }
    let arr = [1, 2, 4];
    let fun = function (a, b, c, d) {
        return a + b;
    };
    let count = myReduce(arr, fun, 1);
    console.log(count); //8
}

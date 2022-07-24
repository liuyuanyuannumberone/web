//数组合并
{
    let arr1 = [0, 1, 2];
    let arr2 = [3, 4, 5];
    let arr3 = arr1.concat(arr2, '4');
    Array.prototype.push.apply(arr1, arr2);
    arr1.push(...arr2);
}



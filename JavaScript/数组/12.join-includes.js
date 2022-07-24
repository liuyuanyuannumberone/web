/**
    includes:
    indexOf:有两个缺点，
    一是不够语义化，它的含义是找到参数值的第一个出现位置，所以要去比较是否不等于-1，表达起来不够直观。
    二是它内部使用严格相等运算符（===）进行判断，这会导致对NaN的误判。
 */
{
    console.log([1, 2].includes(1),[1, 2].includes('1'),[NaN].includes(NaN)); //true false true
    console.log([NaN].indexOf(NaN)); // -1 没找到
}

{
    let aa = [1, 2, 3];
    str = aa.join(','); //1,2,3
}

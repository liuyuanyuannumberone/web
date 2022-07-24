/*
flat(想要拉平的层数=1) 默认为1。  Infinity:如果不管有多少层嵌套，都要转成一维数组。
扁平化数组:用于将嵌套的数组“拉平”，变成一维的数组。该方法返回一个新数组，对原数据没有影响。

flatMap:对原数组的每个成员执行一个map函数,然后对返回值组成的数组执行flat()方法。不改变原数组
                                       flatMap()只能展开一层数组。
*/
{
    let arr = [1, [4, [5]]];
    // console.log(arr.flat()); //[ 1, 4, [ 5 ] ]
    // console.log(arr.flat(2)); //[ 1, 4, 5 ]
    // console.log(arr.flat(Infinity)); //[ 1, 4, 5 ]
}

{
    //相当于 [[2, 4], [3, 6], [4, 8]].flat()
    // console.log([2, 3, 4].flatMap(x => [x, x * 2])); //[ 2, 4, 3, 6, 4, 8 ]

    // 相当于[[[2]], [[4]], [[6]], [[8]]].flat()
    console.log([1, 2, 3, 4].flatMap(x => [[x * 2]]));//[ [ 2 ], [ 4 ], [ 6 ], [ 8 ] ]


    let arr = [1, 2, 3];
    console.log(arr.map(item => item * 2)); //[ 2, 4, 6 ]
    console.log(arr.flatMap(item => item * 2)); //[ 2, 4, 6 ]
}

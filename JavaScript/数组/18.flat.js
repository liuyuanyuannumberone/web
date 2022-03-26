//扁平化数组
let arr = [1, [2, 3], [4, 5, [6, 7]], [8, 9, 10, [11, [12]]]];
console.log(arr.flat(3));

let a=[1,2,3];
console.log(a.map(item=>item*2)); //[ 2, 4, 6 ]
console.log(a.flatMap(item=>[item*2]));//[ 2, 4, 6 ]


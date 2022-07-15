/**
 * 返回一个数组
 */
let s = '_x_x';
let r1 = /x/;
let r3 = /x/g;
//console.log(s.match(r1)); //只匹配第一个 [ 'x', index: 1, input: '_x_x', groups: undefined ]
//console.log(s.match(r3)); //会一次性返回所有匹配成功的结果 [ 'x', 'x' ]

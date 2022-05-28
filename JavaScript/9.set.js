//它的成员不重复
let s = new Set();
s.add('hello').add('world').add('hello');
// s.has('hello');
// s.size
// s.delete('hello');
// s.clear();
// console.log(s.keys());// [Set Iterator] { 'hello', 'world' }
// console.log(s.values());// [Set Iterator] { 'hello', 'world' }
// console.log(s.entries());//[Set Entries] { [ 'hello', 'hello' ], [ 'world', 'world' ] }
s.forEach(item => {});
for (let item of s) {
}

/**
 * 将set变为数组: Array.from(<Set>)  [...<Set>] 
 * set去重 new Set(arr)
 */

let arr = [1, 2, 3, 4, 5,5,6, 7, 8, 9];
console.log(new Set(arr));

let arr1=[{age:1,sex:0},{age:1,sex:0},{age:2,sex:3}];
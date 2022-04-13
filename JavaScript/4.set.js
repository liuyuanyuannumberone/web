//它的成员不重复
let s = new Set();
s.add('hello').add('world').add('hello');//自动过滤重复数据
s.has('hello'); //有返回值true  没有返回false;
console.log(s.size);  // 2 有几个数据
console.log(s.keys());// [Set Iterator] { 'hello', 'world' }
console.log(s.values());// [Set Iterator] { 'hello', 'world' }
console.log(s.entries());//[Set Entries] { [ 'hello', 'hello' ], [ 'world', 'world' ] }
s.forEach(item => console.log(item)); //遍历
for (let item of s) console.log(item);
s.delete('hello');//删除数据
s.clear(); //清空




/*
* set去重
*
* */
{
    let arr = [1, 2, 3, 4, 1, 3, 4, 4, 3, 4, 6, 1, 1];
    let str = "asasasaddsdsddsdsfdggfgf";
    console.log([...new Set(arr)]);  //[ 1, 2, 3, 4, 6 ]
    console.log([...new Set(str)]); //[ 'a', 's', 'd', 'f', 'g' ]

}


/*
* set并集，交集
*
* */

let unionSet = new Set([...[1, 2, 3, 4, 5], ...[6, 7, 8, 9, 10]]);
console.log(Array.from(unionSet));


let intersect = new Set([...new Set([1, 26, 7, 8])].filter(x =>
    new Set([6, 7, 8, 9, 10]).has(x)));
console.log(Array.from(intersect));//[7,8]

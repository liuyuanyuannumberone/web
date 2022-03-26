//对象数组互化
let obj = {
    name: '刘园园',
    age: 25,
};
console.log(Object.keys(obj));   //取出对象的键作为数组  [ 'name', 'age' ]
console.log(Object.values(obj));   //取出对象的值作为数组 [ '刘园园', 25 ]
console.log(Object.entries(obj));   //把对象的键值数组  [ [ 'name', '刘园园' ], [ 'age', 25 ] ]


let entries = [['name', '刘园园'], ['age', 25]];
console.log(Object.fromEntries(entries));//{ name: '刘园园', age: 25 }



//数组和对象互相转化
let student = {
    abc: 'lyy',
    def: "name",
    aaaa: "essff"
}

console.log(Object.fromEntries(Object.entries(student).filter(([key, val]) => key.length === 3)));
//{ abc: 'lyy', def: 'name' }

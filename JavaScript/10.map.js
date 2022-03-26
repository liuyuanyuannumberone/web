let map = new Map([['name', 'lyy'], ['age', 20]]);  //要求是entries
map.set('grade', 100); //添加
map.set('grade', 120); //重新赋值    Map { 'name' => 'lyy', 'age' => 20, 'grade' => 120 }
map.delete('grade'); //Map { 'name' => 'lyy', 'age' => 20 }
console.log(map.size);  //2
console.log(map.has('sss')); //false
console.log(map.get('name')); //lyy
console.log(map.keys()); //[Map Iterator] { 'name', 'age' }
console.log(map.values()); //[Map Iterator] { 'lyy', 20 }
console.log(map.entries()); //[Map Entries] { [ 'name', 'lyy' ], [ 'age', 20 ] }


map.forEach((value, key) => console.log(value, key));//先value，再key遍历
for (let item of map) console.log(item);  //[ 'name', 'lyy' ] [ 'age', 20 ]
for (let [key, value] of map) console.log(key, value);


map.clear();



let arr=[1,2];
arr=arr.map(item=>item*2);
console.log(arr);




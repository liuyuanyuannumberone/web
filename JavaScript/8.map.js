let map = new Map([['name', 'lyy'], ['age', 20]]);  //要求是entries
map.set('grade', 100); //添加
map.set('grade', 120); //重新赋值
map.delete('grade'); 
map.clear();
// console.log(map.size);  //2
// console.log(map.has('sss')); //false
// console.log(map.get('name')); //lyy
// console.log(map.keys()); //[Map Iterator] { 'name', 'age' }
// console.log(map.values()); //[Map Iterator] { 'lyy', 20 }
// console.log(map.entries()); //[Map Entries] { [ 'name', 'lyy' ], [ 'age', 20 ] }

map.forEach((value, key) =>{});
for (let item of map){};  
for (let [key, value] of map){} ;

let oldArr=[1,2];
let newArr=oldoldArr.map(item=>item*2);//map 不影响原来的变量




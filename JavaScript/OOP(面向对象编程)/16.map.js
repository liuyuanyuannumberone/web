let map = new Map([
    ['name', 'lyy'],
    ['age', 20],
]); //要求是entries

{
    map.set('grade', 100); //添加
    map.set('grade', 120); //重新赋值
    map.delete('grade');
    console.log(map.size, map.get('ddd')); //2
    console.log(map.keys()); //[Map Iterator] { 'name', 'age' }
    console.log(map.values()); //[Map Iterator] { 'lyy', 20 }
    console.log(map.entries()); //[Map Entries] { [ 'name', 'lyy' ], [ 'age', 20 ] }
    console.log([...map]); //[ [ 'name', 'lyy' ], [ 'age', 20 ]]
}

//map的遍历
{
    map.forEach((value, key) => {});
    for (let [key, value] of map) {
    }
}
{
    // 原数组不变
    let number = [1, 2, 3, 4];
    number.map(function (item) {
        return item + 1;
    });
}

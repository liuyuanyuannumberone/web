let map = new Map([
    ['name', 'lyy'],
    ['age', 20],
]); //entries

{
    map.set('grade', 100); //添加
    map.set('grade', 120); //赋值
    map.delete('grade');
    console.log(map.size); //2
    console.log(map.get('name')); // lyy
    console.log(map.get('ddd')); // undefined
    console.log(map.has('ddd')); // false
    // console.log(map.clear());  //清空
    console.log(map.keys()); //[Map Iterator] { 'name', 'age' }
    console.log(map.values()); //[Map Iterator] { 'lyy', 20 }
    console.log(map.entries()); //[Map Entries] { [ 'name', 'lyy' ], [ 'age', 20 ] }

    console.log([...map]); //[ [ 'name', 'lyy' ], [ 'age', 20 ]]
    console.log(Array.from(map));  //[ [ 'name', 'lyy' ], [ 'age', 20 ] ]
}

//遍历
{
    map.forEach((value, key) => {console.log(111,value,key)});

    for (let [key, value] of map) {console.log(222,value,key)};

}

{
    // 原数组不变
    let number = [1, 2, 3, 4];
    let arr = number.map(function (item) {
        return item + 1;
    });
    console.log(arr); //[ 2, 3, 4, 5 ]
}

/***
 * Map特点:
 *    1.Map的键可以是任意类型数据，就连函数都可以;Object的键只能是String或Symbol。
 *    2.Map中的元素会保持其插入时的顺序;而Object则不会;
 *    3.Map 是可迭代对象,普通的对象键值对则默认是不可迭代;
 */
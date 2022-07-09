//ES6 扩展运算符
let str = 'hello';
let arr = [1, 2, 3];
let obj = {
    name: 'lyy',
    age: 18,
    value: 10,
};

//函数传参
{
    function sum(base, ...all_var) {
        console.log(all_var); //数组
    }
    sum(1, 2, 3, 4, 5, 6, 7, 8);

    function add(x = 1, y = 2, z = 3) {
        console.log(x, y, z);
    }
    add(...arr);
    Math.max(...arr);
}

{
    let arr1 = [...str]; //字符串转数组 [ 'h', 'e', 'l', 'l', 'o' ]
    let arr2 = [...arr]; // 复制数组
    let obj1 = { ...obj }; //复制对象 深拷贝
}
{
    console.log([...arr, ...[4, 5, 6]]); // 合并数组  [ 1, 2, 3, 4, 5, 6 ]
    console.log({ ...obj, ...{ age: 19, grade: 98 } }); // 合并对象 { name: 'lyy', age: 19, grade: 98 }
    console.log({ ...obj, value: 3 }); //对象添加或者修改属性 { name: 'lyy', age: 18, value: 3 }
}

//filter 找到返回数组，否则返回空数组
{
    let obj = [
        { id: 1, name: 'lyy' },
        { id: 2, name: 'test' },
    ];
    let item = obj.filter(item => item.id === 2);
    // console.log(item);//[ { id: 2, name: 'test' } ]
}

// arr.findIndex() 找到满足的立即就返回该元素的索引，没找到返回-1，
// arr.find(callback(ele, index)); 找到满足的立即就返回,否则返回undefined;

{
    let students = [
        { id: 1, name: '张三1' },
        { id: 2, name: '张三2' },
        { id: 3, name: '张三3' },
    ];
    let item = students.find((item, index) => item.id === 1); //{ id: 1, name: '张三1' }
    let index = students.findIndex(item => item.id === 3); //2
}

/*
判断数组中是否有满足条件的元素，如果找到了这样一个值，返回true ,否则false；
在数组的some方法中，如果return true,就会立即终止这个数组的后续循环
*/
{
    let arr = [1, 2, 10];
    let flag = arr.some(ele => ele > 10); //false

    list = [{ id: 1 }, { id: 2 }];
    list.some((item, index) => {
        if (item.id === 1) {
            list.splice(index, 1);
            return true;
        }
    });
    // console.log(list);
}

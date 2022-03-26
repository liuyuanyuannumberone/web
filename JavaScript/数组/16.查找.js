//filter  找到返回有长度的数组，否则返回空数组
let obj = [{id: 1, name: 'lyy'}, {id: 2, name: 'test'}];
let item = obj.filter(item => {
    return item.id === 2
});
console.log(item);//[ { id: 2, name: 'test' } ]




// arr.findIndex(callback(ele, index))  找到满足的就返回   否则返回-1，会立即返回该元素的索引
// arr.find(callback(ele, index));     找到满足的就返回   否则返回 undefined，会立即返回这个元素的值
{

    list = [{id: 1}, {id: 2}, {id: 1}];
    let index = list.findIndex(item => {
        if (item.id === 1) {
            return true;
        }
    });
    console.log(index); //1
}
{
    let students = [
        {id: 1, name: '张三',},
        {id: 2, name: '张三',},
        {id: 3, name: '张三',},
    ];
    let item = students.find(item => {
        return item.id === 1;
    });
    console.log(item);//{ id: 1, name: '张三'}
}



/*
判断数组中是否有满足条件的元素，如 果找到了这样一个值，返回 true ,否则false；
在数组的some方法中，如果return true，就会立即终止这个数组的后续循环
*/

{
    let arr = ["12", "34", "45", "67", "76", "67", "454"];
    let flag = arr.some(ele => {
        return ele > 10;
    });
    // console.log(flag);  //true
}
{
    list = [{id: 1}, {id: 2}];
    list.some((item, index) => {
        if (item.id === 1) {
            list.splice(index, 1);
            return true;
        }
    });
    console.log(list);
}


{
    let arr=[1,2];
    console.log(arr.includes(10));  //false
}


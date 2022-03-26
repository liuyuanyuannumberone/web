//伪数组用索引存储数据，同时指定长度
// 伪数组不可以使用数组中的方法,但是可以像数组一样遍历
const obj = {
    0: 'a',
    1: 'b',
    length: 2
};
for (let i = 0; i < obj.length; i++) {
    console.log(obj[i]);
}

//真正转化为数组
// const arr = Array.prototype.slice.call(obj); // [].slice.call(obj);
const arr = Array.from(obj);

// 初始化一个长为10，值为1的数组
const arr1 = Array.from({length: 10}, function () {
    return 1
});
const arr2=Array(10).fill(1);



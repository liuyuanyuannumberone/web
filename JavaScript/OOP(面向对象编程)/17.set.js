//它的成员不重复,其他语法和map一样
let s = new Set([1, 2, 2]);
s.add('hello').add('world').add('hello');
// console.log(s);

/**
 * set去重 new Set(arr)
 * 将set变为数组: Array.from(<Set>) 或者 [...<Set>]
 */
let arr = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9];
let setArr = new Set(arr);
console.log(Array.from(setArr));
console.log([...setArr]);
//不能用 slice
console.log(Array.prototype.slice.call(setArr));  //[]


//数组的并集、交集、差集
{
    function SetArr(arr) {
        return Array.from(new Set(arr));
    }
    let arr = [1, 2, 3, 9];
    let arr1 = [7, 8, 9, 1];
    //并集
    console.log(SetArr([...arr, ...arr1]));
    //交集
    let a = arr.filter(item => {
        return new Set(arr1).has(item);
    });
    console.log(a); //[1,9]
    //差集  arr的差集
    let b = arr.filter(item => {
        return !new Set(arr1).has(item);
    });
    console.log(b); //[2,3]
}

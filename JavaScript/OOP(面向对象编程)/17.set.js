//它的成员不重复,其他语法和map一样
let s = new Set([1, 2, 2]);
s.add('hello').add('world').add('hello');

/**
 * set去重 new Set(arr)
 * 将set变为数组: Array.from(<Set>) 或者 [...<Set>]
 */
let arr = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9];
let setArr = new Set(arr);
// console.log(Array.from(setArr), [...setArr]);

//数组的并集、交集、差集
{
    //并集
    {
        let arr0 = [1, 2];
        let arr = [1, 2];
        let arr1 = [1, 2, 3, 4];
        let arr2 = [5, 6];

        let arr3 = arr1.concat(arr2, 7);
        let arr4 = [...arr0, ...arr2];
        Array.prototype.push.apply(arr, arr2);
        arr1.push(...arr2);

        // console.log(arr3);  //[ 1, 2, 3, 4, 5,6,7]
        // console.log(arr4);  //[ 1, 2, 5, 6 ]
        // console.log(arr);  //[1 2 5 6]
        // console.log(arr1); //[ 1, 2, 3, 4, 5, 6 ]
    }

    {
        let arr = [1, 2, 3, 9];
        let arr1 = [7, 8, 9, 1];
        //交集
        let a = arr.filter(item => {
            return new Set(arr1).has(item);
        });
        // console.log(a); //[1,9]

        //差集  arr的差集
        let b = arr.filter(item => {
            return !new Set(arr1).has(item);
        });
        // console.log(b); //[2,3]
    }
}

/**
 *  原数组会发生改变
 * array.sort(sortby)；参数可选，必须是函数
 * 默认按照字符编码的顺序进行升序排序
 */
{
    function sortNumber(a, b) {
        let c = a - b;
        switch (true) {
            case c > 0:
                return 1;
            case c < 0:
                return -1;
            default:
                return 0;
        }
    }

    let arr1 = [6, 8, 4, 5];
    arr1.sort(sortNumber);
    // console.log(arr1);
}

{
    function sortIndex(index) {
        return function (a, b) {
            return a[index] - b[index];
        };
    }
    
    let arr2 = [
        { index: 5, name: 'lyy' },
        { index: 4, name: 'hx' },
    ];
    
    arr2.sort(sortIndex('index'));
    // console.log( arr2);
}


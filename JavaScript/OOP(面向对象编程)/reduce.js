/**
 reduce 用于处理数组结构的函数
 reduce方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终为一个值

语法: arr.reduce(callback,[initialValue])
callback （执行数组中每个值的函数，包含四个参数）
     previousValue （上一次调用回调返回的值，或者是提供的初始值（initialValue））
     currentValue （数组中当前被处理的元素）
     index （当前元素在数组中的索引）
     array （调用 reduce 的数组）
initialValue（作为第一次调用 callback 的第一个参数）
 
 */
{
    function add(a, b) {
        return a + b;
    }
    let count = [1, 2, 3, 4].reduce(add, 10);
    // console.log(count);
}
//使用reduce方法可以完成多维度的数据叠加
{
    let totalObj = {
        apple: function (state, item) {
            return (state.apple += item.price * 9);
        },
        peach: function (state, item) {
            return (state.peach += item.price * 8);
        },
    };
    let manageReducers = function (totalObj) {
        return function (total, current) {
            return Object.keys(totalObj).reduce(function (nextState, key) {
                totalObj[key](total, current);
                return total;
            }, {});
        };
    };
    let priceArr = [{ price: 1 }, { price: 2 }, { price: 3 }];
    let totals = priceArr.reduce(manageReducers(totalObj), { apple: 0, peach: 0 });
    console.log(totals);
}

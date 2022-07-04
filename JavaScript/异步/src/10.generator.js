const fs = require('fs');
const path = require('path');

// 封装成一个thunk函数，得到一个只有一个callbackc参数的函数
const readFileThunk = function (filePath) {
    return function (callback) {
        fs.readFile(filePath, callback);
    };
};
const filePath1 = path.resolve(__dirname, '../static/config/data.json');
const filePath2 = path.resolve(__dirname, '../static/config/config.json');
const gen = function* () {
    const r1 = yield readFileThunk(filePath1);
    console.log(r1.toString());
    const r2 = yield readFileThunk(filePath2);
    console.log(r2.toString());
};

{
    //方法1
    // const g = gen();
    // // g.next().value 是一个 thunk 函数，它需要一个 callback 函数作为参数传递进去
    // g.next().value((err, data1) => {
    //     //参数传递
    //     g.next(data1).value((err, data2) => {
    //         g.next(data2);
    //     });
    // });

    // 方法2：自动流程管理的函数
    function run(generator) {
        const g = generator();
        function next(err, data) {
            const result = g.next(data);
            if (result.done) {
                return;
            }
            result.value(next);
        }
        next(); // 手动执行以启动第一次 next
    }
    run(gen);
}


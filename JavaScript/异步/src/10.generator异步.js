const fs = require('fs');
const path = require('path');

// 封装成一个thunk函数，得到一个只有一个callbackc参数的函数
const readFileThunk = function (filePath) {
    return function (callback) {
        fs.readFile(filePath, callback);
    };
};

const gen = function* () {
    yield readFileThunk(path.resolve(__dirname, '../static/config/data1.json'));
    yield readFileThunk(path.resolve(__dirname, '../static/config/data2.json'));
};

(function (gen) {
    const g = gen();
    function next(err = '', data = '') {
        if (data) {
            console.log(data.toString());
        }
        const result = g.next();
        if (result.done) {
            return true;
        }
        result.value(next);
    }
    next();
})(gen);

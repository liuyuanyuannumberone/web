const fs = require('fs');
const path = require('path');
const readFilePromise = function (filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data.toString());
            }
        });
    });
};

const filePath = path.resolve(__dirname, '../static/config/data.json');
const result1 = readFilePromise(filePath);
const filePath2 = path.resolve(__dirname, '../static/config/config.json');
const result2 = readFilePromise(filePath2);

//串联
result1
    .then(data => {
        console.log(1, data);
        return JSON.parse(data).name; //return的值会被当做参数传递给后面步骤的函数
    })
    .then(data => {
        console.log(typeof data);
        return result2; //return一个promise
    })
    .then(data => {
        console.log(2, data);
    })
    .catch(err => {
        console.log(err);
    });

//与的关系,同时拿到数据
Promise.all([result1, result2]).then(datas => {
    console.log(3, datas[0], datas[1]);
});
//并联：一个成功就可以进行下一步操作了
Promise.race([result1, result2]).then(data => {
    console.log(4, data);
});

/***
 Promise.resolve  deferred对象转换成ES6 的Promise对象  参见3.deffered.html 文件
 */

//promise有三种状态：等待（pending）、完成（fulfilled）、拒绝（rejected）只能从“等待”转到“完成”或者“拒绝”
// promise 必须实现then方法，而且then必须返回一个promise 
// then方法接受两个参数，第一个参数是成功时的回调,另一个是失败时的回调



//回调函数传入后，返回值在内部触发

{
    let read = function (executor) {
        let resolve = data => {
            console.log('resolve', data);
        };
        let reject = data => {
            console.log('reject', data);
        };
        executor(resolve, reject);
    };

    read((resolve, reject) => {
        resolve(2);
    });

    // let fn = function (resolve, reject) {
    //     resolve(2);
    // };
    // read(fn);
}

//回调函数传入后，返回值在外部触发
{
    let handler = {};
    let thenFun = function (resolve, reject) {
        handler.resolve = resolve;
        handler.reject = reject;
    };

    //测试
    thenFun(
        function (data) {
            console.log(data);
        },
        function (err) {}
    );

   
    setTimeout(function () {
        handler.resolve(200);
    }, 2000);
}

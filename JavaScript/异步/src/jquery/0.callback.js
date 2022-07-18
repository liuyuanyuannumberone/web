//回调函数传入后，返回值在内部触发
{
    let read = function (fun, delay) {
        let a = 0;
        if (delay === 1000) {
            a = fun(1, 2, 3, 4);
        } else {
            a = fun(5, 6, 7, 8);
        }
        console.log(a);
    };

    let clg = function (a1, a2, a3, a4) {
        console.log(a1, a2, a3, a4);
        return 3;
    };
    read(clg, 1000);
}

//回调函数传入后，返回值在外部触发
{
    let handler = {};
    let thenFun = function (fn1, fn2) {
        handler.resolve = fn1;
        handler.reject = fn2;
    };

    setTimeout(function () {
        handler.resolve(200);
    }, 2000);

    //测试
    thenFun(
        function (data) {
            console.log(data);
        },
        function (err) {}
    );
}

{
    let read = function (executor) {
        let resolve = data => {
            console.log('resolve', data); //2
        };
        let reject = () => {};
        executor(resolve, reject);
    };
    read((resolve, reject) => {
        resolve(2);
    });
}

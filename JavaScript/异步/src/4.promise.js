/**
 Promise/A+ 规范:
   1.promise只会3种状态中的一种：等待(pending)、执行(fulfilled)、拒绝(rejected),不能相互转换
   2.promise.then(onFulfilled,onRejected),then()返回的是promise对象,以实现链式写法。
      1.1 如果返回的值是一个非Promise,生成一个状态为fulfilled的Promise对象
          并将返回值作为下一个then的值。
      1.2 如果返回的是Promise,新生成的Promise对象的状态由被返回的Promise对象决定
          下一个then的值这个被返回的Promise决定
      1.3 Promise的回调函数中抛出错误时,生成一个状态为rejected的Promise对象
          并将错误对象作为下一个then的值。
  3. catch==>如果then函数中有onRejected的处理函数就不走catch，否则直接进入catch,后面的链式调用不再执行。
      
     我们实际开发中只处理onFulfilled的回调,然后最后用catch捕获错误。
     如果任一链式调用失败，则后面的不再执行

   Promise.resolve(); 返回Promise;
   Promise.reject(); 返回Promise;
   Promise.then(); 返回Promise;
   
 */

// 返回值非promise对象
{
    // Promise.resolve()
    Promise.reject()
        .then(
            function () {
                return 1;
            }
            // function (err) {
            //     return 2;
            // }
        )
        .then(
            function (value) {
                console.log(`fulfilled-1: ${value}`);
            },
            function (err) {
                // console.log(`rejected-1: ${err}`);
            }
        )
        .catch(function (err) {
            console.log(`catch-1: ${err}`);
        });
}

//返回Promise对象
{
    Promise.resolve()
        // Promise.reject()
        .then(
            function () {
                return Promise.resolve(1);
            },
            function (err) {
                return Promise.reject(2);
            }
        )
        .then(
            function (value) {
                // console.log(`fulfilled-3: ${value}`);
            }
            // function (err) {
            //     console.log(`rejected-3: ${err}`);
            // }
        )
        .catch(function (err) {
            // console.log(`catch-3: ${err}`);
        });
}

//Promise回调函数中抛出错误
{
    // Promise.reject()
    //     .catch(function () {
    //         throw new Error('Oops!');
    //     })

    Promise.resolve()
        .then(function () {
            throw new Error('Oops!');
        })

        .then(
            function (value) {
                console.log('fulfilled-4', value.message);
                return Promise.resolve(1);
            },
            function (value) {
                console.log('rejected-4', value.message); // 'Oops!'
                return Promise.resolve(2);
            }
        )
        .then(function (value) {
            console.log(value);
        })
        .then(function (value) {
            throw new Error('333333333');
        })
        .catch(function (value) {
            console.log('catch-4', value.message); // 'Oops!'
        });
}

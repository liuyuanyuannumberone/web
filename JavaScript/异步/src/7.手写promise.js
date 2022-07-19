//缺陷：无法完成链式调用
//参考：https://juejin.cn/post/6844903625769091079
class Promise {
    constructor(executor) {
        this.state = 'pending';
        this.value = undefined;
        this.reason = undefined;
        // 成功存放的数组
        this.onResolvedCallbacks = [];
        // 失败存放法数组
        this.onRejectedCallbacks = [];
        let resolve = value => {
            if (this.state === 'pending') {
                this.state = 'fulfilled';
                this.value = value;
                // 一旦resolve执行，调用成功数组的函数
                this.onResolvedCallbacks.forEach(fn => fn());
            }
        };
        let reject = reason => {
            if (this.state === 'pending') {
                this.state = 'rejected';
                this.reason = reason;
                // 一旦reject执行，调用失败数组的函数
                this.onRejectedCallbacks.forEach(fn => fn());
            }
        };
        try {
            executor(resolve, reject);
        } catch (err) {
            reject(err);
        }
    }
    then(onFulfilled, onRejected) {
        if (this.state === 'fulfilled') {
            onFulfilled(this.value);
        }
        if (this.state === 'rejected') {
            onRejected(this.reason);
        }
        // 当状态state为pending时
        if (this.state === 'pending') {
            // onFulfilled传入到成功数组
            this.onResolvedCallbacks.push(() => {
                onFulfilled(this.value);
            });
            // onRejected传入到失败数组
            this.onRejectedCallbacks.push(() => {
                onRejected(this.reason);
            });
        }
    }
}

new PromiseDefine((resolve, reject) => {
    setTimeout(function () {
        resolve(200);
    }, 10000);
}).then(
    data => {
        console.log(data);
        return 100;
    },
    err => {
        console.log(err);
    }
);

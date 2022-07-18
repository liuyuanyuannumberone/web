class Promise {
    constructor(executor) {
        this.state = 'pending'; // 初始化state为等待态
        this.value = undefined; // 成功的值
        this.reason = undefined; // 失败的原因

        let resolve = value => {
            if (this.state === 'pending') {
                this.state = 'fulfilled';
                this.value = value;
            }
        };

        let reject = reason => {
            if (this.state === 'pending') {
                this.state = 'rejected';
                this.reason = reason;
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
        console.log("test");
    }
}

new Promise((resolve, reject) => {
    setTimeout(function(){
      resolve(200)
    }, 10000);
}).then(
    data => {
        console.log(data);
    },
    err => {console.log(err);}
);

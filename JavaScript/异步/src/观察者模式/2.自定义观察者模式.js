// 事件中心
let pubSub = {
    list: {},
    subscribe: function (key, fn) {
        // 订阅
        if (!this.list[key]) {
            this.list[key] = [];
        }
        this.list[key].push(fn);
    },
    publish: function (key, ...arg) {
        // 发布
        for (let fn of this.list[key]) {
            fn.call(this, ...arg);
        }
    },
    unSubscribe: function (key, fn) {
        // 取消订阅
        let fnList = this.list[key];
        if (!fnList) return false;

        // 不传入指定取消的订阅方法，则清空key下的订阅
        fnList.length = 0;
    },
};

// 订阅
pubSub.subscribe('onwork', function (time) {
    console.log(`上班了：${time}}`);
});
pubSub.subscribe('offwork', function (time) {
    console.log(`下班了：${time}`);
});

// 发布
// pubSub.publish('offwork', '18:00:00');

// 取消订阅
pubSub.unSubscribe('onwork');

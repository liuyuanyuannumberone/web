//iterator

let authors = {
    allperson: {
        science: ['a', 'b', 'c'],
        story: ['mike', 'lily', 'tom'],
        sadly: ['mm', 'dd', 'cc'],
    }
};
authors[Symbol.iterator] = function () {
    let allperson = this.allperson;
    let keys = Reflect.ownKeys(allperson);
    let value = [];
    return {
        next() {
            if (value.length === 0 && keys.length > 0) {
                value.push(allperson[keys[0]]);
                keys.shift();
            }
            return {
                done: keys.length === 0,
                value:value.shift()
            };
        },
    };
};
for (let v of authors) {
    console.log(v);
}

console.log("=======================================");



let obj = {
    count: 0,
    Gen(time) {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log(time);
                resolve({ done: false, value: time });
            }, time);
        });
    },
    [Symbol.asyncIterator]() {
        let self = this;
        return {
            next() {
                self.count++;
                if (self.count < 4) {
                    return self.Gen(Math.random() * 1000);
                } else {
                    return Promise.resolve({ done: true, value: '' });
                }
            },
        };
    },
};

async function test() {
    for await (let item of obj) {
        console.log(Date.now(), item);
    }
}
test();

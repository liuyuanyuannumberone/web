/*
* generator  遇到yield就会停下来
* */


{
    function* loop() {
        for (let i = 0; i < 3; i++) {
            yield console.log(i);
        }
    }

    const l = loop();
    l.next();
    l.next();
    l.next();
    l.next();

}


{
    function* gen() {
        let val;
        val = yield* [1, 2, 3];
        console.log(333, val); //不执行
    }

    const g = gen();  //value当前值， done 表示是否遍历完毕
    console.log(111, g.next()); //{value: 1, done: false}
    console.log(222, g.next());//{value: 2, done: false}

}

{
    function* gen1() {
        let val;
        val = yield [1, 2, 3];
        console.log(777, val);  //undefined
    }

    const g = gen1();  //value当前值， done 表示是否遍历完毕
    console.log(555, g.next()); //{value: Array(3), done: false}
    console.log(666, g.next());//{value: undefined, done: true}

}


{
    console.log(1111111111);
//iterator  自定义遍历
    let authors = {
        allperson: {
            science: ["a", 'b', 'c'],
            story: ['mike', 'lily', 'tom'],
            sadly: ['mm', 'dd', 'cc']
        },
        address: ['1', '2', '3']
    }
    authors[Symbol.iterator] = function () {
        let allperson = this.allperson;
        let keys = Reflect.ownKeys(allperson);
        let value = [];
        return {
            next() {
                if (value.length === 0 && keys.length > 0) {
                    value = allperson[keys[0]];
                    keys.shift();
                }
                return {
                    done: keys.length === 0,
                    value: value.shift(),
                }
            }
        }
    };
    for (let v of authors) {
        console.log(v);
    }
}

{
    let obj = {
        count: 0,
        Gen(time) {
            return new Promise((resolve => {
                setTimeout(() => {
                    console.log(time);
                    resolve({done: false, value: time})
                }, time)
            }))
        },
        [Symbol.asyncIterator]() {
            let self = this;
            return {
                next() {
                    self.count++;
                    if (self.count < 4) {
                        return self.Gen(Math.random() * 1000)
                    } else {
                        return Promise.resolve({done: true, value: ''});
                    }
                }
            }
        }
    }

    async function test() {
        for await(let item of obj) {
            console.log(Date.now(), item)
        }
    }
    test();
}

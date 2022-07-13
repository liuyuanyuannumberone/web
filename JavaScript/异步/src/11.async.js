// async-await 可以理解为是Generator的语法糖！
// await必须跟一个Promise对象,
function Gen(time = 2000) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(time);
        }, time);
    });
}
async function start() {
    await Gen().then(res => console.log(res));
}
// start()

// for await of
let arr = [Gen(3000), Gen(2000), Gen(1000)];
async function test() {
    for await (let item of arr) {
        console.log(item);
    }
}
// test();


function p(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(time)
        }, time)
    })
}

let arr1 = [p(2000), p(1000), p(3000)];

async function test() {
    for await (let  item of arr1) {
        console.log(Date.now(),item)
    }
}

/**
  async-awaitawait必须跟一个Promise对象
*/

function Gen(time = 2000) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(time);
        }, time);
    });
}

// for await of
let arr = [Gen(3000), Gen(2000), Gen(1000)];
async function test() {
    for await (let item of arr) {
        console.log(item);
    }
}

async function start() {
    await Gen().then(res => console.log(res));
}

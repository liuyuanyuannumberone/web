//定义Generator时，需要使用function*
//生成一个Generator对象，经验证 typeof h 发现不是函数
//执行Hello()之后，Hello内部的代码不会立即执行，而是出于一个暂停状态
//每次h.next()都会打破暂停状态去执行，直到遇到下一个yield或者return,遇到return执行结束，即done: true

function* Hello() {
    yield 100;
    yield (function () {
        return 200;
    })();
    return 300;
}
var h = Hello();
console.log(typeof h); // object
console.log(h.next()); // { value: 100, done: false }
console.log(h.next()); // { value: 200, done: false }
console.log(h.next()); // { value: 300, done: true }
console.log(h.next()); // { value: undefined, done: true }

console.log("===========================================");

function* loop() {
    for (let i = 0; i < 3; i++) {
        yield console.log(i);
    }
}

const l = loop();
l.next(); //0
l.next(); //1
l.next(); //2

console.log("===========================================");

function* gen() {
  let val;
  val = yield* [1, 2, 3];
}

const g = gen();  //value当前值， done 表示是否遍历完毕
console.log(111, g.next()); //{value: 1, done: false}
console.log(222, g.next());//{value: 2, done: false}
console.log(333, g.next());//{value: 3, done: false}
console.log(444, g.next());//{value: undefined, done: true}

console.log("===========================================");

function* gen1() {
  let val;
  val = yield [1, 2, 3];
}

const g1 = gen1();
console.log('g1', g1.next()); //{value: Array(3), done: false}
console.log('g2', g1.next());//{value: undefined, done: true}



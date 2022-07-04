//定义Generator，需要使用function*,生成一个Generator对象（Iterator对象）
//执行Hello()之后，Hello内部的代码不会立即执行，而是出于一个暂停状态
//每次h.next()都会打破暂停状态去执行，直到遇到下一个yield或者return,遇到return执行结束，即done: true

function* Hello() {
    yield 100;
    yield (function () {
        return 200;
    })();
    return 300;
}
var h = Hello();  // Generator对象、Iterator对象
// console.log(h.next()); // { value: 100, done: false }
// console.log(h.next()); // { value: 200, done: false }
// console.log(h.next()); // { value: 300, done: true }
// console.log(h.next()); // { value: undefined, done: true }
for (i of h) {
  // console.log(i)  //100 200
}
console.log("===========================================");

function* G() {
  const a = yield 100
  console.log('a', a)  // a aaa
  const b = yield 200
  console.log('b', b)  // b bbb
  const c = yield 300
  console.log('c', c)  // c ccc
}
const g1 = G();
// g1.next()    // value: 100, done: false
// 有一个要点需要注意，就g.next('aaa')是将aaa传递给上一个已经执行完了的yield语句前面的变量，
// 而不是即将执行的yield前面的变量
// g1.next('aaa') // value: 200, done: false 
// g1.next('bbb') // value: 300, done: false
// g1.next('ccc') // value: undefined, done: true

console.log("===========================================");

//斐波那契数列 1 2 3 5 8
function* fibonacci() {
  let [prev, curr] = [0, 1]
  for (;;) {
      [prev, curr] = [curr, prev + curr]
      // 将中间值通过 yield 返回，并且保留函数执行的状态，因此可以非常简单的实现 fibonacci
      yield curr
  }
}
for (let n of fibonacci()) {
  if (n > ) {
      break
  }
  console.log(n)
}

console.log("===========================================");

//yield* 语句

function* G1() {
  yield 'a'
  yield* G2()
  yield 'b'
}
function* G2() {
  yield 'x'
  yield 'y'
}
for (let item of G1()) {
  console.log(item) //a x y b
}


// function* gen() {
//   let val;
//   val = yield* [1, 2, 3];
// }
// const g = gen();  //value当前值， done 表示是否遍历完毕
// console.log(111, g.next()); //{value: 1, done: false}
// console.log(222, g.next());//{value: 2, done: false}
// console.log(333, g.next());//{value: 3, done: false}
// console.log(444, g.next());//{value: undefined, done: true}



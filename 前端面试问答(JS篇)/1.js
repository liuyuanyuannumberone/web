// async function f() {
//     await 1;
//     return 2
// }
//
// console.info(f());
setTimeout(_ => console.log(4))

new Promise(resolve => {
    resolve()
    console.log(1)
}).then(_ => {
    console.log(3)
})

console.log(2)

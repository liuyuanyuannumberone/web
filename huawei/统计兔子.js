const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
r1.on('line', str => {
    /*
    *  f(1)=1
    *  f(2)=1
    *  当n>=3时  f(n)=f(n-1)+f(n-2)    1 1 2 3 5 8 13
    *  求f(n)等于多少
    * */

    let n = parseInt(str);
    let arr = [1, 1];
    for (let i = 2; i < n; i++) {
        arr[i] = arr[i - 2] + arr[i - 1];
    }
    console.log(arr.pop());
});

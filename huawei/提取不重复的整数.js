const readLine = require('readline');
const r1 = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
});

r1.on('line', input => {
    let arr = [...input].reverse();
    arr = [...new Set(arr)];
    console.log(arr.join(''));
});

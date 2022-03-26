const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
r1.on('line', str => {
    str = str.replace(/[^A-Za-z]/g, " ");
    let arr = str.split(' ').filter(item => item !== '');
    console.log(arr.reverse().join(' '));
});

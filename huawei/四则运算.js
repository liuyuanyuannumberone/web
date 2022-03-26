const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
r1.on('line', str => {
    str = str.replace('{', '(').replace('}', ')');
    console.log(eval(str));
})

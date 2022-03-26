const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
r1.on('line', input => {
    let set=new Set(input)
    console.log(set.size);
});

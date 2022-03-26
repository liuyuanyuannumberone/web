const readline=require('readline');
const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})
r1.on('line',str=>{
    console.log(str.split('').reverse().join(''));
});

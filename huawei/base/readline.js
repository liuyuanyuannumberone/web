const readline=require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.on('line',(input)=>{
    let tokens = input.split(' ');
    console.log(parseInt(tokens[0]) + parseInt(tokens[1]));
    console.log(`接收到: ${input}`);
    rl.close();
});


// 十进制转其他进制
{
    let x = 100;
    let a = x.toString(2)
    let b = x.toString(8)
    let c = x.toString(16)
    console.log(a, b, c);
}

//其他进制转十进制
{

    let x = 0b10010;
    let y = 0o12;
    let z = 0x12;
    let a = parseInt(x);
    let b = parseInt(y);
    let c = parseInt(z);
    console.log(a, b, c);
}




{
    // us使得.匹配任意字符
    console.log(/foo.bar/.test('foo\nbar')); //false
    console.log(/foo.bar/su.test('foo\nbar')); //true
}

{
    //贪婪匹配
    let regex = /\d{2,5}/g;
    let string = '123 1234 12345 123456';
    console.log(string.match(regex)); //贪婪匹配  [ '123', '1234', '12345', '12345' ]

    //惰性匹配
    let regex1 = /\d{2,5}?/g;
    let string1 = '123 1234 12345 123456';
    console.log(string1.match(regex1)); // ['12', '12', '34','12', '34', '12','34', '56']

    let regex2 = /2(.*?)3/g;
    let regex3 = /2(.*)3/g;
    let string2 = '213213244323';
    console.log(string2.match(regex2)); // [ '213', '213', '2443', '23' ]
    console.log(string2.match(regex3)); //[ '213213244323' ]

    console.log("123".match(/.*/g)); // [ '123', '' ]
    console.log("123".match(/.*?/g)); // [ '', '', '', '' ]

}

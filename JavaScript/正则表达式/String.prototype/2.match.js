/**
 * 返回一个数组
 */
let s = '_x_x';
let r1 = /x/;
//只会匹配第一个，不存在循环。
let a = s.match(r1);
let b = s.match(r1);
console.log(a); // [ 'x', index: 1, input: '_x_x', groups: undefined ]
console.log(b); //[ 'x', index: 1, input: '_x_x', groups: undefined ]

// 可以返回全部
let r3 = /x/g;
console.log(s.match(r3)); //会一次性返回所有匹配成功的结果 [ 'x', 'x' ]

//match中的分组，不用g,只做了匹配第一个的分组。用了g,不能match方法不会捕获分组的内容，可以使用exec做匹配。

//捕获性分组
{
    console.log('abcabc'.match(/.b./)); //[ 'abc', index: 0, input: 'abcabc', groups: undefined ]
    console.log('abcabc'.match(/(.)b(.)/)); //[ 'abc', 'a', 'c', index: 0, input: 'abcabc', groups: undefined ]

    //用g
    console.log('abcabc'.match(/(.)b(.)/g)); //[ 'abc', 'abc' ]

    let reg = /(.)b(.)/g;
    let res;
    while ((res = reg.exec('abcabc'))) {
        console.log(res);
        //[ 'abc', 'a', 'c', index: 0, input: 'abcabc', groups: undefined ]
        //[ 'abc', 'a', 'c', index: 3, input: 'abcabc', groups: undefined ]
    }
    let tagName = /<([^>]+)>[^<]*<\/\1>/;
    console.log(tagName.exec('<b>bold</b>')[1]); //圆括号匹配尖括号之中的标签，而\1就表示对应的闭合标签。
}

//非捕获性分组
{
  console.log('abc'.match(/(?:.)b(.)/)); //[ 'abc', 'c', index: 0, input: 'abc', groups: undefined ]
}
//断言
{
  console.log('abc'.match(/b(?=c)/));  // [ 'b', index: 1, input: 'abc', groups: undefined ]
}


//分组命名  如果正则里面有了命名分组，那么匹配结果会多了一个groups 的属性
{
  let date = 'lastDate:2029-09-02';
  const t = date.match(/(\d{4})[-](\d{2})-(\d{2})/);
  const m = date.match(/(?<year>\d{4})-(?<month>\d{2})[-](?<day>\d{2})/);
  const { year, month, day } = m.groups;
  console.log(t); //['2029-09-02','2029','09','02',index: 9,input: 'lastDate:2029-09-02
                // groups: undefined]
  console.log(m);
  // ['2029-09-02','2029','09','02',index: 9,input: 'lastDate:2029-09-02,
            // groups: [Object: null prototype] { year: '2029', month: '09', day: '02' }]
}
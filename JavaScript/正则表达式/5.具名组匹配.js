//分组命名:允许为每一个组匹配指定一个名字。 groups就会有值
// 引用具名组匹配,可以使用\k<组名>;
{
    // \n引用括号匹配的内容，n是自然数，表示对应顺序的括号
    // console.log(/(.)b(.)\1b\2/.test('abctestabc')); //false
    // console.log(/y(..)(.)\2\1/.test('yabccab')); // true
    // console.log(/y((..)\2)\1/.test('yabababab')); // true //捕获嵌套
}
{
    let date = 'lastDate:2029-09-02';
    const t = date.match(/(\d{4})[-](\d{2})-(\d{2})/);
    let format = /(?<year>\d{4})-(?<month>\d{2})[-](?<day>\d{2})/;
    const m = date.match(format);
    const { year, month, day } = m.groups;

    // console.log(t); //[...,groups: undefined]
    // console.log(m);
    // ['2029-09-02','2029','09','02',index: 9,input: 'lastDate:2029-09-02,
    // groups: [Object: null prototype] { year: '2029', month: '09', day: '02' }]

    const RE_TWICE = /^(?<word>[a-z]+)!\k<word>$/;
    // console.log(RE_TWICE.test('abc!abc')); // true
}

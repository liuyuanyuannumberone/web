/**
 * replace str.replace(正则表达式, replacement)
  replacement 1.可以为替换内容
              2.可以使用美元符号$，用来指代所替换的内容
                   $&：匹配的子字符串。
                   $`：匹配结果前面的文本。
                   $'：匹配结果后面的文本。
                   $n：匹配成功的第n组内容，n是从1开始的自然数。
                   $$：指代美元符号$
               3.还可以是一个函数，将每一个匹配内容替换为函数返回值
                   第一个参数是捕捉到的内容，
                   第二个参数是捕捉到的组匹配（有多少个组匹配，就有多少个对应的参数）
                   倒数第二个参数是捕捉到的内容在整个字符串中的位置
                   最后一个参数是原字符串
 */

{
    let str = '  哦买噶的    ,太幸福了  ';
    //console.log('===' + str.replace(/\s+/g, '') + '==='); //去掉所有空格
    //console.log('===' + str.replace(/^\s+|\s+$/g, '') + '===='); //去两边空格
    //console.log('===' + str.trim() + '==='); //trim() 去两边空格
}

{
    let str1 = 'hello world  good world'.replace(/(\w+)\s(\w+)/g, '$2-$1');
    let str2 = 'abc'.replace(/b/g, "[$`-$&-$']");
    // console.log(str1);   //world-hello  world-good
    // console.log(str2);// a[a-b-c]c
}

{
    //有四个括号，所以会产生四个组匹配
    let prices = {
        p1: '$1.99',
        p2: '$9.99',
        p3: '$5.00',
    };
    let template = '<span id="p1"></span>' + '<span id="p2"></span>' + '<span id="p3"></span>';
    let template1 = template.replace(
        /(<span id=")(.*?)(">)(<\/span>)/g,
        function (match, a, b, c, d) {
            return a + b + c + prices[b] + d;
        }
    );
    //<span id="p1">$1.99</span><span id="p2">$9.99</span><span id="p3">$5.00</span>
    // console.log(template1);
}

{
    const URL = 'https://www.zhihu.com/search?type=content&q=2';
    let paramsObject = {};
    URL.replace(/(\?|&)([^=]+)=([^&]+)/g, (match, p1, p2, p3) => {
        console.log(match); //?type=content  &q=2
        paramsObject[p2] = p3; 
    });
    console.log(paramsObject); //{ type: 'content', q: '2' }
}

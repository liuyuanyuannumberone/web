// 切割字符串  (“要干掉的字符串”，切割后留下的个数)，最后返回一个数组;

let str3 = "小刘|小猪|小狗|小凡|小花|凤姐|男人";
console.log(str3.split("|", 7));  //[ '小刘', '小猪', '小狗', '小凡', '小花', '凤姐', '男人' ]


//出现了多少次
let str = "lkfsjklsjdskdvsdsJSKLJBsoDLaihsisvskviVVKZVJvcscsldvlsbVKDVBdskdukgyCXCSKDISOADHIuskckhzckhschszc";
str = str.toLocaleLowerCase();
let obj = {};
for (let i = 0; i < str.length; i++) {
    let key = str[i];
    if (obj[key]) {
        obj[key]++;
    } else {
        obj[key] = 1;
    }
}
console.log(obj);
for (var key in obj)
    console.log(key + ":" + obj[key]);


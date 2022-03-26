//定义对象 删除对象属性
{
    let x = 1, y = 2, z = 3;
    let m = 'name';
    let obj = {
        x,
        y,
        z,
        m: 'liu',
        [m]: 'liu',
        [x + y]: '123',
        hello() {
            console.log('hello');
        },
    };
    // console.log(obj); // {x: 1, y: 2, z: 3, m: 'liu', name: 'liu' ,hello: [Function: hello] }

    let test = {
        "测试": 11,
    };
    delete test["测试"];
}



/*
* 深拷贝 这样的拷贝是直接开辟了新的地址
*
* JSON.parse   缺陷 https://segmentfault.com/a/1190000020297508 只适用于一般数据的拷贝（对象、数组），容易丢失数据
* 比如拷贝其他引用类型、拷贝函数、循环引用等情况。
* lodash的_.cloneDeep
* */

//浅拷贝
{

    let arr = [1, 2];
    let arr2 = JSON.parse(JSON.stringify(arr));
}

{

    let arr3 = [1, 1];
    let arr4 = arr3.concat();
    arr3[0] = 100;
    // console.log(arr4);//[1,1]
}

{
    const source = {name: "liuyy", sex: 1};
    const target = {};
    Object.assign(target, source);
    source.name = 'peny';
    //console.log(source,target); //{ name: 'peny', sex: 1 } { name: 'liuyy', sex: 1 }

    //赋值错误  source存在引用类型的数据直接复制   而不会遍历内部  f丢失 e保留
    const source1 = {a: {b: {c: {d: 1}}}};
    const target1 = {a: {b: {c: {d: 1}, f: 2}}, e: 0};
    Object.assign(target1, source1);
    // console.log(target1);
}

{
    let arr5 = [1, 1];
    let [...arr6] = arr5;
    arr5[1] = 100;
    //  console.log(arr6); //[1,1]


    const input = {
        a: 1,
        b: 2
    }
    const output = {
        ...input,
        c: 3
    }
    input.a = 4;
    //   console.log(input, output); //:{a:4, b:2} {a: 1, b: 2, c: 3}

}

{



}



{
    let arr = [1, 1];
    let arr1 = arr;
    arr[0] = 4;
}




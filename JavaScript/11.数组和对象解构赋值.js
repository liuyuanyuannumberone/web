/*
   * 对象结构赋值
   * */
{
    let file = {
        type: 'image/png',
        size: 1432,
        name: '图片名',
    };
    const {type, size, name} = file;
    const {type: var1, size: var2, name: var3} = file; //type是匹配的模式，fileType才是变量
    console.log(type, size, name); //image/png 1432 图片名
    console.log(var1, var2, var3); //image/png 1432 图片名


    let options = {
        name: "lyy",
        hobby: ["sleep", "swim", "drink"],
        family: {
            fa: "liu",
            mo: "wang",
        },
    };
    let {family: {fa}, hobby: [item1]} = options;
    // console.log(fa); //liu
    // console.log(item1); //sleep


    //给对象赋值
    [file.size, file.name] = [1000, "新名字"];
    // console.log(file); //{ type: 'image/png', size: 1000, name: '新名字' }
}

//遍历
{
    let peron = {name: "lyy", age: 18};
    for (let [k, v] of Object.entries(peron)) {  // [ [ 'name', 'lyy' ], [ 'age', 18 ] ]
        // console.log(`${k}:${v}`);
    }
}

/*
*
* 数组
* */
{
    let [a, b, c] = [1, 2, 3];
    // console.log(a, b, c); //1 2 3
}
{
    let [a, [[b], c]] = [1, [[2], 3]];
    // console.log(a, b, c); //1 2 3
}
{
    let [, , c] = [1, 2, 3];
    let [, ...all] = [1, 2, 3, 4];
    // console.log(c);//3
    // console.log(all); //[ 2, 3, 4 ]
}

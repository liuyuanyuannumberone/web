/**
  1. TypedArray 数组提供9种构造函数 ,共包括9种类型的视图：
  
    Int8Array：8 位有符号整数，长度 1 个字节。
    Uint8Array：8 位无符号整数，长度 1 个字节。
    Uint8ClampedArray：8 位无符号整数，长度 1 个字节，溢出处理不同。
    Int16Array：16 位有符号整数，长度 2 个字节。
    Uint16Array：16 位无符号整数，长度 2 个字节。
    Int32Array：32 位有符号整数，长度 4 个字节。
    Uint32Array：32 位无符号整数，长度 4 个字节。
    Float32Array：32 位浮点数，长度 4 个字节。
    Float64Array：64 位浮点数，长度 8 个字节。

  2. 构造函数有多种用法：
     TypedArray.prototype.buffer      返回ArrayBuffer对象,同一段内存           只读属性
     TypedArray.prototype.byteLength  返回 TypedArray 数组占据的内存长度        只读属性 
     TypedArray.prototype.byteOffset  返回从底层ArrayBuffer对象的哪个字节开始    只读属性
     TypedArray.prototype.length      返回数组含有多少个成员
     TypedArray.prototype.set(被复制的数组)  用于复制数组 整段内存的复制
       set方法还可以接受第二个参数，表示从b对象的哪一个成员开始复制a对象
          const a = new Uint16Array(8);
          const b = new Uint32Array(10);
          b.set(a, 2)
     TypedArray.prototype.subarray()
     TypedArray.prototype.slice()  TypedArray.of() TypedArray.from()
          
    第一种用法：TypedArray(buffer, byteOffset=0, length?)  byteOffset必须与所要建立的数据类型一致
    第二种用法：TypedArray(length) 
    第三种用法：TypedArray(typedArray) 新数组会开辟一段新的内存  
               TypedArray(typedArray.buffer)  基于同一段内存  
    第四种用法：TypedArray(arrayLikeObject)  参数也可以是一个普通数组 重新开辟内存  

  3. 普通数组的操作方法和属性，对TypedArray数组完全适用
  4. 普通数组与TypedArray数组的差异：
       TypedArray数组的所有成员，都是同一种类型
       TypedArray数组的成员是连续的，不会有空位
       TypedArray数组成员的默认值为0
       TypedArray数组只是一层视图，它的数据在底层的ArrayBuffer对象  
  5. typedArray数组转普通数组   部署了Iterator接口，所以可以被遍历
        Array.from(typedArray)
        Array.prototype.slice.call(typedArray)
        [...typedArray] 
  6. 复合视图
 */

//第一种用法
{
    const b = new ArrayBuffer(8);
    const v2 = new Uint32Array(b, 4);
    const v3 = new Int16Array(b, 2, 2);
    const v4 = new Int16Array(b, 4);
    console.log(b.byteLength, v2.byteLength, v3.byteLength, v4.byteLength); // 8 4 4 4
}

// 第二种、三种用法
{
    const x = new Int16Array(2);
    const y = new Float64Array(2);
    //新数组会开辟一段新的内存
    const z = new Int8Array(new Uint8Array(4));
    // 基于同一段内存
    const m = new Int8Array(new Uint8Array(4).buffer);

    console.log(x.byteLength, y.byteLength, (z.byteLength === m.byteLength) == 4); //4 16 true
}

// 第四种用法
{
    const x = new Uint8Array([1, 2, 3, 4]);
    console.log(x.byteLength); //4
}

//复合视图
{
    const buffer = new ArrayBuffer(24);
    const idView = new Uint32Array(buffer, 0, 1);
    const usernameView = new Uint8Array(buffer, 4, 16);
    const amountDueView = new Float32Array(buffer, 20, 1);
}

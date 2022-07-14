/**
 * DataView 视图
 *
 * TypedArray视图: 是用来向网卡、声卡之类的本机设备传送数据;所以使用本机的字节序就可以了。同一数据类型。
 * DataView视图: 是用来处理网络设备传来的数据，所以大端字节序或小端字节序是可以自行设定的。
 *               如果一段数据包括多种数据类型,可以通过DataView视图进行操作。
 *
 * DataView视图本身也是构造函数，接受一个ArrayBuffer对象作为参数
 * 1.构造函数
 *   new DataView(ArrayBuffer buffer [, 字节起始位置 [, 长度]]);
 *   DataView.prototype.buffer
 *   DataView.prototype.byteLength
 *   DataView.prototype.byteOffset


   2.DataView实例提供8个方法读取内存：
    getInt8：读取 1 个字节，返回一个 8 位整数。
    getUint8：读取 1 个字节，返回一个无符号的 8 位整数。
    getInt16：读取 2 个字节，返回一个 16 位整数。
    getUint16：读取 2 个字节，返回一个无符号的 16 位整数。
    getInt32：读取 4 个字节，返回一个 32 位整数。
    getUint32：读取 4 个字节，返回一个无符号的 32 位整数。
    getFloat32：读取 4 个字节，返回一个 32 位浮点数。
    getFloat64：读取 8 个字节，返回一个 64 位浮点数。
  
   3.如果一次读取两个或两个以上字节，就必须明确数据的存储方式，到底是小端字节序还是大端字节序。
   默认情况下使用大端字节序。需要使用小端字节序，必须在get方法的第二个参数为true。 
    
   4.DataView 视图提供8个方法写入内存
      setInt8：写入 1 个字节的 8 位整数。
      setUint8：写入 1 个字节的 8 位无符号整数。
      setInt16：写入 2 个字节的 16 位整数。
      setUint16：写入 2 个字节的 16 位无符号整数。
      setInt32：写入 4 个字节的 32 位整数。
      setUint32：写入 4 个字节的 32 位无符号整数。
      setFloat32：写入 4 个字节的 32 位浮点数。
      setFloat64：写入 8 个字节的 64 位浮点数。

 */

const buffer = new ArrayBuffer(24);
const dv = new DataView(buffer);

//从第1个字节读取一个8位无符号整数
const v1 = dv.getUint8(0);
//从第2个字节读取一个16位无符号整数
const v2 = dv.getUint16(1);
//从第4个字节读取一个16位无符号整数
const v3 = dv.getUint16(3);

//默认大端字节序
const v4 = dv.getUint16(3);
// 小端字节序
const v5 = dv.getUint16(1, true);


//在第5个字节，以大端字节序写入值为25的32位整数
dv.setInt32(4, 25);

//在第9个字节，以小端字节序写入值为2.5的32位浮点数
dv.setFloat32(8, 2.5, true);

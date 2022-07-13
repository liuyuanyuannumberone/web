// ArrayBuffer 对象
const buffer = new ArrayBuffer(32); //生成一段32字节的内存区域，每个字节的值默认都是0

{
    // console.log(buffer.byteLength);  //3
    const newBuffer = buffer.slice(0, 3);
    // console.log(ArrayBuffer.isView(buffer)); // false
}

// typedArray
{
  const x1 = new Int32Array(buffer);
  x1[0] = 1;
  const x2 = new Uint8Array(buffer);
  x2[0] = 2;
  // console.log(x1[0]); //2

  const typedArray = new Uint8Array([0, 1, 2]);
  typedArray[0] = 5;
  // console.log(typedArray.length,typedArray[0],typedArray);  //3 5  Uint8Array(3) [ 5, 1, 2 ]
}

// DataView
{
    const dataView = new DataView(buffer); //建立DataView视图
    // console.log(dataView.getUint8(0)); // 0  以不带符号的8位整数格式，从头读取8位二进制数据
}



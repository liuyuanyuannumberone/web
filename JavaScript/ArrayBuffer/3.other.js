/***
 * 字节序：数值在内存中的表示方式。TypedArray数组内部也采用小端字节序读写数据
  
 * 由于x86体系的计算机都采用小端字节序,相对重要的字节排在后面的内存地址，相对不重要字节排在前面的内存地址
 * 占据四个字节的16进制数0x12345678, 储存顺序就是78563412  
 */
{
    const buffer = new ArrayBuffer(16);
    const c = new Int32Array(buffer);
    for (let i = 0; i < c.length; i++) {
        c[i] = i * 2;
    }

    console.log(c); //Int32Array(2) [ 0, 2 ,4,6]

    const d = new Int16Array(buffer);
    console.log(d); // Int16Array(8) [0, 0, 2, 0,  4, 0, 6, 0]
}
//BYTES_PER_ELEMENT:表示这种数据类型占据的字节数。
{
    Int8Array.BYTES_PER_ELEMENT; // 1
    Uint8Array.BYTES_PER_ELEMENT; // 1
    Uint8ClampedArray.BYTES_PER_ELEMENT; // 1
    Int16Array.BYTES_PER_ELEMENT; // 2
    Uint16Array.BYTES_PER_ELEMENT; // 2
    Int32Array.BYTES_PER_ELEMENT; // 4
    Uint32Array.BYTES_PER_ELEMENT; // 4
    Float32Array.BYTES_PER_ELEMENT; // 4
    Float64Array.BYTES_PER_ELEMENT; // 8
}

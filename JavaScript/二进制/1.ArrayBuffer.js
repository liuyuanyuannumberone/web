/**
 *    ArrayBuffer是一个构造函数，参数代表字节数
      ArrayBuffer.prototype.byteLength
      ArrayBuffer.prototype.slice()   允许将内存区域的一部分，拷贝生成一个新的ArrayBuffer对象
      ArrayBuffer.isView()       判断是否为TypedArray实例或DataView实例
 */
const buffer = new ArrayBuffer(32); //生成一段32字节的内存区域，每个字节的值默认都是0
const newBuffer = buffer.slice(0, 3);
console.log(buffer, buffer.byteLength, ArrayBuffer.isView(buffer)); // 32 false

// TextDecoder:  ArrayBuffer/TypedArray => String
function ab2str(input, outputEncoding = 'utf8') {
    const decoder = new TextDecoder(outputEncoding);
    return decoder.decode(input);
}

// TextEncoder:Convert String => ArrayBuffer
function str2ab(input) {
    const encoder = new TextEncoder();
    return encoder.encode(input).buffer;
}

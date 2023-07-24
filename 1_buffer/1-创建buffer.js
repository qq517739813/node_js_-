// Buffer缓冲器是一个类似数组的对象，用于固定长度的字节序列
// 1、alloc
 let buf = Buffer.alloc(10);//alloc 分配的意思
 console.log(buf);

//  2、allocUnsafe 不安全的buffer
let buf2 = Buffer.allocUnsafe(100000)
console.log(buf2);
// 3、 from 转换成asiioc码
let buf3 = Buffer.from('hello')
console.log(buf3);
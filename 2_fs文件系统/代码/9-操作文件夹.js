
const fs = require('fs');
//创建文件夹
// fs.mkdir('.html',err=>{
//     if (err) {
//         console.log('err',err);
//              return
//     }
//     console.log('成功');
// })
//递归创建文件夹
// fs.mkdir('a/b/c/d/e/f', { recursive: true }, err => {
//     if (err) {
//         log('err', err);
//         return
//     }
//     console.log('成功');
// })
// 读取文件夹
// fs.readdir('../资料', (err,data) => {
//     if (err) {
//         log('err', err);
//         return
//     }
//     console.log('成功',data);
// })
// 读取文件夹列表
// fs.readdir('./', (err,data) => {
//     if (err) {
//         log('err', err);
//         return;
//     }
//     console.log('succeed,会打印文件夹列表',data);
// })

// fs.rmdir('./.html', err => {
//     if (err) {
//         console.log('删除失败');
//         return;
//     }
//     console.log('删除成功');
// });

// fs.rmdir('./a',{recursive:true},err=>{
//     if (err) {
//         console.log('err',err);
//         return
//     }
//     console.log('成功');
// });

// fs.rmdir('./a',{recursive:true},err=>{
//     if (err) {
//         console.log(err);
//         return
//     }
// })
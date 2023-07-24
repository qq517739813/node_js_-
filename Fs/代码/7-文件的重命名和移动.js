const fs = require('fs')

// fs.rename('./座右铭.txt','./论语.txt',err=>{
//     if (err) {
//         console.log('重命名失败');
//         return
//     }
//     console.log('操作成功');

// })

//移动文件

fs.rename('./座右铭.txt','../资料/座右铭.txt',err=>{
    if (err) {
        console.log('重命名失败');
        return
    }
    console.log('操作成功');

})




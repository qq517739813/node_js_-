const fs = require('fs')

fs.unlink('./观书有感.txt.txt', err => {
    if (err) {
        console.log('失败');
        return
    }
    console.log('成功');

})

fs.rm('./观书有感.txt.txt', err => {
    if (err) {
        console.log('失败');
        return
    }
    console.log('成功');
    console.log('成功');

})
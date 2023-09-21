const fs = require('fs');

fs.appendFile('座右铭.txt','，\r\n追加数据',err=>{
    if (err) {
        console.log('追加失败');
        return
    }
    console.log('追加成功'); 
})

// 异步形式 fs.appendFileSync
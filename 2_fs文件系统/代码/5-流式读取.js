const fs = require('fs')

const rs = fs.createReadStream('../资料/忽然之间.mp4')


rs.on('data',chunk=>{
    console.log(chunk.length);
})

// end可选事件
rs.on('end',()=>{ 
    console.log('读取完成');
})
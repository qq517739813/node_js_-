const fs = require('fs');

const http = require('http')

const server = http.createServer((req, res) => {
    // 读取文件内容
    let html = fs.readFileSync(__dirname + '/10_table.html')

    res.end(html)
    
})

server.listen(9000,()=>{
    console.log('start');
})
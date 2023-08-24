const http = require('http');
const server = http.createServer((req, res) => {
    
    // 1,声明一个变量
    let body = '';
    // 2,绑定data事件 因为跟之前一样数据流只能用data监听
    req.on('data',chunk=>{
        body += chunk
    })
    // 3.绑定end事件
    req.on('end',()=>{
       
        console.log(body);
        res.end('heello HTTP')
    })
})

server.listen(9000,()=>{
    console.log('已启动');
})
// 1，导入http模块
const http = require('http');

// 2,创建服务对象
const server = http.createServer((request,response)=>{
    response.end('Hello HTTP ');

})

// 3,监听端口，启动服务
server.listen(9000,()=>{
    console.log('服务已启动');
});
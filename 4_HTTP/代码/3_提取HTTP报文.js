const http = require('http');

const server = http.createServer((req, res) => {
    res.end('http')

    // 获取请求的方法
    // console.log(req.method);

    // // 获取请求的URL
    // console.log(req.url);

    // // 获取请求的HTTP协议版本号
    // console.log(req.httpVersion);

    // 获取HTTP的请求头
    console.log(req.headers.host);


})

//3. 监听端口, 启动服务
server.listen(9000, () => {
    console.log('服务已经启动....')
});

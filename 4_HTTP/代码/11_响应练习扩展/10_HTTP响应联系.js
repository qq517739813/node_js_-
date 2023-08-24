const fs = require('fs');

const http = require('http')

const server = http.createServer((req, res) => {
    //获取请求url的路径
    let { pathname } = new URL(req.url, 'http://127.0.0.1');
    if (pathname === '/') {
        //读取文件内容
        let html = fs.readFileSync(__dirname + '/10_table.html');
        res.end(html); //设置响应体
    } else if (pathname === '/index.css') {
        //读取文件内容
        let css = fs.readFileSync(__dirname + '/index.css');
        res.end(css); //设置响应体
    } else if (pathname === '/index.js') {
        //读取文件内容
        let js = fs.readFileSync(__dirname + '/index.js');
        res.end(js); //设置响应体
    } else {
        res.statusCode = 404;
        res.end('<h1>404 Not Found</h1>')
    }

})

server.listen(9000, () => {
    console.log('start');
})
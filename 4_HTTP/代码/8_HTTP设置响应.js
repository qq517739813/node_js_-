// 导入http模块
const http = require('http');

const server = http.createServer((request, response) => {
    // 1,设置响应状态码
    // response.statusCode = 203;
    // response.statusCode = 404;
    // 2,响应状态的描述
    // response.statusMessage = 'TSS'
    // 3，响应头
    response.setHeader('Content-Type', 'text/html; charset=utf-8')
    response.setHeader('server', 'Node.js')
    response.setHeader('myHeader123', 'test test test')
    // 批量增加响应头一个键名不同值
    response.setHeader('test', ['a', 'b', 'c'])
    // 3，响应体的设置
    const list = [
        {
            name: 'a', value: '1',
            type: 'integer',
            age: '20'
        }
    ]
    response.write('love')
    response.write('love')
    response.write('love')
    response.write('list')
    response.end('hello world')
})
server.listen(9000, () => {
    console.log('已开启');
})
// 导入http模块
const http = require('http');

const server = http.createServer((request, response) => {

    // 获取请求的方法
    let method = request.method;
    // let {method} = request

    // 获取请求的url路径
    let { pathname } = new URL(request.url, 'https://127.0.0.1')

    // 设置响应头设置UFT-8编码
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    console.log(method,'method',pathname,'pathname');
    // 判断
    if (method === 'GET' && pathname === '/login') {
        response.end('登录界面')
    } else if (method === 'GET' && pathname === '/reg') {
        response.end('注册页面')
    } else {
        response.end('Nod Founddd')
    }

})
server.listen(9000, () => {
    console.log('已开启');
})
// 导入http模块
const http = require('http');

const server = http.createServer((request,response)=>{
    // 实例化URL的对象
    let url = new URL(request.url,'https://127.0.0.1')

    // 输出路径
    // console.log(url);
    // 输入keyword查询字符串也就是输入内容
    console.log(url.searchParams.get('keyword'));
    response.end('url new')
})
server.listen(9000,()=>{
    console.log('已开启');
})
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

// 声明一个中间件函数
function recorMiddleware(req, res, next) {
    const { url, ip } = req
    fs.appendFileSync(path.resolve(__dirname, './access.text'), `${url}${ip}\r\n`)
    next()
}

// 使用中间件函数全局使用
app.use(recorMiddleware)

app.get('/home', (req, res) => {
    res.end('Welcome')
})

app.get('/login', (req, res) => {
    res.end('welcomeLogin')
})

app.listen(3000, () => {
    console.log('服务已启动');
});
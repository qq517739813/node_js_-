/**
 * 按照要求搭建 HTTP 服务
 * 
 * GET   /login  显示表单网页
 * POST  /   获取表单中的『用户名』和『密码』
 */

const express = require('express');
const bodyParser = require('body-parser');// 专门解析请求体的包
const app = express();

// 解析Json格式的请求体中间件
const jsonParser = bodyParser.json();
// 解析querystring格式请求体的中间件
const urlencoded = bodyParser.urlencoded({ extended: false })






app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/11_form.html');
})



app.post('/login', urlencoded, (req, res) => {
    console.log(req.body);
    res.send('获取用户数据')
})

app.listen(3000, () => {
    console.log('服务已启动');
});
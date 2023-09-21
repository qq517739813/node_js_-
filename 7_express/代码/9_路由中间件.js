// 需求，针对admin，setting请求中要求url携带CODe=521参数，如未携带提示暗号错误

const express = require('express');

const app = express();



function checkCodeMiddleware(req, res, next) {
    // 判断ULR参数总是否携带code=521

    if (req.query.code === '521') {
        next()
    }else{
        res.send('填写错误')
    }
}



// 前台
app.get('/home', (req, res) => {
    res.send('前台')
})

// 后台
app.get('/admin',checkCodeMiddleware, (req, res) => {
    res.send('Welcome admin')
})

app.get('/settings',checkCodeMiddleware, (req, res) => {
    res.end('Welcome settings')
})

app.all('*', (req, res) => {
    res.send('<h1>404 Not Found</h1>')
})











app.listen(3000,()=>{
    console.log('服务已启动');
});
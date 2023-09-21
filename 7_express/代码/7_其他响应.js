const express = require('express');

const app = express();

app.get('/other', (req, res) => {
    //跳转响应
    // res.redirect('http://baidu.com')
    //下载响应
    // res.download(__dirname + '/package.json'); //单独才行
    // Json响应
    // res.json({
    //     name: 'package.json',
    //     slogin: 'baidu'
    // })
    res.sendFile(__dirname + '/2_路由.html')


})

app.listen(3000, () => {
    console.log('服务已启动');
});
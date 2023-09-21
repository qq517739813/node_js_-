const express = require('express');

const app = express();

app.get('/response', (req, res) => {
    // 原生响应
    // res.statusCode = 200;
    // res.statusMessage = 'Invalid'
    // res.setHeader('xxx','bbbb')
    // res.write('express')
    // res.end('Welcome')

    // express响应
    // res.status(200)
    // res.set('aaa','bbb')
    // res.send('Welcome')
    res.status(200).set('aaa','bbb').send('welcome')
})

app.listen(3000, () => {
    console.log('服务已启动');
});
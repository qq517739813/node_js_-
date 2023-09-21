const express = require('express');

const app = express();

app.get('/home', (req, res) => {
    res.end('Welcome')
})

app.listen(3000,()=>{
    console.log('服务已启动');
});
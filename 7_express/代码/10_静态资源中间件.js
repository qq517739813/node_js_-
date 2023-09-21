const express = require('express');

const app = express();

app.get('/home', (req, res) => {
    res.end('Welcome')
})


app.use(express.static(__dirname + '/public')); //根目录公共资源，


app.listen(3000, () => {
    console.log('服务已启动');
});
const express = require('express');

const app = express();

app.get('/home', (req, res) => {
    res.end('Welcome')
})

app.get('/', (req, res) => {
    console.log(req.ip);
    res.end('home')
})

app.post('/login',(req,res)=>{
    res.end('login')
})


app.listen(3000,()=>{
    console.log('服务已启动');
});
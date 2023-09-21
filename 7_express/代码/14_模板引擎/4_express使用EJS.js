const express = require('express');

const path = require('path');

const app = express();

// // 1.设置模板引擎
app.set('view engine', 'ejs'); // pug twing 第一步都是统一的，设置模板引擎pug 和twing都是
// 2.设置模板文件存放位置 模板文件：具有模板语法内容的文件
app.set('views', path.resolve(__dirname, './views'));


//创建路由
app.get('/home',(req, res)=>{
    // 3.render响应
    // res.render('模板的文件名','数据')
    let title = '没有难学的技术'
    res.render('home',{title})

})

app.listen(3000,()=>{
    console.log('服务已启用');
})
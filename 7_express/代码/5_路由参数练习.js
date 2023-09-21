//导入 express
const express = require('express');

//创建应用对象
const app = express();


//导入JSON文件
const { singers } = require('./singers.json')
console.log(singers);
//创建路由
app.get('/singers/:id.html', (req, res) => {
    const { id } = req.params
    //    在空数组中寻找对应ID的数据、
    let result = singers.find(item => {
        if (item.id === Number(id) ) {
            return true;
        }
    })
    console.log(result);






    // res.setHeader('content-type', 'text/html;charset=UTF-8');
    res.end(`
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h2>${result.singer_name}</h2>
    <img src=${result.singer_pic} />
</body>

</html>
    `);
});


//监听端口, 启动服务
app.listen(3000, () => {
    console.log('服务已经启动, 端口 3000 正在监听中....')
})

//再次着重记忆！！！！获取query参数的时候，是请求路径发生变化，例如127.0.0.1/3000/test?a=3&b=4这样就能拿到query对象里面有这几个参数 使用是req.query就能拿到这些键值对
// params的话呢是接收路径发生改变需要用占位符来站位，请求方式那边不变例如127.0.0.1/3000/1, 接收这边就/:id来占位在req.param中拿到占位符的键名请求路径的键值
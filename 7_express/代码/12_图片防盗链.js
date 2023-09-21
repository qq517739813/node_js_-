
// 一遍是通过检测请求头中的referer是不是同一个主机名例如127.0.0.1 才能给返回不然就不给

const express = require('express');

const app = express();

app.use((req, res, next) => {
    //检测请求头中的 referer 是否为 127.0.0.1
    //获取 referer
    let referer = req.get('referer');
    if (referer) {
        //实例化
        let url = new URL(referer);
        //获取 hostname
        let hostname = url.hostname;
        //判断
        if (hostname !== '127.0.0.1') {
            //响应 404 
            res.status(404).send('<h1>404 Not Found</h1>');
            return;
        }
    }
    next();
})

app.use(express.static(__dirname + '/public'))

app.listen(3000, () => {
    console.log('服务已启动');
});
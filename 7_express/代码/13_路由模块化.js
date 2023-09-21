/**
 * 针对 /admin  /setting 的请求, 要求 URL 携带 code=521 参数, 如未携带提示『暗号错误』  
 */

const express = require('express');
const homeRouter = require('./routes/homeRouter');
const adminRouter = require('./routes/adminRouter');
const app = express();
app.use(homeRouter)
app.use(adminRouter)
app.all('*', (req, res) => {
    res.send('<h1>404 Not Found</h1>');
})

app.listen(3000, () => {
    console.log('服务已启动');
});
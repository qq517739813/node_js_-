//1. 安装 mongoose
//2. 导入 mongoose
const mongoose = require('mongoose');

//设置 strictQuery 为 true
mongoose.set('strictQuery', true);

//3. 连接 mongodb 服务                        数据库的名称
mongoose.connect('mongodb://127.0.0.1:27017/bilibili');

//4. 设置回调
// 设置连接成功的回调  once 一次   事件回调函数只执行一次
mongoose.connection.once('open', () => {
    //5. 创建文档的结构对象
    //设置集合中文档的属性以及属性值的类型
    let BookSchema = new mongoose.Schema({
        name: String,
        author: String,
        price: Number,
        is_hot: Boolean
    });

    //6. 创建模型对象  对文档操作的封装对象
    let BookModel = mongoose.model('novels', BookSchema);
    //   7.读取单条数据
    // BookModel.findOne({ name: '狂飙' }, (err, data) => {
    //     if (err) {
    //         console.log('读取失败');
    //         return
    //     }
    //     console.log(data);

    // })
    // 根据ID获取文档
    // BookModel.findById('650a9bfee46f91a27260e392',(err, data) => {
    //     if (err) {
    //         console.log('读取失败~~~');
    //         return;
    //     }
    //     console.log(data);
    // })
    // 批量某个数据
    // BookModel.find({ author:'余华'},(err,data)=>{
    //     if (err) {
    //         console.log('读取失败~~');
    //         return
    //     }
    //     console.log(data);
    // })
    BookModel.find((err,data)=>{
        if (err) {
            console.log('读取失败~~~');
            return
        }
        console.log(data);
    })

});

// 设置连接错误的回调
mongoose.connection.on('error', () => {
    console.log('连接失败');
});

//设置连接关闭的回调
mongoose.connection.on('close', () => {
    console.log('连接关闭');
});


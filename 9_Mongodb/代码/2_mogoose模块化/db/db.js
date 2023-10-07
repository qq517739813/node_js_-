//1. 安装 mongoose
//2. 导入 mongoose
const mongoose = require('mongoose');
module.exports = function (success, error) {
    if (typeof error !== 'function') {
        error = () => {
            console.log('连接失败~ ');
        }
    }
    const { DBHOST, DBNAME, DBPORT } = require('../config/config')
    //设置 strictQuery 为 true
    // mongoose.set('strictQuery', true);

    //3. 连接 mongodb 服务                        数据库的名称
    mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`);



    mongoose.connection.once('open', () => {
        success()
    });


    // 设置连接错误的回调
    mongoose.connection.on('error', () => {
        // console.log('连接失败');
        error()
    });

    //设置连接关闭的回调
    mongoose.connection.on('close', () => {
        console.log('连接关闭');
    });

}

const db = require('./db/db');
const mongoose = require('mongoose');
const BookModel = require('./models/BookModel')
db(
    () => {


        //7. 新增
        BookModel.create({
            name: '西游记',
            author: '吴承恩',
            price: 19.9
        }, (err, data) => {
            //判断是否有错误
            if (err) {
                console.log(err);
                return;
            }
            //如果没有出错, 则输出插入后的文档对象
            console.log(data);
            //8. 关闭数据库连接 (项目运行过程中, 不会添加该代码)
            mongoose.disconnect();
        });
    }, () => {
        console.log('连接失败');
    }
)






